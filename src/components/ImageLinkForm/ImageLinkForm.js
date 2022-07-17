import React from "react";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{"This App detect faces in you pictures"}</p>
      <div className="center">
        <div className="center pa4 br3">

        <input className="f4 pa2 w-70 center" type="tex" />
        <button className="w-30 grow f4 link ph3 pv2 white bh-light">Detect</button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
