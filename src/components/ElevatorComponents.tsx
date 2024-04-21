import * as React from "react"
import elevData from '../data/elevatorcomponents.js'

import { Card, CardContent } from "/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/components/ui/carousel"
import ElevatorCard from "./ElevatorCard"

interface ElevatorCardProps {
    name: string;
    backImg: string;
    moreImg: string[]; // Adjust this line
  }

export default function CarouselSize() {
  return (
    <section>


        <Carousel

        className="w-[100%] items-center justify-center"
        >
            <div id="header-text" className="pl-[5vw] pt-[5vh]">
                <h2 className="text-[#063C79] font-medium text-4xl leading-[43.57px]">Elevator components</h2>
                <p className="leading-[28px] w-[48%] flex">
                    Discover our elevator components tailored to fit any elevator model.
                    Our industry-leading cab interior panels and ceilings are renowned
                    for their lightweight constructions and offer limitless design possibilities and finishes
                    <span className="flex align-end absolute right-10">
                    <CarouselPrevious className='mr-6' />
                    <CarouselNext />
                </span>
                    </p>
            </div>
            <div className="flex flex-col">


            <CarouselContent className='w-[10%]'>

                {
                    elevData.map((comp:ElevatorCardProps) => (
                        <CarouselItem key={comp.name}>
                            <div className="p-1">
                                <Card className='w-4 h-auto'>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={comp.backImg}/>
                                    </CardContent>
                                </Card>
                                 </div>
                            {/* <img src={comp.backImg}/> */}
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            </div>


        </Carousel>
    </section>

  )
}
