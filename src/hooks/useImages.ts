import { useQuery } from "react-query";

const fetchImages = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
  return response.json();
};

function useImages(query: string) {
  const { data, isLoading, isError } = useQuery('images', fetchImages);
  const filteredData = data?.filter((image: any) => image.title.includes(query?.toLowerCase()));

  return { data: filteredData, isLoading, isError };
}

export default useImages;
