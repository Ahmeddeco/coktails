"use client"

import Image from "next/image"
import leftleaf from "@/public/images/hero-left-leaf.webp"
import rightleaf from "@/public/images/hero-right-leaf.webp"
import Link from "next/link"
import {useGSAP} from "@gsap/react"
import {GSDevTools} from "gsap/GSDevTools"
import {ScrollTrigger, SplitText} from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, SplitText, GSDevTools)

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {type: "chars, words"})
    const paragraphSplit = new SplitText(".subtitle", {type: "lines"})

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars, {yPercent: 100, duration: 1.8, ease: 'expo.out', stagger: 0.06})
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    })
    gsap.timeline({
      scrollTrigger: {trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true},
    })
      .to('.right-leaf', {y: 300}, 0)
      .to('.left-leaf', {y: -300}, 0)

    // GSDevTools.create()
  }, [])

  return (
    <>
      <section className="noisy " id="hero">
        <h1 className="title uppercase">juice</h1>
        <Image src={leftleaf} alt="left leaf" className="left-leaf"/>
        <Image src={rightleaf} alt="right leaf" className="right-leaf"/>
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="">Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br/>
                of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - design to delight your
                senses.
              </p>
              <Link href="#coktails">View Cocktails</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
