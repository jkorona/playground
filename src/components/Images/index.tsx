import ImagesList from "@/components/ImagesList";
import useImages from "@/hooks/useImages";

function Images() {
  const { data, isLoading } = useImages();

  if (isLoading) return (<h1>Loading...</h1>);

  return (
    <ImagesList images={data} />
  );
}

export default Images
