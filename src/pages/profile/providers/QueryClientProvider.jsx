import { QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../shared/config";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { queryClient } from "../../shared/config";

export const QueryClientProvider = ({ children }) => (
  <TanStackQueryClientProvider client={queryClient}>
    {children}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </TanStackQueryClientProvider>
);
