import carDe1 from '../assets/cardecor1.svg'
import carDe2 from '../assets/cardecor2.svg'
import carDe3 from '../assets/cardecor3.svg'
import carDe4 from '../assets/cardecor4.svg'
import carDe5 from '../assets/cardecor5.svg'
import carDe6 from '../assets/cardecor6.svg'
import carDe7 from '../assets/cardecor7.svg'
import carDe8 from '../assets/cardecor8.svg'
import land1 from '../assets/landdoor1.svg'
import land2 from '../assets/landdoor2.svg'
import land3 from '../assets/landdoor3.svg'
import land4 from '../assets/landdoor4.svg'
import land5 from '../assets/landdoor5.svg'
import land6 from '../assets/landdoor6.svg'
import land7 from '../assets/landdoor7.svg'
import land8 from '../assets/landdoor8.svg'

import hand1 from '../assets/handrail1.svg'
import hand2 from '../assets/handrail2.svg'
import hand3 from '../assets/handrail3.svg'
import hand4 from '../assets/handrail4.svg'

import floor1 from '../assets/floors1.svg'
import floor2 from '../assets/floors2.svg'
import floor3 from '../assets/floors3.svg'
import floor4 from '../assets/floors4.svg'


import panel1 from '../assets/panel1.svg'
import panel2 from '../assets/panel2.svg'
import panel3 from '../assets/panel3.svg'
import panel4 from '../assets/panel4.svg'


const floor = [
    floor1, floor2, floor3, floor4
]
const hand = [
    hand1, hand2, hand3, hand4
]
const carDec = [
    carDe1, carDe2, carDe3, carDe4, carDe5, carDe6, carDe7, carDe8
]
const landDor = [
    land1, land2, land3, land4, land5, land6, land7, land8
]

const panel = [
    panel1, panel2, panel3, panel4
]
export default function Gallery() {
    return (
        <section className='w-full h-full flex flex-col items-center pt-20'>
            <div className='max-w-[1240px] mt-10'>
                <div id="carDecoration" className="text-[28px] bg-[#021E42] w-full h-20 rounded-xl mb-4 text-white flex items-center p-4">
                    Car decoration
                </div>
                <div className='flex justify-between flex-wrap ml-10 lg:ml-0'>
                    {carDec.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
            <div className='max-w-[1240px] mt-10'>
                <div id="carDecoration" className="text-[28px] bg-[#021E42] w-full h-20 rounded-xl mb-4 text-white flex items-center p-4">
                    Landing doors
                </div>
                <div className='flex justify-between flex-wrap ml-10 lg:ml-0'>
                    {landDor.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
            <div className='max-w-[1240px] mt-10'>
                <div id="carDecoration" className="text-[28px] bg-[#021E42]  w-full h-20 rounded-xl mb-4 text-white flex items-center p-4">
                   Handrails
                </div>
                <div className='flex justify-between gap-10 flex-wrap ml-10 lg:ml-0'>
                    {hand.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
            <div className='max-w-[1240px] mt-10'>
                <div id="carDecoration" className="text-[28px] bg-[#021E42]  w-full h-20 rounded-xl mb-4 text-white flex items-center p-4">
                   Floors
                </div>
                <div className='flex justify-between gap-10 flex-wrap ml-10 lg:ml-0'>
                    {floor.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
            <div className='max-w-[1240px] mt-10'>
                <div id="carDecoration" className="text-[28px] bg-[#021E42]  w-full h-20 rounded-xl mb-4 text-white flex items-center p-4">
                   Operational Panels
                </div>
                <div className='flex justify-between gap-10 flex-wrap ml-10 lg:ml-0'>
                    {panel.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
        </section>
    )
}