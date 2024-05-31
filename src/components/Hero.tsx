import Hero1 from '../assets/Hero1.svg'
import Hero2 from '../assets/Hero2.svg'
import Hero3 from '../assets/Hero3.svg'
import UseMediaQuery from '../../lib/use-media-query'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import HeroBack from '../assets/expressHeroMain.svg'

function passengerRedir () {
    document.getElementById('navbarExpertise')?.click()
}


export default function Hero() {
    const isTabletAbove = UseMediaQuery("(min-width: 1024px)");
    const animationProps = useMemo(() => ({
        initial: { opacity: 0, y: 80 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 3 },
    }), []);
    // const delayedAnimationProps = useMemo(() => ({
    //     initial: { opacity: 0, y: 80 },
    //     animate: { opacity: 1, y: 0 },
    //     transition: { delay: 1, duration: 2 },
    // }), []);
    // const delayPropsImg1 = useMemo(() => ({
    //     initial: { opacity: 0, y: 80 },
    //     animate: { opacity: 1, y: 0 },
    //     transition: { delay: .5, duration: 1 },
    // }), []);
    // const delayPropsImg2 = useMemo(() => ({
    //     initial: { opacity: 0, y: 80 },
    //     animate: { opacity: 1, y: 0 },
    //     transition: { delay: 1, duration: 1 },
    // }), []);
    // const delayPropsImg3 = useMemo(() => ({
    //     initial: { opacity: 0, y: 80 },
    //     animate: { opacity: 1, y: 0 },
    //     transition: { delay: 1.5, duration: 1 },
    // }), []);

    return (
        <div className='mt-[4rem]'>
        <motion.section itemID='tech-section' {...animationProps} id="hero-section" className=" bg-[#fafafa]  h-full flex flex-col items-center m-0 p-0 mb-[5rem]w-full  bg-cover "
        style={{backgroundImage: `url(${HeroBack  })`}}
        >
            <div id="hero-headertext" className=" mt-[5rem] flex items-center flex-col">
                <h1 className="text-[#333] text-wrap text-center font-semibold md:font-medium w-[80%] text-[24px] md:text-[52px] mb-4">Rising to new heights with every express elevator ride</h1>
                <p className="text-[18px] text-[#494A50] md:w-[40%] w-[90%] text-wrap text-center mt-[1rem] md:mb-[4rem] mb-[2rem] leading-[28px]">
                    Ride the Elevator to Innovation: Crafting Vertical Journeys, 
                    One Floor at a Time. Step into Quality, Rise with Confidence
                    </p>
            </div>

            {isTabletAbove ? 
                        <motion.div {...animationProps} id="hero-image" className="flex  gap-3 ">
                        <motion.img {...animationProps} className="w-[366px] h-[486px]" onClick={passengerRedir} src={Hero1} />
        
                        <motion.div {...animationProps} className="m-0 p-0 flex flex-col gap-[6rem] items-center">
                            <img className="h-[250px]- w-[20vw]" src={Hero2} />
                            <button className="rounded-3xl text-white bg-expBlue w-[272px] h-[47px] shadow-expButton font-medium text-[20px]"> Design your elevator</button>
                        </motion.div>
                        <motion.img {...animationProps} className="w-[366px] h-[486px]" src={Hero3} />
        
                    </motion.div> : 
                    (
                        <div id='hero-image-mobile' className='flex-col w-full'>
                        <div className='flex w-full justify-evenly'>
                            <img className="w-[45vw] h-auto" src={Hero1} />
                            <img className="h-auto w-[45vw]" src={Hero3} />
                        </div>
        
                        <div className="m-0 p-0 flex flex-col md:gap-[.5rem] gap-[1.5rem] items-center mt-[5%] w-full">
                            <img className="h-auto w-[45vw]" src={Hero2} />
                            <button className="rounded-3xl text-white bg-expBlue w-[80%] h-[5vh] shadow-2xl font-medium md:text-[20px] text-sm"> Design your elevator</button>
                        </div>
                    </div>
                    )
            }
        </motion.section>
        </div>

    )
}