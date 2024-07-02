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
import squareBack from '../assets/blueSquareBack.svg'
import landDoor3 from '../assets/landingDoors3.svg'
import panel1 from '../assets/panel1.svg'
import floor1 from '../assets/floors1.svg'


// import AutoPlay from 'embla-carousel-autoplay'



import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

import { Card, CardContent } from "../../components/ui/card"
import { Link } from "react-router-dom"
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

  
  export default function ImageCarousel() {
    
    // const plugin = React.useRef(AutoPlay({delay: 2000}))

    const isTabletAbove = UseMediaQuery("(min-width: 1024px)");

    return (
      <div className=' bg-blue-50 flex flex-col items-center mt-10'>
      <Carousel
      id='component-section'
        opts={{
          align: "start",
          loop: false
        }}
        // ref={emblaRef}
        className="w-[90vw] max-h-[fit]"
        style={{backgroundImage: `url(${squareBack  })`}}
      >
                   <div id="header-text" className="pl-[5vw] pt-[5vh]">
                 <h2 className="text-[#063C79] font-medium text-4xl leading-[43.57px]">Elevator components</h2>
               <p className="leading-[28px] md:w-[70%] w-[100%] text-xs lg:text-base flex">
                     Discover our elevator components tailored to fit any elevator model.
                     Our industry-leading cab interior panels and ceilings are renowned
                     for their lightweight constructions and offer limitless design possibilities and finishes
                     </p>
             </div>
        <CarouselContent className='w-[90%] mt-[5rem] lg:mt-0 mb-[5rem] gap-4'>
          {elevData.map((comp) => (
            <CarouselItem key={comp.key} className="w-[467px] h-[440px]" style={{ backgroundImage: `url(${comp.backImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} >
              <Link to='/gallery'>
              <div className="w-[467px] h-[440px]" >
                <Card  className="border-box flex items-center sm p-0 md:justify-center w-full">
                  <CardContent className="bg-gradient-radial from-[#ffffff] to-[#999999] flex   box-border   lg:ml-0 justify-between pr-4 pl-4     bottom-0 absolute rounded-sm bg-[#999999] h-[72px]  w-[467px] opacity-85 shadow-sm">
                    <h4 className="xl:text-xl  text-white max-w-[100px] h-[36px] p-2 bottom-4">{comp.text}</h4>
                    {/* <button className='border-expBlueDark border rounded-xl text-white p-0 h-[36px] w-[25vw] lg:w-[99px] text-sm'> See more</button> */}
                    { isTabletAbove &&   <button className=' text-white border h-[36px] w-[104px] mt-[12px] absolute bottom-2 right-4 border-expBlueDark rounded-3xl'>See more</button>}

    
                   
                  </CardContent>
                </Card>
              </div>
              </Link>
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
// export default function ImageCarousel() {
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
    },

    {
      key: 'opePanel',
      text: 'Operational Panel',
      backImg: panel1,
  },
  {
    key: 'floor',
    text: 'Floors',
    backImg: floor1,
},
]