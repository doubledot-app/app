import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      networkMode: "always"
    },
    queries: {
      staleTime: 10 * 1000,
      refetchOnMount: true,
      networkMode: "always",
      structuralSharing: true,
      refetchOnWindowFocus: true,
      retryDelay: (attemptIndex) => {
        return Math.min(1000 * 2 ** attemptIndex, 30000)
      }
    }
  }
})
