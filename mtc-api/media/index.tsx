//import 'react-native-get-random-values';
import client from "../apiClient";
import axios from "axios";
import { v4 as uuidV4 } from 'uuid';

class Media {
  /*
   * Create a secure upload request
   */
  async createUploadRequest({ token, name, size, mime, type }) {
    const { data } = await client.post(
      `/media/upload-request`,
      {
        name,
        mimetype: mime,
        size,
        type,
      },
      { headers: { auth: token } },
    );
    return data.data;
  }

  async uploadMedia({ token, name, size, mime, file, type }) {
    if (!name) {
      name = `${uuidV4()}.${mime.split('/').pop()}`;
    }
    const uploadData = await this.createUploadRequest({
      token,
      name,
      size,
      mime,
      type,
    });
    const formData = new FormData();
    Object.keys(uploadData.signedPostData.fields).forEach((fieldName) => {
      //@ts-ignore
      formData.append(fieldName, uploadData.signedPostData.fields[fieldName]);
    });
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const response = await axios.post(
      uploadData.signedPostData.url,
      formData,
      config,
    );

    return {
      url: uploadData.cdnUrl,
      confirmationKey: uploadData.confirmationKey,
    };
  }

  /*
   * Uploads a picture to S3
   * Returns URL from uploaded file
   */
  async uploadImage(data) {
    return this.uploadMedia({ ...data, type: 'image' });
  }

  async uploadVideo(data) {
    return this.uploadMedia({ ...data, type: 'video' });
  }
}

export default new Media();
