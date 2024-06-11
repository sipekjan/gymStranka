import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import "./Photo.css";

export default function Photo() {
  return (
    <>
      <Header />
      <Background />
      <div className="Photo-content">
        <img src="./src/assets/equipment.png" alt="" />
        <img src="./src/assets/image1.png" alt="" />
        <img src="./src/assets/image2.png" alt="" />
        <img src="./src/assets/image3.png" alt="" />
        <img src="./src/assets/image4.png" alt="" />
        <img src="./src/assets/image5.png" alt="" />
        <img src="./src/assets/image6.png" alt="" />
        <img src="./src/assets/image7.png" alt="" />
        <img src="./src/assets/image8.png" alt="" />
      </div>
    </>
  );
}
