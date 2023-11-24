import { QueryClient, QueryClientProvider } from "react-query"
import Images from "./components/Images";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Images />
    </QueryClientProvider>
  );
}

export default App
