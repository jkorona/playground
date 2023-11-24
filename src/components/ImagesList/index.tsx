import { Image } from "@/model/Image";
import styles from "./ImagesList.module.css";

import ImageCard from "../ImageCard";

function ImagesList({ images }: { images: Image[] }) {
  return (
    <ul className={styles.List}>
      {images.map((image) => (
        <ImageCard
          key={`image_${image.id}`}
          imageUrl={image.url}
          imageTitle={image.title}
        />
      ))}
    </ul>
  );
}

export default ImagesList;
