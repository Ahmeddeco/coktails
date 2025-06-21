import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

import localFont from "next/font/local"

gsap.registerPlugin(ScrollTrigger, SplitText)

const modern = localFont({
	src: "../public/fonts/Modern Negra Demo.ttf",
})

export const metadata = {
	title: "Cocktails",
	description: "Cocktails | Fresh Juices",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` ${modern.className} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
