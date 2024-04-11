import Hero1 from '../assets/Hero1.svg'
import Hero2 from '../assets/Hero2.svg'
import Hero3 from '../assets/Hero3.svg'


export default function Hero() {
    return (
        <section id="hero-section" className="pr bg-[#fafafa] h-full flex flex-col items-center m-0 p-0 mb-[5rem]">
            <div id="hero-headertext" className=" mt-[5rem] flex items-center flex-col">
                <h1 className="text-black text-wrap text-center font-medium w-[80%]">Rising to new heights with every express elevator ride</h1>
                <p className="text-[18px] text-[#494A50] w-[60%] text-wrap text-center mt-[1rem] mb-[4rem]">
                    Ride the Elevator to Innovation: Crafting Vertical Journeys, 
                    One Floor at a Time. Step into Quality, Rise with Confidence
                    </p>
            </div>

            <div id="hero-image" className="flex  gap-3">
                <img className="w-[366px] h-[490px]" src={Hero1} />

                <div className="m-0 p-0 flex flex-col gap-[6rem] items-center">
                    <img className="h-[250px]- w-[370]" src={Hero2} />
                    <button className="rounded-3xl text-white bg-expBlue w-[60%] shadow-2xl font-medium text-[20px]"> Get a free quote</button>
                </div>
                <img className="h-[250px]- w-[370]" src={Hero3} />

                </div>

        </section>
    )
}