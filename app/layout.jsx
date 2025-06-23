import "./globals.css"
import Navbar from "@/components/Navbar"
import localFont from "next/font/local"


const roboto = localFont({
  src: "../public/fonts/Roboto.ttf",
})

export const metadata = {
  title: "Cocktails",
  description: "Cocktails | Fresh Juices",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={` ${roboto.className} antialiased`}>
    <Navbar/>
    {children}
    </body>
    </html>
  )
}
