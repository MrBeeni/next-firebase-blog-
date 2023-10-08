import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { MyProvider } from "@/context/MyContext";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MyProvider>
  );
}
