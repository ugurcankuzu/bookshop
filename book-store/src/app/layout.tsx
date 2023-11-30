import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartContextProvider } from "@/components/context/cartContext";
const inter = Inter({ subsets: ["latin"] });

// TODO: Veritabanı ile konuşarak BackOffice'ten alınabilir
export const metadata: Metadata = {
  title: "BookShop | Your favourite book store",
  description: "You can find any book inside...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + bodyStyle}>
        <CartContextProvider>
          <Navbar />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}

const bodyStyle = " w-screen min-h-screen bg-pearl flex flex-col";
