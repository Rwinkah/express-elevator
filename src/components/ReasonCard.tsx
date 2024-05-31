import { motion } from "framer-motion"


export type ReasonCardProps = {
    id: number
    infoGraphic: string
    title: string
    description: string
    className?: string
}

const fadeAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: [0,1,0]},
    transition: { duration: 4, repeat: Infinity}
}
const fadeAnimationProp2 = {
    initial: { opacity: 0 },
    animate: { opacity: [1,0,1]},
    transition: { duration: 4, repeat: Infinity}
}

export default function ReasonCard ({infoGraphic, title, description, className}:ReasonCardProps) {
    return (
        <div className={`max-w-[390px] shadow-lg border-[1px]  p-4 pl-0 pb-0 rounded-[20px] flex flex-col justify-between gap-8 box-border ${className}`}>
            <div className="flex flex-col gap-5 pl-4">
                <h2 className="text-lg font-bold leading-[24.3px] text-[#333]">{title}</h2>
                <p className="text-[#404040] leading-[21.3px]">{description}</p>
            </div>

            <div className="flex justify-between h-full w-full relative  ">
            {/* <div className="w-full h-full bg-gradient-to-tr from-blue-500 via-white to-white"></div> */}
                {/* <span className="w-[3rem] self-bottom bg-gradient-to-r from-blue-500 -ro]tate-90 via-white rounded-xl  to-white"/> */}
                <motion.span {...fadeAnimationProps} className="w-[10rem]  h-full  " style={{background: 'linear-gradient(45deg, rgb(222, 232, 253), white)'}}/>  
                <motion.span {...fadeAnimationProp2}  className="absolute self-start left-0 w-[10rem]  h-full  " style={{background: 'linear-gradient(45deg, rgb(217, 252, 229), white)'}}/>  
                <img  src={infoGraphic}/>
            </div>
        </div>
    )
}