import expImg1 from '../assets/expertiseImg1.png'
import expImg2 from '../assets/expressImg2.png'
import expImg3 from '../assets/expressImg3.png'
import expImg4 from '../assets/expressImg4.png'
import cutCab from '../assets/cutAngleCab.svg'
import semiCab from '../assets/semiCircleCab.png'
import futureCab from '../assets/futureCab.png'
import squareCab from '../assets/squareShapedCab.svg'

// import grid from '../assets/grid.png'
// import mesh from '../assets/mesh.png'
export default function Expertise() {
    return (
        <section id="expertise-section" className="flex flex-col items-center h-[fit] bg-white">
            <div id="expertise-headertext" className="mt-[60px] pl-[150px] pr-[150px]">
                <h2 className="text-expBlueDark text-4xl font-medium text-center mb-4">
                    Our areas of expertise
                </h2>
                <p className="text-[#404040] text-lg text-center w-[]">
                    We specialize in the installation and maintenance of a diverse range of lifts and elevators,
                </p>
                <p className="text-[#404040] text-lg text-center w-[]">
                catering to various needs and requirements, such as...
                </p>
            </div>
            <div className='mt-10 flex justify-between w-[80%] mb-[4.5rem] pl-[150px] pr-[150px]'>
                <img src={expImg1} className=''/>
                <div className='flex w-[55%]'>
                    <div className='flex justify-center flex-col'> 
                    <h3 className='font-medium text-2xl mb-[28px]'>Passenger Elevators</h3>
                    <span className='flex h-[25%] mb-5'>
                        <span className=' h-fill border border-[#1780F5] mr-[1.5rem]' />
                        <div>
                            <h4 className='text-xl font-medium mb-2'>Energy Saving</h4>
                            <p className='w-[70%] text-[#404040] leading-[24px]'>
                                The Express Passenger Elevator employs an energy-saving gearless traction system,
                                cutting energy use by 40% compared to traditional systems, while optimizing space efficiency.
                                </p>
                        </div>

                    </span>
                    <span className='flex h-[25%] text-[#404040] leading-[24px]'>
                        <span className=' h-fill border border-[#1780F5] mr-[1.5rem]' />
                        <div> 
                            <h4 className='text-xl font-medium mb-2'>Compact Design</h4>
                            <p className='w-[70%]'>
                            The small machine room passenger elevator is a novel concept that reduces the machine room area by over 40%
                             compared to traditional elevators, saving construction space and increasing usability.
                                </p>
                        </div>

                    </span>
                    <span>

                    </span>
                    </div>

                </div> 9
                <div></div> 
                {/* <img className=' absolute z-0 w-[30rem] h-[30rem]' src={mesh} /> */}
            </div>
            <div className=' flex justify-between w-[80%] mb-[4.5rem] pl-[150px] pr-[150px]'>
                <div className='w-[45%] flex flex-col justify-center'> 
                    <h3 className='text-2xl mb-[1.5rem] font-medium'>Villa elevators (Machine room-less)</h3>
                    <p className='leading-[29.05px]'>
                        The Express Elevator stops at 125% overload using double brakes and features advanced forcible-drive technology,
                         eliminating the need for counterweights or gearboxes.
                         This design saves both cost and space compared to traditional hydraulic elevators.
                        </p>
                </div>
                <div className='flex w-[50%]  justify-between'>
                    <img  src={expImg2}/>
                    <img src={expImg3} />
                </div>
            </div>
            <div className='flex justify-evenly w-[85%] mb-[4.5rem] pl-[150px] pr-[150px]'>
                {/* <img src={grid} className='z-0 absolute h-[10rem] w-[10rem]' /> */}
                <img src={expImg4} />
                <div className='flex justify-center flex-col w-[50%]'>
                    <h3 className='text-2xl font-medium leading-[29px] mb-5'>Hospital elevators</h3>
                    <p className='leading-[24px] text-[#404040]'>
                    Medical elevators serve dual purposes, transporting passengers while meeting strict functional requirements.
                     The Express medical elevator ensures precise control of speed for smooth,
                     comfortable rides, creating a serene environment.
                    </p>
                </div>
            </div>
            <div className='flex justify-between box-border pr-[150px] w-[100%] pl-[150px] mb-[4.5rem] items-center h-[272px]'>
                <div className='flex h-[50%]'>
                    <span className=''>
                        <h4 className='text-[#333333] text-2xl font-medium leading-[29.05px] mb-[1.5rem]'>Sightseeing elevators</h4>
                        <p className='flex leading-[23px] '>
                        <span className=' h-[6rem]  border border-[#1780F5] mr-[1.5rem]' />

                            It uses modern materials, fully computerized VVVF speed control,
                             integrated data network, modular structure, and advanced machining.
                        </p>
                    </span>
                    <div className='flex items-center h-full'>
                       <span className=' h-[80%]  border border-[#1780F5] mr-[1.5rem] mt-[3rem]' />
                        <p className='leading-[24px] w-[80%] pt-[3rem]'>
                            It presents a compact and attractive space,
                            accommodating diverse construction designs, including round, half-square,
                            and angled cuts.
                            </p>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-[50%] h-full'>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%]'>
                        <img src={cutCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[60%] color-[#333] text-lg'>Cutting angle shaped cab</p>
                    </div>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%]'>
                        <img src={squareCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[60%] color-[#333] text-lg'>Square shaped cab</p>
                    </div>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%]'>
                        <img src={semiCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[60%] color-[#333] text-lg'>Semi-circle shaped cab</p>
                    </div>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%]'>
                        <img src={futureCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[60%] color-[#333] text-lg'>Future prospects cab</p>
                    </div>
                </div>
            </div>
        </section>
    )
}