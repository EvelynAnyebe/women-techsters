import Button from "./button.js";
import { useState } from "react";

function Image({ src, w, h }) {
  const [imgSize, setImgSize] = useState({ width: parseFloat(w), height: parseFloat(h) });

  const increaseSize = () => {
    const newWidth = (imgSize.width * 0.2)+imgSize.width;
    const newHeight = (imgSize.height * 0.2) + imgSize.height;
    setImgSize({ width: newWidth, height: newHeight });
  };

  const decreaseSize = () => {
    const newWidth = imgSize.width - (imgSize.width * 0.2);
    const newHeight = imgSize.height - (imgSize.height * 0.2);
    setImgSize({ width: parseFloat(newWidth), height: parseFloat(newHeight) });
  };

  return (
    <div className="image-container">
      <img
        src={src}
        width={imgSize.width}
        height={imgSize.height}
        style={imgSize}
        alt=""
      />
      <div className="btn-container">
        <Button value="Increase" clickHandler={increaseSize} />
        <Button value="Decrease" clickHandler={decreaseSize} />
      </div>
    </div>
  );
}

export default Image;
