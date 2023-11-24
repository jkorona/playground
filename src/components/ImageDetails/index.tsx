import { Image } from "@/model/Image";
import styles from "./ImageDetails.module.css";

type Props = {
  image: Image;
};

function ImageDetails({ image }: Props) {
  return (
    <div>
      <img src={image.url} alt={image.title} className={styles.Image} />
      <ul className={styles.Properties}>
        <li>
          <strong>Album ID:</strong> {image.albumId}
        </li>
        <li>
          <strong>ID:</strong> {image.id}
        </li>
        <li>
          <strong>Title:</strong> {image.title}
        </li>
        <li>
          <strong>URL:</strong> <a href={image.url}>{image.url}</a>
        </li>
        <li>
          <strong>Thumbnail URL:</strong> <a href={image.thumbnailUrl}>{image.thumbnailUrl}</a>
        </li>
      </ul>
    </div>
  );
}

export default ImageDetails;