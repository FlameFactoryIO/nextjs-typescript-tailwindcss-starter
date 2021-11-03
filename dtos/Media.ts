import Impact from "./Impact";

export default interface Media {
  id: number;
  type: "IMAGE" | "VIDEO" | "TEXT";
  imageUrl?: string;
  videoUrl?: string;
  title?: string;
  text?: string;
  impact: Impact;
  order: number;
  textSize?: string;
  textAlign?: string;
  verticalTextAlign?: string;
  backgroundHexColor?: string;
  textHexColor?: string;
}
