import techBack from '../assets/techBack.svg'
import engineObj from '../assets/engineObject.svg'
import {motion} from 'framer-motion'
import circleGroup from '../assets/circleGroup.svg'
import circle from '../assets/circle.svg'
import starGroup from '../assets/starGroup.svg'
import elevElipse from '../assets/elevElipse.svg'
import circleLine from '../assets/circleLine.svg'
import { Circle } from 'lucide-react'
import circleRight from '../assets/circleGroupRight.svg'
import { useMemo } from 'react'


export default function TechTalk () {
    const animationProps = useMemo(() => ({
        animate: { opacity: [0,1,0]},
        transition: { duration: 2,  repeat: Infinity },
    }), []);
    return (

        <motion.section className='w-full h-[621px] bg-cover flex gap-0'
         style={{backgroundImage: `url(${techBack})`}}
         id="techtalk-section">

            <div id='techtalk-section__left'
             className='flex justify-center align-middle gap-[100px]'
             >
                <motion.div {...animationProps} className='items-center flex flex-col justify-center'>
                <img className='object-fit' src={circleGroup} style={{ transform: ')', height: '50%', width: '100px' }} />

                </motion.div>

                <div className='w-[20vw] flex flex-col gap-10 '>
                    <motion.img  {...animationProps}  src={circle} style={{  height: '15%' }}/>
                    <h3 className='border-l-2 pl-4 border-expBlue text-white h-fit text-xl'>Smart IC card controlling system</h3>
                    <p className='text-white'>The door operator control system of Express Elevator applies dual control systems.</p>
                    <motion.img  {...animationProps}  src={starGroup} className='mt-[100px]' />
                </div> 
                <img src='' />
            </div>
            {/* <motion.div '></motion.div>
            <motion.div id='techtalk-section__right'></motion.div> */}

             <motion.div  id='techtalk-section__center' className='flex flex-col max-w-[35vw]  justify-center items-center'>
                <h3 className='text-[23px] font-medium text-white'>Top advanced door operating system</h3>
                <img src={engineObj}  className='w-2/3'/> 
                <motion.img  {...animationProps}  src={circleLine} className='mt-[-150px]' />
                <img src={elevElipse} />

            </motion.div>
            <motion.div className='w-1/3 flex justify-between items-center' id='techtalk-section__right'>
                <div>
                    <motion.img  {...animationProps}  src={circle}/>
                    <p className='text-sm w-[60%] mt-[40%] ml-[20%] text-white'>
                    One group is controlled
                    by the main controller, Which greatly reduces non-opening accidents
                    due to trouble of door machine control
                    </p>
                    <motion.img  {...animationProps}  src={circleRight} className='ml-[30%]' />

                </div>

                <motion.img  {...animationProps}  src={circleGroup}  className='h-2/4'/>
            </motion.div> 
        </motion.section>
    )
}