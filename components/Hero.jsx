"use client"

import Image from "next/image"
import leftleaf from "@/public/images/hero-left-leaf.webp"
import rightleaf from "@/public/images/hero-right-leaf.webp"
import arrowImg from "@/public/images/arrow.webp"
import Link from "next/link"
import {useGSAP} from "@gsap/react"
import {ScrollTrigger, SplitText} from "gsap/all"
import gsap from "gsap"
import {useRef} from "react"
import {useMediaQuery} from "react-responsive"

gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {

  const videoRef = useRef()

  const isMobile = useMediaQuery({maxWidth: 768})

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

    // Leaf animation timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true,
      },
    })
      .to('.right-leaf', {y: 300}, 0)
      .to('.left-leaf', {y: -300}, 0)
      .to(".arrow", {y: 200}, 0)

    // Set up video scrubbing with ScrollTrigger
    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    // Make sure video is initially paused at the first frame
    videoRef.current.currentTime = 0
    videoRef.current.pause()

    // Function to create ScrollTrigger for video scrubbing
    // This controls the video timeline based on scroll position
    // allowing the video to be scrubbed as the user scrolls the page
    const createVideoScrubber = () => {
      // Create a ScrollTrigger that directly controls the video timeline
      ScrollTrigger.create({
        trigger: videoRef.current,
        start: startValue,
        end: endValue,
        scrub: .1, // Smoother scrubbing effect (lower values = smoother)
        pin: true,
        onUpdate: (self) => {
          // Calculate the current time based on scroll progress
          if (videoRef.current.duration) {
            const videoTime = self.progress * videoRef.current.duration
            videoRef.current.currentTime = videoTime
          }
        }
      })
    }
    createVideoScrubber()

  }, [])

  return (
    <>
      <section className="noisy " id="hero">
        <h1 className="title uppercase">juice</h1>
        <Image src={leftleaf} alt="left leaf" className="left-leaf"/>
        <Image src={rightleaf} alt="right leaf" className="right-leaf"/>
        <div className="body">
          <Image src={arrowImg} alt={arrowImg} className={'arrow'}/>
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
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  )
}

export default Hero
