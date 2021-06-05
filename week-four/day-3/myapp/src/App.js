import "./App.css";
import Image from "./image.js";

function App() {
  const imageList = [
    {
      src: "https://res.cloudinary.com/dxsty3st6/image/upload/v1620479680/hct-images/images/homepage-5_vzdix1.jpg",
      w: "220",
      h: "220",
    },
    {
      src: "https://res.cloudinary.com/dxsty3st6/image/upload/v1620479714/hct-images/images/homepage-7_srp2ax.png",
      w: "300",
      h: "300",
    },
    {
      src: "https://res.cloudinary.com/dxsty3st6/image/upload/v1620479695/hct-images/images/homepage-6_i7l4v3.png",
      w: "250",
      h: "250",
    },
    {
      src: "https://res.cloudinary.com/dxsty3st6/image/upload/v1620479748/hct-images/images/homepage-8_hsrqvg.jpg",
      w: "280",
      h: "280",
    },
  ];

  return (
    <div className="App">
      {imageList.map((imageItem) => {
        return (
          <Image
            key={`${imageItem.src}`}
            src={imageItem.src}
            w={imageItem.w}
            h={imageItem.h}
          />
        );
      })}
    </div>
  );
}

export default App;
