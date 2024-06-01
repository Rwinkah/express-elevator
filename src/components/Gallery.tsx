import carDe1 from '../assets/cardecor1.svg'
import carDe2 from '../assets/cardecor2.svg'
import carDe3 from '../assets/cardecor3.svg'
import carDe4 from '../assets/cardecor4.svg'
import carDe5 from '../assets/cardecor5.svg'
import carDe6 from '../assets/cardecor6.svg'
import carDe7 from '../assets/cardecor7.svg'
import carDe8 from '../assets/cardecor8.svg'


const carDec = [
    carDe1, carDe2, carDe3, carDe4, carDe5, carDe6, carDe7, carDe8
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
                    {carDec.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
            <div className='max-w-[1240px] mt-10'>
                <div id="carDecoration" className="text-[28px] bg-[#021E42]  w-full h-20 rounded-xl mb-4 text-white flex items-center p-4">
                   Handrails
                </div>
                <div className='flex justify-between flex-wrap ml-10 lg:ml-0'>
                    {carDec.map((carimg)=> 
                        <img className='mt-10' src={carimg}/>
                    )}
                </div>
            </div>
        </section>
    )
}