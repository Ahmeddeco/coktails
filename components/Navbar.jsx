"use client"

import {navLinks} from "@/constants"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    })

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    )
  }, [])

  return (
    <nav>
      <div className="">
        <Link href="#home" className="flex items-center gap-2">
          <Image src={"/images/logo.webp"} alt="logo" width={28} height={28}/>
          <p>Velvet Pour</p>
        </Link>
        <ul>
          {navLinks.map(({id, title}) => (
            <li key={id}>
              <Link href={`#${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
