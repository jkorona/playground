import styles from './ImageCard.module.css';

type Props = {
  imageUrl: string;
  imageTitle: string;
  onClick: () => void;
}

function ImageCard({ imageUrl, imageTitle, onClick }: Props) {
  return (
    <li className={styles.ImageCard}>
      <img src={imageUrl} alt={imageTitle} className={styles.Image} />
      <p className={styles.Title}>{imageTitle}</p>
      <button className={styles.Button} onClick={onClick}/>
    </li>
  );
}

export default ImageCard;
