// import techBack from '../assets/techBack.svg'
import engineObj from '../assets/engineObject.svg'
import {motion} from 'framer-motion'
import circleGroup from '../assets/circleGroup.svg'
import circle from '../assets/circle.svg'
import starGroup from '../assets/starGroup.svg'
import elevElipse from '../assets/elevElipse.svg'
import circleLine from '../assets/circleLine.svg'
// import { Circle } from 'lucide-react'
import circleRight from '../assets/circleGroupRight.svg'
import { useMemo } from 'react'
import squareBack from '../assets/blueSquareBack.svg'


export default function TechTalk () {
    const blinkProp = useMemo(() => ({
        animate: { opacity: [0,1,0]},
        transition: { duration: 2,  repeat: Infinity },
    }), []);

    const shootingstarProp = useMemo(() => ({
        initial: { opacity: 1, y: 80 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 3 },
    }), []);
    const animationProps = useMemo(() => ({
        initial: { opacity: 0, y: 80 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 3 },
    }), []);
    return (

        <section className='w-full h-[621px] bg-cover flex gap-0'
        style={{backgroundImage: `url(${squareBack})`}}
         id="techtalk-section">

            <div id='techtalk-section__left'
             className='flex justify-center align-middle gap-[100px]'
             >
                <motion.div {...shootingstarProp} className='items-center flex flex-col justify-center'>
                <img className='object-fit' src={circleGroup} style={{ transform: ')', height: '50%', width: '100px' }} />

                </motion.div>

                <div className='w-[20vw] flex flex-col gap-10 '>
                    <motion.img  {...blinkProp}  src={circle} style={{  height: '15%' }}/>
                    <motion.h3 {...animationProps} className='border-l-2 pl-4 border-expBlue text-white h-fit text-xl'>Smart IC card controlling system</motion.h3>
                    <motion.p  {...animationProps} className='text-white'>The door operator control system of Express Elevator applies dual control systems.</motion.p>
                    <motion.img  {...blinkProp}  src={starGroup} className='mt-[100px]' />
                </div> 
                <img src='' />
            </div>
            {/* <motion.div '></motion.div>
            <motion.div id='techtalk-section__right'></motion.div> */}

             <motion.div  id='techtalk-section__center' className='flex flex-col max-w-[35vw]  justify-center items-center'>
                <motion.h3 {...animationProps} className='text-[23px] font-medium text-white'>Top advanced door operating system</motion.h3>
                <img src={engineObj}  className='w-2/3'/> 
                <motion.img  {...blinkProp}  src={circleLine} className='mt-[-150px]' />
                <img src={elevElipse} />

            </motion.div>
            <motion.div className='w-1/3 flex justify-between items-center' id='techtalk-section__right'>
                <div>
                    <motion.img  {...blinkProp}  src={circle}/>
                    <motion.p {...animationProps} className='text-sm w-[60%] mt-[40%] ml-[20%] text-white'>
                    One group is controlled
                    by the main controller, Which greatly reduces non-opening accidents
                    due to trouble of door machine control
                    </motion.p>
                    <motion.img  {...blinkProp}  src={circleRight} className='ml-[30%]' />

                </div>

                <motion.img  {...blinkProp}  src={circleGroup}  className='h-2/4'/>
            </motion.div> 
        </section>
    )
}