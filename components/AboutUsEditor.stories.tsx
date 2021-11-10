import AboutUsEditor from "./AboutUsEditor";

import { FaAnkh, FaEnvelope, FaVirusSlash, FaXRay } from "react-icons/fa";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "AboutUsEditor",
};


export const page = () => (
  <div className="min-w-280px">
    <AboutUsEditor
      description=""
      interests={[]}
      locations={[]}
      onDescriptionChange={()=>{}}
      onInterestsChange={()=>{}}
      onLocationsChange={()=>{}}
    />

  </div>
)
