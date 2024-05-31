import elevator from '../assets/expreessElevator.svg'
import gradBack from '../assets/expressDarkGradient.svg'
import elevIcon from '../assets/elevatorFloor.svg'
import wavyBack from '../assets/expressWavyLine.svg'
import smooth from  '../assets/expressSmooth.svg'
import safe from '../assets/expressSafe.svg'
import swift from '../assets/expressSwift.svg'


import {  motion } from "framer-motion";

const item = {
    initial: { y: 0, opacity: 1 }, // Start from the original position
    animate: { 
        y: [0, -60, -110, -60, 0], // Move up 50px three times, then return to the starting position
        opacity: [1, 1, 1, 1, 1, 1, 1, 1],
        transition: {
            duration: 7, // Duration of each animation
            times: [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1], // At 14%, 42%, and 71% of the total time, the item will move up 50px. At 28%, 57%, and 85%, it will return to the original position.
            repeat: Infinity,
        },
    },
}

export default function HeroFooter () {
    return (
        <div id='hero-footer' className="justify-center flex w-full" >

            <div  style={{backgroundImage: `url(${gradBack})`}} className=' flex w-full h-[490px] mt-[100px] rounded-[50px] p-4 max-w-[84rem] justify-between'>
                <div className='mt-4 w-1/4' style={{backgroundImage: `url(${wavyBack})`, transform: `scaleX(-1)`}}>

                </div>
                <div id='hero-footer-main' className='flex flex-col text-4xl items-center text-center mt-12 justify-between overflow-hidden'>
                    <div 
                    className='flex gap-4'>
                    <h2 className=' max-w-[645px] text-white'>Unlocking 10 years of </h2>
                        <div className='h-[50px] overflow-hidden'>
                            <motion.div {...item} className=''>
                                <motion.img src={smooth} />
                                <motion.img src={swift} />
                                <motion.img src={safe} />

                            </motion.div>
                        </div>
                    <h2 className='text-white'>rides</h2>

                    </div>
                    <h2 className='text-white mb-[5rem]'>endless adventures</h2>
                    <div className='w-fit items-center flex flex-col'>
                        <img src={elevIcon} alt='elvator-icon'/>
                        <img className='h- w-' src={elevator} alt='elevator'/>
                    </div>

                </div>
                <div className='w-1/4' style={{backgroundImage: `url(${wavyBack})`}}>

                </div>
            </div>

        </div>

    )
}