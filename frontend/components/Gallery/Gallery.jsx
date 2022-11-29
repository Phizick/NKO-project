import styles from "./Gallery.module.css";
import Slider from "./Slider.jsx";

const Gallery = () => {
  return (
    <div className={styles.slider_container}>
      <h2 className={styles.gallery_title}>Галерея</h2>
      <Slider />
    </div>
  );
};

export default Gallery;
