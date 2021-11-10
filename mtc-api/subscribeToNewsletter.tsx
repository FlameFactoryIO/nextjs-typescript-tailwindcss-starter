import jsonp from "jsonp";
import queryString from 'query-string';
import TagManager from 'react-gtm-module';
import { isValidEmail } from '../utils/validations';

export const subscribeToNewsletter = async (email) => new Promise<void>((resolve, reject) => {
  if (!isValidEmail(email)) {
    reject("Please enter a valid email address");
  }

  const formData = {
    EMAIL: email,
  };

  jsonp(
    `https://movethechain.us2.list-manage.com/subscribe/post-json?u=c7d5a52b4d02c5ed84a6c8c34&amp;id=cc979743f9&${queryString.stringify(
      formData
    )}`,
    { param: 'c' },

    (err, data) => {
      if (data) {
        TagManager.dataLayer({ dataLayer: { event: 'lp_signup' } });
        resolve();
      }
    },
  );
});
