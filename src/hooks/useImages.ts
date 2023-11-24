import { useQuery } from "react-query";

const fetchImages = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
  return res.json();
};

function useImages() {
  const { data, isLoading, isError } = useQuery('images', fetchImages);
  return { data, isLoading, isError };
}

export default useImages;
