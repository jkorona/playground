type Props = {
  imageUrl: string;
  imageTitle: string;
}

function ImageCard({ imageUrl, imageTitle }: Props) {
  return (
    <li>
      <img src={imageUrl} alt={imageTitle} />
      <p>{imageTitle}</p>
    </li>
  );
}

export default ImageCard;
