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

interface ElevatorCardProps {
    key: string;
    backImg: string;
    images: string[]; // Adjust this line
  }

const  elevData: ElevatorCardProps[] = [
    {
        key: 'carDecoration',
        backImg: carDec1,
        images : [carDec1, carDec2, carDec3],
    },

    {
        key: 'elevatorWell',
        backImg: elevWell1,
        images : [elevWell1, elevWell2, elevWell3],
    },

    {
        key: 'handRailing',
        backImg: handRail1,
        images : [handRail1, handRail2, handRail3],
    },

    {
        key: 'landingDoors',
        backImg: landDoor1,
        images : [landDoor1, landDoor2, landDoor3],
    }

]


export default elevData;