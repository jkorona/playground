import { Image } from "@/model/Image";

type Props = {
  image: Image;
};

function ImageDetails({ image }: Props) {
  return (
    <div>
      <h3>Image Details</h3>
      <ul>
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