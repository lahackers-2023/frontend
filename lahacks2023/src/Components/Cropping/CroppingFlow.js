import React, { useState } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";
import PostcardFront from "../Postcard/PostcardFront";
import PostcardBack from "../Postcard/PostcardBack";

import axios from "axios";

function CroppingFlow() {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [backText, setBackText] = useState("");

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <div className="container">
      {currentPage === "choose-img" ? (
        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : currentPage === "postcard-sent" ? (
        <>YOUR POSTCARD HAS BEEN SENT</>
      ) : (
        <div>
          <div
            style={{
              maxWidth: "100vw",
              width: "100vh",
              margin: "auto",
              left: 0,
              right: 0,
            }}
          >
            {currentPage === "img-cropped" ? (
              <PostcardFront src={imgAfterCrop} />
            ) : (
              <PostcardBack setMessageText={setBackText} />
            )}
          </div>

          <button
            onClick={() => {
              setCurrentPage("crop-img");
            }}
            className="btn"
          >
            Crop
          </button>

          <button
            onClick={() => {
              setCurrentPage("choose-img");
              setImage("");
            }}
            className="btn"
          >
            New Postcard
          </button>
          {currentPage === "img-cropped" ? (
            <button
              onClick={() => {
                setCurrentPage("write-message");
              }}
              className="btn"
            >
              Write Message
            </button>
          ) : (
            <button
              onClick={() => {
                setCurrentPage("img-cropped");
              }}
              className="btn"
            >
              View Postcard
            </button>
          )}
          <button
            onClick={() => {
              function dataURItoBlob(dataURI) {
                var binary = atob(dataURI.split(",")[1]);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                  array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], {
                  type: "image/jpeg",
                });
              }
              setCurrentPage("postcard-sent");
              console.log(backText);
              const file = dataURItoBlob(imgAfterCrop);
              const bodyFormData = new FormData();
              bodyFormData.append("file", file);
              axios({
                method: "post",
                url: "http://127.0.0.1:8000/postcard/upload?uid=12342536475",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
                  console.log(response);
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });
            }}
            className="btn"
          >
            Confirm Postcard
          </button>
        </div>
      )}
    </div>
  );
}

export default CroppingFlow;
