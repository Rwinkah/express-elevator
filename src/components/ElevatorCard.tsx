/**
 * Renders an elevator card component.
 *
 * @param {elevatorCardProps} props - The props for the ElevatorCard component.
 * @returns {JSX.Element} The rendered ElevatorCard component.
 */

type ImageArray = string[];
type ElevatorItem = {
  [key: string]: ImageArray;
};
type ElevData = ElevatorItem[];

interface ElevatorCardProps {
    name: string;
    moreImg: string[]; // Adjust this line
  }

import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

// import elevData from '../data/elevatorcomponents.js'


import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
  
export default function ElevatorCard ({name, moreImg}:ElevatorCardProps) {

    return (
        <div id="elevator-card" className="relative w-[30%] h-auto">
            <div className="flex">
                <img
                    src='../assets/carDecoration1.svg'
                    alt="elevator component"
                    className="absolute inset-0 w-full h-full object-cover" 
                    />
                <h6>{name} </h6>
            </div>  
            <Popover>
                <PopoverTrigger asChild>
                    <button>see more</button>
                </PopoverTrigger>
                <PopoverContent className='w-[80%]'>
                    <div>
                        {moreImg.map((img, index) => (
                            <img src={img} alt="elevator component" key={index} />
                            ))}``
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}