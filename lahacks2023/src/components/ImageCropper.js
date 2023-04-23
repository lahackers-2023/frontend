import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "100%",
              height: "80%",
              backgroundColor: "#fff",
            },
          }}
        />
      </div>
      <div style={{ position: "absolute", bottom: 0, marginBottom: 20, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto'}}>

        <div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>
                    Aspect Ratio
                </div>
                <input
                    type="range"
                    value={aspectRatio}
                    min={1/3}
                    max={3/1}
                    step={0.10}
                    aria-labelledby="Aspect Ratio"
                    onChange={(e) => {
                        setAspectRatio(e.target.value)
                    }}
                />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>
                    Zoom
                </div>
                <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.05}
                    aria-labelledby="Zoom"
                    onChange={(e) => {
                        setZoom(e.target.value)
                    }}
                />
            </div>
      </div>
      <div style={{textAlign: "center"}}>
        <button className="btn" onClick={onCropCancel}>
          Cancel
        </button>

        <button
          className="btn"
          onClick={() => {
            onCropDone(croppedArea);
          }}
        >
          Done
        </button>
      </div>
      </div>
    </div>
  );
}

export default ImageCropper;