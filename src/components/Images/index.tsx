import { useState } from "react";
import Filters from "@/components/Filters";
import ImagesList from "@/components/ImagesList";
import useImages from "@/hooks/useImages";

function Images() {
  const [query, setQuery] = useState<string>("");
  const { data, isLoading } = useImages(query);

  if (isLoading) return (<h1>Loading...</h1>);

  return (
    <>
      <Filters onChange={setQuery} />
      <ImagesList images={data} />
    </>
  );
}

export default Images
