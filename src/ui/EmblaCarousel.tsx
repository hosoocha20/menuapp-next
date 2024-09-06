import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import KioskUi from './KioskUi'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })
  ])
  const [isPlaying, setIsPlaying] = useState(false)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)



  return (
    <section className="embla w-full h-full  ">
      <div className="embla__viewport w-full h-full " ref={emblaRef}>
        <div className="embla__container w-full h-full ">
          {slides.map((img: string, index) => (
            <div className="embla__slide  w-full" key={index}>
              <KioskUi img={img}/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls  z-[10]">


        <div className="embla__dots  justify-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel