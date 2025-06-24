'use client'

import rightLeaf from '@/public/images/slider-right-leaf.webp'
import leftLeaf from '@/public/images/slider-left-leaf.webp'
import Image from "next/image"


const Menu = () => {
  return (
    <section id={'menu'} aria-labelledby={'menu-heading'}>
      <Image src={leftLeaf} alt={'left leaf'} id={'m-left-leaf'}/>
      <Image src={rightLeaf} alt={'right leaf'} id={'m-right-leaf'}/>

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
    </section>
  )
}
export default Menu
