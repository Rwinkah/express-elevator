import techBack from '../assets/expressDarkGradient.svg'
import engineObj from '../assets/engineObject.svg'
import {motion} from 'framer-motion'
import circle from '../assets/circle.svg'
import elevElipse from '../assets/expressBlue.svg'
import { useMemo } from 'react'
import UseMediaQuery from '../../lib/use-media-query'



export default function TechTalk () {
    const isTabletAbove = UseMediaQuery("(min-width: 1200px)");
    const blinkProp = useMemo(() => ({
        animate: { opacity: [0,1,0]},
        transition: { duration: 2,  repeat: Infinity },
    }), []);


    return (
        <>
        {isTabletAbove ?         <section className='w-full h-[621px] bg-cover flex gap-0'
        style={{backgroundImage: `url(${techBack})`}}
         id="techtalk-section">

            <div id='techtalk-section__left'
             className='flex justify-center align-middle gap-[100px]'
             >
                <motion.div {...blinkProp} className='items-center flex flex-col justify-center'>
                <img className='object-fit' src={circle} alt='img_circle_1' style={{ transform: ')', height: '50%', width: '100px' }} />

                </motion.div>

                <div className='w-[20vw] flex flex-col gap-10 '>
                    <motion.img  {...blinkProp}  src={circle} style={{  height: '15%' }}/>
                    <motion.h3  className='border-l-2 pl-4 border-expBlue text-white h-fit text-xl'>Smart IC card controlling system</motion.h3>
                    <motion.p   className='text-white'>The door operator control system of Express Elevator applies dual control systems.</motion.p>
                    <motion.img  {...blinkProp}  src={circle} className='mt-[100px]' />
                </div> 
                <img src='' />
            </div>
            {/* <motion.div '></motion.div>
            <motion.div id='techtalk-section__right'></motion.div> */}

             <motion.div  id='techtalk-section__center' className='flex flex-col max-w-[35vw]  justify-center items-center'>
                <motion.h3  className='text-[23px] font-medium text-white'>Top advanced door operating system</motion.h3>
                <img src={engineObj}  className='w-2/3'/> 
                <motion.img  {...blinkProp}  src={circle} className='mt-[-150px]' />
                <img src={elevElipse} />

            </motion.div>
            <motion.div className='w-1/3 flex justify-between items-center' id='techtalk-section__right'>
                <div>
                    <motion.img  {...blinkProp}  src={circle}/>
                    <motion.p  className='text-sm w-[60%] mt-[40%] ml-[20%] text-white'>
                    One group is controlled
                    by the main controller, Which greatly reduces non-opening accidents
                    due to trouble of door machine control
                    </motion.p>
                    <motion.img  {...blinkProp}  src={circle} className='' />

                </div>

                <motion.img  {...blinkProp}  src={circle}  className='h-1/3 W-[100px]'/>
            </motion.div> 
        </section> :<></>
        // <section className='w-[100vw] h-fit bg-cover flex flex-col items-center  mb-10' 
        // style={{backgroundImage: `url(${techBack})`}}
        // >
        //     <motion.img {...blinkProp} src={circleLine} alt='circle_design' />
        //     <img src={engineObj} alt='engine_design' />
        //     <div className='flex w-[96vw]] pl-[2vw] pr-[2vw] mt-[-150px] '>
        //         <img src={elevElipse} className='h-[150px] w-[90%]'/>
        //         <motion.img {...blinkProp} src={circle} className='h-[200px] mt-[0px]' alt='star_design' />
        //     </div>
        //     <motion.div className='w-[] flex flex-col gap-10 self-start ml-5 '>
        //             <motion.img  {...blinkProp}  src={circle} style={{  height: '5rem' }}/>
        //             <motion.h3  className='md:text-[16px] max-w-[182px] border-l-2 pl-4 border-expBlue text-white h-fit text-[12px]'>Smart IC card controlling system</motion.h3>
        //             <p   className='md:text-[16px] opacity-70 text-white text-[12px] max-w-[182px] '>The door operator control system of Express Elevator applies dual control systems.</p>
        //         </motion.div> 
        //     <p className='md:text-[16px] max-w-[182px] text-[#fff] text-[12px] self-end mr-5 mt-5 opacity-70'>
        //         One group is controlled by the main controller,
        //          Which greatly reduces non-opening accidents
        //           due to trouble of door machine control
        //     </p>
        //     <motion.img  {...blinkProp}  src={circle} className='mt-[100px]' />

        // </section>
        }
        </>

    )
}