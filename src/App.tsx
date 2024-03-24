import { Center } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 15,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Center height="100vh" gap={9}>
        <RouterProvider router={router} />
      </Center>
    </QueryClientProvider>
  );
}

export default App;
