'use client'

import rightLeaf from '@/public/images/slider-right-leaf.webp'
import leftLeaf from '@/public/images/slider-left-leaf.webp'
import rightArrow from "@/public/images/right-arrow.webp"
import leftArrow from "@/public/images/left-arrow.webp"


import Image from "next/image"
import {allCocktails} from "@/constants"
import {useRef, useState} from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

const Menu = () => {
  const contentRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useGSAP(() => {
    gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1,})
    gsap.fromTo('.cocktail img', {opacity: 0, xPercent: -100}, {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut'
    })
    gsap.fromTo('.details h2', {yPercent: 100, opacity: 0}, {
      yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
    gsap.fromTo('.details p', {yPercent: 100, opacity: 0}, {
      yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
  }, [currentIndex])

  const totalCocktails = allCocktails.length

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails

    setCurrentIndex(newIndex)
  }

  const getCocktailAt = (indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
  }

  const currentCocktail = getCocktailAt(0)
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)


  return (
    <section id={'menu'} aria-labelledby={'menu-heading'}>
      <Image src={leftLeaf} alt={'left leaf'} id={'m-left-leaf'}/>
      <Image src={rightLeaf} alt={'right leaf'} id={'m-right-leaf'}/>

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label={'Cocktail Navigation'}>
        {allCocktails.map((cocktail, index) => {

          const isActive = index === currentIndex
          return (
            <button key={cocktail.id}
                    className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'} `}
                    onClick={() => goToSlide(index)}>{cocktail.name}</button>

          )
        })
        }
      </nav>

      <div className="content">
        <div className="arrows">
          <button className={'text-left'} onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <Image src={rightArrow} alt={'right arrow'} aria-hidden={true}/>
          </button>

          <button className={'text-left'} onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <Image src={leftArrow} alt={'left arrow'} aria-hidden={true}/>
          </button>
        </div>

        <div className="cocktail">
          <Image src={currentCocktail.image} alt={'cocktail'} className={'object-contain'} width={352} height={499}/>
        </div>

        <div className="recipe">
          <div className="info" ref={contentRef}>
            <p>Recipe for :</p>
            <p id="title">
              {currentCocktail.name}
            </p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Menu
