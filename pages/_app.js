import { createGlobalStyle } from "styled-components"
import { Inter } from 'next/font/google'
import { CartContextProvider } from "@/components/CartContext";
const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'); */
body{
  background-color: #eee;
  padding: 0;
  margin: 0;
  /* font-family: 'Poppins', sans-serif; */
}
`;

const inter = Inter({ subsets: ['latin'] })
 


export default function App({ Component, pageProps }) {
  return (
  <main className={inter.className}>
    <CartContextProvider>
  <GlobalStyles />
  <Component {...pageProps} />
  </CartContextProvider>
  
  </main>
  );
}
