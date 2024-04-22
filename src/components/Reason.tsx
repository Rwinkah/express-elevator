import elevIcon from '../assets/elevatorIcon.png'
import reasonImg1 from '../assets/reasonImg1.png'
import reasonImg2 from '../assets/reasonImg2.png'
import reasonImg3 from '../assets/reasonImg3.png'
import reasonImg4 from '../assets/reasonImg4.png'

export default function Reason() {
    return (
        <section id="reason-section" className="flex flex-col items-center h-[fit] md:pl-[150px] md:pr-[150px] bg-[#F7FAFF]">
            <div id="reason-headertext" className='w-full flex-col items-center'>
                <h2 className="text-expBlueDark text-4xl font-medium text-center mb-4 mt-4">
                    Why choose us
                </h2>

                <p className="text-[#404040] text-sm text-center">
                        With the application of all round computer controlled systems, 
                        express elevators ensure that you 
                    </p>
                    <p className="text-[#404040] text-sm text-center md:mb-[3.5rem] mb-2">
                        have a safe trip to your destination.
                    </p>
                <div className="bg-[rgb(250,250,250)] pt-10  w-full md:items-start items-center flex flex-col">
                    <h5 className="text-[#333333] md:text-2xl font-medium w-[92%] text-base">Your safety is our number one priority</h5>
                    <p  className="text-[#404040] md:text-lg md:w-[50%] mb-[1.25rem] text-sm w-[92%] md:pt-0 pt-2">
                        We prioritize safety in the design, manufacturing, installation, 
                        and maintenance of our elevator systems. Here's how we achieve this:
                         </p>
                <div className="flex lg:flex-row flex-col gap-[2.5rem] min-h-[50%] items-center justify-between w-full">
                    <div className="leading-[21px] bg-white lg:w-[30%] w-[95%] pr-[1.5rem] min-h-[193px] pt-[50px] pl-4 rounded-xl  shadow-lg border border-gray-200">
                        <h6 className="text-[#333333] font-semibold mb-[10px] flex gap-2"> <img src={elevIcon} /> Emergency device at power failure</h6>
                        <p className="text-sm  text-[#737373]">
                            In the case of power failure our elevators automatically convert to spare 
                            mains and ensures that passengers leave the elevator safely
                            </p>
                    </div>
                    <div className="leading-[21px] bg-white lg:w-[30%] w-[95%] pr-[1.5rem] min-h-[193px] pt-[50px] pl-4 rounded-xl  shadow-lg border border-gray-200">
                        <h6 className="text-[#333333] font-semibold mb-[10px] flex gap-2"> <img src={elevIcon} /> Safety tongs and speed governor</h6>
                        <p className="text-sm  text-[#737373]">
                            In the case of power failure our elevators automatically convert to spare 
                            mains and ensures that passengers leave the elevator safely
                            </p>
                    </div>
                    <div className="leading-[21px] bg-white lg:w-[30%] w-[95%] pr-[1.5rem] min-h-[193px] pt-[50px] pl-4 rounded-xl  shadow-lg border border-gray-200">
                        <h6 className="text-[#333333] font-semibold mb-[10px] flex gap-2"><img src={elevIcon}/> Safety tongs and speed governor</h6>
                        <p className="text-sm  text-[#737373]">
                            In the case of power failure our elevators automatically convert to spare 
                            mains and ensures that passengers leave the elevator safely
                            </p>
                    </div>

                </div>
                <div className="flex md:flex-row flex-col min-h-[50vh] justify-between mb-[3.75rem] mt-[40px] md:items-start items-center">
                    <div className="md:w-[80%] w-full flex flex-col h-full  justify-center  items-center md:items-start">
                        <h3 className="font-medium md:text-2xl text-normal mb-4 leading-[24px] w-[95%]">Industry 4.0 intelligent manufacturing</h3>
                        <p className="md:w-[60%] md:leading-normal leading-5 text-[#404040] md:text-normal text-[12px] w-[95%] ">
                            Express Elevator leverages Elevator Industry 4.0, 
                            emphasizing digital network and intelligence integration,
                             to shift from low-cost to quality advantage. Following German leading technology, 
                             it's upgrading with Express Elevator's unique characteristics.
                            </p>
                    </div>
                    <span className="flex flex-wrap gap-4 align-end justify-between md:w-[43%] w-[80%] mt-[54px]">
                        <img className='md:w-auto w-[100px] rounded-2xl' src={reasonImg1} />
                        <img className='md:w-auto w-[175px] rounded-2xl' src={reasonImg2} />
                        <img className='md:w-auto w-[152px] rounded-2xl' src={reasonImg3} />
                        <img className='md:w-auto w-[110px] rounded-2xl' src={reasonImg4}/>
                    </span>
                </div>
                </div>

            </div>

        </section>
    )
}