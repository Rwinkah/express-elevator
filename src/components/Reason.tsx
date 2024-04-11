import React from "react";
import elevIcon from '../assets/elevatorIcon.png'
import reasonImg1 from '../assets/reasonImg1.png'
import reasonImg2 from '../assets/reasonImg2.png'
import reasonImg3 from '../assets/reasonImg3.png'
import reasonImg4 from '../assets/reasonImg4.png'

export default function Reason() {
    return (
        <section id="why-choose-us-section" className="flex flex-col items-center h-[fit] pl-[150px] pr-[150px] bg-[#F7FAFF]">
            <div id="reason-headertext">
                <h2 className="text-expBlueDark text-4xl font-medium text-center mb-4">
                    Why choose us
                </h2>

                <p className="text-[#404040] text-sm text-center w-[]">
                        With the application of all round computer controlled systems, 
                        express elevators ensure that you 
                    </p>
                    <p className="text-[#404040] text-sm text-center mb-[3.5rem]">
                        have a safe trip to your destination.
                    </p>
                <div className="bg-[#fafafa] pt-10">
                    <h5 className="text-[#333333] text-2xl font-medium">Your safety is our number one priority</h5>
                    <p  className="text-[#404040] text-lg w-[50%] mb-[1.25rem]">
                        We prioritize safety in the design, manufacturing, installation, 
                        and maintenance of our elevator systems. Here's how we achieve this:
                         </p>
                <div className="flex gap-[2.5rem] h-[50%] items-center justify-between">
                    <div className="bg-white w-[30%] pr-[1.5rem] h-[193px] pt-[50px] pl-4 rounded-2xl">
                        <h6 className="text-[#333333] font-semibold mb-[10px] flex gap-2"> <img src={elevIcon} /> Emergency device at power failure</h6>
                        <p className="text-sm  text-[#737373]">
                            In the case of power failure our elevators automatically convert to spare 
                            mains and ensures that passengers leave the elevator safely
                            </p>
                    </div>
                    <div className="bg-white w-[30%] pr-[1.5rem] h-[193px] pt-[50px] pl-4 rounded-2xl">
                        <h6 className="text-[#333333] font-semibold mb-[10px] flex gap-2"> <img src={elevIcon} /> Safety tongs and speed governor</h6>
                        <p className="text-sm  text-[#737373]">
                            In the case of power failure our elevators automatically convert to spare 
                            mains and ensures that passengers leave the elevator safely
                            </p>
                    </div>
                    <div className="bg-white w-[30%] pr-[1.5rem] h-[193px] pt-[50px] pl-4 rounded-2xl">
                        <h6 className="text-[#333333] font-semibold mb-[10px] flex gap-2"><img src={elevIcon}/> Safety tongs and speed governor</h6>
                        <p className="text-sm  text-[#737373]">
                            In the case of power failure our elevators automatically convert to spare 
                            mains and ensures that passengers leave the elevator safely
                            </p>
                    </div>

                </div>
                <div className="flex justify-between mb-[3.75rem]">
                    <div className="w-[80%] flex flex-col  justify-center">
                        <h3 className="font-medium text-2xl mb-4">Industry 4.0 intelligent manufacturing</h3>
                        <p className="w-[60%]">
                            Express Elevator leverages Elevator Industry 4.0, 
                            emphasizing digital network and intelligence integration,
                             to shift from low-cost to quality advantage. Following German leading technology, 
                             it's upgrading with Express Elevator's unique characteristics.
                            </p>
                    </div>
                    <span className="flex flex-wrap gap-4 align-end justify-between w-[43%] mt-[54px]">
                        <img src={reasonImg1} />
                        <img src={reasonImg2} />
                        <img src={reasonImg3} />
                        <img src={reasonImg4}/>
                    </span>
                </div>
                </div>

            </div>

        </section>
    )
}