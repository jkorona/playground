import styles from './ImageCard.module.css';

type Props = {
  imageUrl: string;
  imageTitle: string;
}

function ImageCard({ imageUrl, imageTitle }: Props) {
  return (
    <li className={styles.ImageCard}>
      <img src={imageUrl} alt={imageTitle} className={styles.Image} />
      <p className={styles.Title}>{imageTitle}</p>
    </li>
  );
}

export default ImageCard;
