import { Image } from "@/model/Image";
import ImageCard from "../ImageCard";
import styles from "./ImagesList.module.css";

type Props = {
  images: Image[];
  onShowDetails: (image: Image) => void;
}

function ImagesList({ images, onShowDetails }: Props) {
  return (
    <ul className={styles.List}>
      {images.map((image) => (
        <ImageCard
          key={`image_${image.id}`}
          imageUrl={image.url}
          imageTitle={image.title}
          onClick={() => onShowDetails(image)}
        />
      ))}
    </ul>
  );
}

export default ImagesList;
