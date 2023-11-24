import styles from './ImageCard.module.css';

type Props = {
  imageUrl: string;
  imageTitle: string;
  onClick: () => void;
}

function ImageCard({ imageUrl, imageTitle, onClick }: Props) {
  return (
    <li className={styles.ImageCard} onClick={onClick}>
      <img src={imageUrl} alt={imageTitle} className={styles.Image} />
      <p className={styles.Title}>{imageTitle}</p>
    </li>
  );
}

export default ImageCard;
