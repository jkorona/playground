import styles from './ImageCard.module.css';

type Props = {
  imageUrl: string;
  imageTitle: string;
}

function ImageCard({ imageUrl, imageTitle }: Props) {
  return (
    <li>
      <img src={imageUrl} alt={imageTitle} className={styles.Image} />
      <p>{imageTitle}</p>
    </li>
  );
}

export default ImageCard;
