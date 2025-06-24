'use client'

import Image from "next/image"
import rightLeaf from '@/public/images/cocktail-right-leaf.webp'
import leftLeaf from "@/public/images/cocktail-left-leaf.webp"
import {cocktailLists, mockTailLists} from "@/constants"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

const Cocktails = () => {

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#cocktails',
          start: 'top 30%',
          end: 'bottom 80%',
          scrub: true,
        },
      }
    )

    parallaxTimeline.from('#c-left-leaf', {
        x: -100, y: 100
      }
    )
    parallaxTimeline.from('#c-right-leaf', {
        x: 100, y: 100
      }
    )
  }, [])

  return (
    <section id={'cocktails'} className={'noisy'}>
      <Image src={leftLeaf} alt={'left leaf'} id={'c-left-leaf'}/>
      <Image src={rightLeaf} alt={'right leaf'} id={'c-right-leaf'}/>

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({country, detail, name, price}) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map(({country, detail, name, price}) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Cocktails
