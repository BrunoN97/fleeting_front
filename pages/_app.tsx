import ResponsiveAppBar from "../src/components/appBar/appBar";
import CustomPaginationActionsTable from "../src/components/table/tableToDo";
import { AuthProvider } from "../src/context/AuthContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
