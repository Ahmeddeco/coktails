'use client'

import Image from "next/image"
import gridImg1 from '@/public/images/abt1.webp'
import gridImg2 from '@/public/images/abt2.webp'
import gridImg3 from '@/public/images/abt3.webp'
import gridImg4 from '@/public/images/abt4.webp'
import gridImg5 from '@/public/images/abt5.webp'
import {useGSAP} from "@gsap/react"
import {SplitText} from "gsap/all"
import gsap from "gsap"


const About = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    })

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center'
      }
    })

      .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, easing: "expo.out", stagger: 0.02
      })

      .from('.top-grid div,.bottom-grid div', {
        opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04
      }, '-=0.5')
  }, [])

  return (
    <section id={'about'}>
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>Where every detail matters <span className="text-white">-</span> from muddle to garnish</h2>
          </div>
          <div className="sub-content">
            <p>Every cocktail we serve is a reflection of our obsession with detail - from the first muddle to the final
              garnish. That care is what turns a simple drink into something truly memorable.</p>
            <div className="">
              <p className="md:text-3xl text-xl font-bold"><span>4.5</span>/5</p>
              <p className="text-sm text-white-100">More tha +12000 customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy"/>
          <Image src={gridImg1} alt={'grid image'}/>
        </div>

        <div className="md:col-span-6">
          <div className="noisy"/>
          <Image src={gridImg2} alt={'grid image'}/>
        </div>

        <div className="md:col-span-3">
          <div className="noisy"/>
          <Image src={gridImg5} alt={'grid image'}/>
        </div>
      </div>

      <div className="bottom-grid">

        <div className="md:col-span-8">
          <div className="noisy"/>
          <Image src={gridImg3} alt={'grid image'}/>
        </div>

        <div className="md:col-span-4">
          <div className="noisy"/>
          <Image src={gridImg4} alt={'grid image'}/>
        </div>

      </div>
    </section>
  )
}
export default About
