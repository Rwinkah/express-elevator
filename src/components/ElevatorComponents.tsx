import * as React from "react"
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
import landDoor3 from '../assets/landingDoors3.svg'


import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import ElevatorCard from "./ElevatorCard"

interface ElevatorCardProps {
    name: string;
    backImg: string;
    moreImg: string[]; // Adjust this line
  }

  
  export default function CarouselSize() {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max h-fit mb-[10rem]"
      >
                   <div id="header-text" className="pl-[5vw] pt-[5vh]">
                 <h2 className="text-[#063C79] font-medium text-4xl leading-[43.57px]">Elevator components</h2>
               <p className="leading-[28px] w-[48%] flex">
                     Discover our elevator components tailored to fit any elevator model.
                     Our industry-leading cab interior panels and ceilings are renowned
                     for their lightweight constructions and offer limitless design possibilities and finishes
                     </p>
             </div>
        <CarouselContent>
          {elevData.map((comp) => (
            <CarouselItem key={comp.key} className="md:basis-1/2 lg:basis-1/3" >
              <div className="w-[420px] h-[440px]">
                <Card style={{ backgroundImage: `url(${comp.backImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }} className="flex  justify-center">
                  <CardContent className="flex pt-6 box-border  flex-col bottom-10 absolute rounded-sm bg-[#999999] h-[fit] opacity-85 shadow-sm w-[23%]">
                    <h4 className="text-xl text-white w-[60%]">{comp.text}</h4>
                    {/* <img className='w-[100%] h-[100%]'src={comp.backImg} /> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <span className="flex align-end absolute right-10 ">
                     <CarouselPrevious className='mr-6' />
                     <CarouselNext />
                 </span>
      </Carousel>
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