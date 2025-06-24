'use client'

import Image from "next/image"
import footerRightLeaf from '@/public/images/footer-right-leaf.webp'
import footerLeftLeaf from '@/public/images/footer-left-leaf.webp'
import {openingHours, socials} from "@/constants"
import Link from "next/link"
import {useGSAP} from '@gsap/react'
import {SplitText} from 'gsap/all'
import gsap from 'gsap'


const Footer = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', {type: 'words'})

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: "power1.inOut"
    })

    timeline
      .from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .to('#f-right-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
      }).to('#f-left-leaf', {
      y: '-50', duration: 1, ease: 'power1.inOut'
    }, '<')
  })


  return (
    <footer id={'contact'}>
      <Image src={footerRightLeaf} alt={'footer right leaf'} id={'f-right-leaf'}/>
      <Image src={footerLeftLeaf} alt={'footer left leaf'} id={'f-left-leaf'}/>

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div className="">
          <h3>Open Every Day</h3>
          {openingHours.map(({day, time}) => (
            <p key={day}>{day} : {time}</p>
          ))}
        </div>

        <div className="">
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map(({name, icon, url}) => (
              <Link href={url} key={name} target={'_blank'}><Image src={icon} alt={name} width={30} height={30}/></Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
