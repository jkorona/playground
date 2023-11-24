import { useState } from "react";
import Filters from "@/components/Filters";
import ImagesList from "@/components/ImagesList";
import Modal from "@/components/Modal";
import ImageDetails from "@/components/ImageDetails";
import useImages from "@/hooks/useImages";
import { Image } from "@/model/Image";

function Images() {
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const { data, isLoading } = useImages(query);

  if (isLoading) return (<h1>Loading...</h1>);

  return (
    <>
      <Filters onChange={setQuery} />
      <ImagesList
        images={data}
        onShowDetails={setSelectedImage}
      />
      <Modal show={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <ImageDetails image={selectedImage!} />
      </Modal>
    </>
  );
}

export default Images
