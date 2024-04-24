// import * as React from "react"
import carDec1 from '../assets/carDecoration1.svg'
import carDec2 from '../assets/carDecoration2.svg'
import carDec3 from '../assets/carDecoration3.svg'
import elevWell1 from '../assets/elevatorWell1.svg'
import elevWell2 from '../assets/elevatorWell2.svg'
import elevWell3 from '../assets/elevatorWell3.svg'
import handRail1 from '../assets/handRailing1.svg'
import handRail2 from '../assets/handRailing2.svg'
import handRail3 from '../assets/handRailing3.svg'
import landDoor1 from '../assets/landingDoors1.svg'
import landDoor2 from '../assets/landingDoors2.svg'
import UseMediaQuery from '../../lib/use-media-query'
import landDoor3 from '../assets/landingDoors3.svg'


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
// import ElevatorCard from "./ElevatorCard"

// interface ElevatorCardProps {
//     name: string;
//     backImg: string;
//     moreImg: string[]; // Adjust this line
//   }

  
  export default function CarouselSize() {
    const isTabletAbove = UseMediaQuery("(min-width: 1440px)");

    return (
      <div className=' bg-blue-50 flex flex-col items-center'>
 <Carousel
      id='component-section'
        opts={{
          align: "start",
        }}
        className="w-[90vw] max h-[fit]  bg-blue-50"
      >
                   <div id="header-text" className="pl-[5vw] pt-[5vh]">
                 <h2 className="text-[#063C79] font-medium text-4xl leading-[43.57px]">Elevator components</h2>
               <p className="leading-[28px] md:w-[48%] w-[80%] flex">
                     Discover our elevator components tailored to fit any elevator model.
                     Our industry-leading cab interior panels and ceilings are renowned
                     for their lightweight constructions and offer limitless design possibilities and finishes
                     </p>
             </div>
        <CarouselContent className='w-[90%] mb-[5rem] gap-4'>
          {elevData.map((comp) => (
            <CarouselItem key={comp.key} className="md:basis-1/2 lg:basis-1/3" style={{ backgroundImage: `url(${comp.backImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} >
              <div className="w-[467px] h-[440px]" >
                <Card  className="flex items-center sm p-0 md:justify-center w-full">
                  <CardContent className="bg-gradient-radial from-[#ffffff] to-[#999999] flex  pt-3 pb-3 box-border ml-2 lg:ml-0 pl-3 pr-3  w-[80%]   bottom-10 absolute rounded-sm bg-[#999999] h-[72px]  xl:w-[30%] opacity-85 shadow-sm xs:w-[80%] md:w-[30%]">
                    <h4 className="xl:text-xl  text-white w-[60%] h-[36px] p-2">{comp.text}</h4>
                    {/* <button className='border-expBlueDark border rounded-xl text-white p-0 h-[36px] w-[25vw] lg:w-[99px] text-sm'> See more</button> */}
                    { isTabletAbove &&  <Popover>
                <PopoverTrigger asChild>
                    <button className=' text-white border border-expBlueDark rounded-xl w-2/5'>See more</button>
                </PopoverTrigger>
                <PopoverContent className=' flex md:w-fit w-1/4 h-1/4'>
                    <div className='flex md:flex-row  gap-4 justify-between'>
                        {comp.images.map((img, index) => (
                            <img className='' src={img} alt="elevator component" key={index} />
                            ))}
                    </div>
                </PopoverContent>
            </Popover>}
                   
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <span className="flex w-[100%] justify-center">
                     <CarouselPrevious className='mr-6' />
                     <CarouselNext />
                 </span>
      </Carousel>
      </div>
     
    )
  }
// export default function CarouselSize() {
//   return (
//     <section id="carousel-COMPONENT">


//         <Carousel

//         className="w-full max-"
//         >
//             <div id="header-text" className="pl-[5vw] pt-[5vh]">
//                 <h2 className="text-[#063C79] font-medium text-4xl leading-[43.57px]">Elevator components</h2>
//                 <p className="leading-[28px] w-[48%] flex">
//                     Discover our elevator components tailored to fit any elevator model.
//                     Our industry-leading cab interior panels and ceilings are renowned
//                     for their lightweight constructions and offer limitless design possibilities and finishes
//                     <span className="flex align-end absolute right-10">
//                     <CarouselPrevious className='mr-6' />
//                     <CarouselNext />
//                 </span>
//                     </p>
//             </div>
//             <div className="flex flex-col">


//             <CarouselContent className=''>
//                 {
//                     elevData.map((comp) => (
//                         <CarouselItem key={comp.key} className="md:basis-1/2 lg:basis-1/3">
//                             <div className="p-1">
//                                 <Card className='w-4 h-auto'>
//                                     <CardContent className="flex aspect-square items-center justify-center p-6">
//                                     <img src={comp.backImg}/>
//                                     </CardContent>
//                                 </Card>
//                                  </div>
//                             {/* <img src={comp.backImg}/> */}
//                         </CarouselItem>
//                     ))
//                 }
//             </CarouselContent>
//             </div>


//         </Carousel>
//     </section>

//   )
// }

const  elevData = [
    {
        key: 'carDecoration',
        text: 'Car decoration',
        backImg: carDec1,
        images : [carDec1, carDec2, carDec3],
    },

    {
        key: 'elevatorWell',
        text: 'Elevator well',
        backImg: elevWell1,
        images : [elevWell1, elevWell2, elevWell3],
    },

    {
        key: 'handRailing',
        text: 'Hand railing',
        backImg: handRail1,
        images : [handRail1, handRail2, handRail3],
    },

    {
        key: 'landingDoors',
        text: 'Landing doors',
        backImg: landDoor1,
        images : [landDoor1, landDoor2, landDoor3],
    }

]