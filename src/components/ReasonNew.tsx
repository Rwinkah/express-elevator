import infoG1 from '../assets/expressInfoGraphic1.svg'
import infoG2 from '../assets/expressInfoGraphic2.svg'
import infoG3 from '../assets/expressInfoGraphic3.svg'
import infoG4 from '../assets/expressInfoGraphic5.svg'
import infoG5 from '../assets/expressHelp.svg'
import infoG6 from '../assets/expressSpare.svg'
import ReasonCard from './ReasonCard'
import { ReasonCardProps } from './ReasonCard'




const reasonData:ReasonCardProps[] = [
    {
        id: 1,
        infoGraphic: infoG1,
        title: 'We offer the best prices',
        description: 'Our elevators go directly from the factory to your site without any middlemen which means you will enjoy not only the best service but also the best price.'

    },
    {
        id: 2,
        infoGraphic: infoG2,
        title: 'Professional personnel',
        description: 'Our team manages your shaft construction from start to finish: measuring, designing, drafting, and overseeing production and installation.'
    },
    {
        id: 3,
        infoGraphic: infoG3,
        title: 'Rapid Elevator Shaft Designs',
        description: 'Save time and capital with our custom shaft drawings for quick elevator delivery in 30 days or less, based on stock availability. '
    },
    {
        id: 4,
        infoGraphic: infoG4,
        title: '24/7 availability',
        description: 'Express Elevator has an experienced installation and after-sales service team in Nigeria, with guaranteed quality, 24/7 on standby.'
    },
    {
        id: 5,
        infoGraphic: infoG5,
        title: 'Customer care service',
        description: 'We have a full time sales account manager, who will serve you one-on-one and you will get your elevator done with no stress at all.'
    },
    {
        id: 6,
        infoGraphic: infoG6,
        title: 'Accessories and parts',
        description: 'We keep sufficient stock of accessories, and the vulnerable parts can be replaced within 3 days to ensure the smooth running of your elevator.'
    },
]


export default function ReasonNew () {
    return (
        <div id='reason-section' className='self-center max-w-[1252px] w-full flex flex-col items-center justify-center mt-12'>
            <h2 className="text-[#063C79] text-4xl font-medium text-center mb-4 mt-4 tracking-[2%]">
                Why choose us
            </h2>
            <p className="text-[#404040] text-sm text-center">
                With the application of all round computer controlled systems, 
                express elevators ensure that you 
            </p>
            <p className="text-[#404040] text-sm text-center md:mb-[3.5rem] mb-2">
                have a safe trip to your destination.
            </p>
        <div className="flex gap-10  flex-wrap w-full">
            { 
                reasonData.map((reason =>
                    <ReasonCard  id={reason.id} title={reason.title} description={reason.description} infoGraphic={reason.infoGraphic}/>
                ))
            }
        </div>

        </div>

    )
}