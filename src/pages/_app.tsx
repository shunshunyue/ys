import "@/styles/globals.css";
import 'react-quill/dist/quill.snow.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { PrimeReactProvider } from 'primereact/api';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  )
}
