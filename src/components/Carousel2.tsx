import * as React from "react"

import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "../../components/ui/carousel"

import AutoPlay from 'embla-carousel-autoplay'

export default function CarouselDemo() {
const plugin = React.useRef(AutoPlay({delay: 100}))

  return (
    <Carousel orientation="vertical"       plugins={[plugin.current]} className="w-1/3 h-[200px] overflow-hidden overflow-y-hidden max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
