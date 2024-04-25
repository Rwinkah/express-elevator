import expImg1 from '../assets/expertiseImg5.svg'
import expImg2 from '../assets/expressImg2.png'
import expImg3 from '../assets/expressImg3.png'
import expImg4 from '../assets/expressImg4.png'
import cutCab from '../assets/cutAngleCab.svg'
import semiCab from '../assets/semiCircleCab.png'
import futureCab from '../assets/futureCab.png'
import squareCab from '../assets/squareShapedCab.svg'
import meshBack from '../assets/mesh_baground.svg'
import dotsBack from '../assets/bacground_dots.svg'

// import grid from '../assets/grid.png'
// import mesh from '../assets/mesh.png'
export default function Expertise() {
    return( 
        <section id="expertise-section" className="flex flex-col items-center h-[fit] bg-white">
            <div id="expertise-headertext" className=" flex flex-col mt-[60px] lg:pl-[150px] lg:pr-[150px] items-center " >
                <h2 className="text-expBlueDark lg:text-4xl text-2xl font-medium text-center mb-4">
                    Our areas of expertise
                </h2>
                <p className="text-[#404040] sm:text-lg text-[12px] text-center  lg:w-3/4 w-[80%]">
                    We specialize in the installation and maintenance of a diverse range of lifts and elevators,
                    catering to various needs and requirements, such as...
                </p>

            </div>
            <div className='mt-10 items-center  lg:items-start gap-[2rem] lg:flex-row flex flex-col lg:ml-[15vw] justify-between 2xl:w-[80%] w-[100%] mb-[4.5rem] 2xl:pl-[150px] 2xl:pr-[150px] flex-shrink'>
                <img src={expImg1} className='w-[343px] h-[360px] md:h-[400px] md:w-[400px]  2xl:h-[420px] 2xl:w-[360px] flex flex-shrink'/>
                <div className='flex pl-[3rem] box-border lg:w-[55%]'>
                    <div className='flex justify-center flex-col w-full gap-1 '> 
                    <h3 className='font-medium text-2xl mb-[28px] mt-[5vh]'>Passenger Elevators</h3>
                    <span className='flex lg:h-[25%] mb-[4rem]'>
                        <span className=' h-fill border border-[#1780F5] mr-[1.5rem]' />
                        <div>
                            <h4 className='text-xl font-medium mb-2'>Energy Saving</h4>
                            <p className=' text-xs md:text-base flex lg:w-[70%] xl:w-[100%]text-[#404040] leading-[24px]'>
                                The Express Passenger Elevator employs an energy-saving gearless traction system,
                                cutting energy use by 40% compared to traditional systems, while optimizing space efficiency.
                                </p>
                        </div>

                    </span>
                    <span className='flex lg:min-h-[25%] text-[#404040] leading-[24px]'>
                        <span className=' h-fill border border-[#1780F5] mr-[1.5rem]' />
                        <div> 
                            <h4 className='text-xl font-medium mb-2'>Compact Design</h4>
                            <p className=' ext-xs md:text-base lg:w-[70%] text-[#404040] leading-[24px]'>
                            The small machine room passenger elevator is a novel concept that reduces the machine room area by over 40%
                             compared to traditional elevators, saving construction space and increasing usability.
                                </p>
                        </div>

                    </span>

                    </div>
                    <img src={meshBack} className='z[-1] hidden xl:flex absolute right-0 2xl:right-[200px] w-[500px] h-[766px]' />

                </div> 
                <div></div> 
                {/* <img className=' absolute z-0 w-[30rem] h-[30rem]' src={mesh} /> */}
            </div>
            <div className=' flex lg:flex-row flex-col justify-around w-[80%] md:w-full pl-2 pr-2 mb-[4.5rem] 2xl:pl-[80px] 2xl:pr-[80px]'>
                <div className='lg:w-[45%] flex flex-col justify-center'> 
                    <h3 className='text-2xl mb-[1.5rem] font-medium'>Villa elevators (Machine room-less)</h3>
                    <p className=' leading-[20px] lg:leading-[29.05px] w-full mb-6 lg:mb-0 text-[12px] lg:text-base'>
                        The Express Elevator stops at 125% overload using double brakes and features advanced forcible-drive technology,
                         eliminating the need for counterweights or gearboxes.
                         This design saves both cost and space compared to traditional hydraulic elevators.
                        </p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 justify-between'>
                    <img className='flex w-full h-auto'  src={expImg2}/>
                    <img className='flex w-full h-auto' src={expImg3} />
                </div>
            </div>
            <div className='flex  lg:flex-row gap-[4rem] flex-col-reverse  justify-evenly w-[85%] mb-[4.5rem] 2xl:pl-[80px] 2xl:pr-[80px]'>
                {/* <img src={grid} className='z-0 absolute h-[10rem] w-[10rem]' /> */}
                <div className=' bg-cover w-[566px] h-[566px] flex items-center justify-center' style={{backgroundImage: `url(${dotsBack})`}}>
                {/* <img src={dotsBack} className=' absolute hidden  xl:flex w-[564] object-cover  h-[564px]' /> */}
        
                <img className='lg:h-auto h-2/4'src={expImg4} />
                </div>

                <div className='flex justify-center flex-col xl:w-[50%]'>
                    <h3 className='text-2xl font-medium leading-[29px] mb-5'>Hospital elevators</h3>
                    <p className='leading-[24px] text-[#404040] 2xl:w-2/3'>
                    Medical elevators serve dual purposes, transporting passengers while meeting strict functional requirements.
                     The Express medical elevator ensures precise control of speed for smooth,
                     comfortable rides, creating a serene environment.
                    </p>
                </div>
                <img src={meshBack} className=' absolute hidden  xl:flex  right-[200px] w-[500px] h-[766px]' />

            </div>

            <div className='flex lg:flex-row flex-col box-border 2xl:pr-[150px] w-[100%] 2xl:pl-[150px] mb-[4.5rem] items-center lg:h-[272px]'>
                <div className='flex lg:h-[50%] lg:flex-row flex-col sm:items-center justify-between'>
                    <div className='flex flex-col pl-[5vw] justify-center'>
                       <h4 className='text-[#333333] text-2xl font-medium leading-[29.05px] mb-[1.5rem]'>Sightseeing elevators</h4>
                       <div className='flex flex-col lg:flex-row gap-4 mb-8 '>
                        <span className='flex flex-col :items-center lg:items-start lg:w-[45%] border-l-2 border-l-[#1780F5] p-4'>
                            <p className=' flex leading-[23px] w-[90%] sm:text-base text-xs '>
                            {/* <span className=' lg:h-full  border border-[#1780F5] mr-[1.5rem]' /> */}

                                It uses modern materials, fully computerized VVVF speed control,
                                integrated data network, modular structure, and advanced machining.
                            </p>
                        </span>
                        <span className='flex flex-col :items-center lg:items-start lg:w-[45%] border-l-2 border-l-[#1780F5] p-4'>
                            <p className='flex leading-[23px] w-[90%] '>
                            {/* <span className=' lg:h-full  border border-[#1780F5] mr-[1.5rem]' /> */}
                                It presents a compact and attractive space,
                                accommodating diverse construction designs, including round, half-square,
                                and angled cuts.
                            </p>
                        </span>
                    </div>
                    </div>

                </div>
                <div className='grid grid-cols-2 lg:w-full sm:w-4/5 lg:h-full'>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%] rounded-[12px]  hover:scale-105 duration-300'>
                        <img src={cutCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[70%] lg:w-[60%] color-[#333] sm:text-[12px]  xl:text-lg '>Cutting angle shaped cab</p>
                    </div>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%] rounded-[12px]  hover:scale-105 duration-300'>
                        <img src={squareCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[50%] lg:w-[60%] color-[#333] sm:text-[12px] xl:text-lg'>Square shaped cab</p>
                    </div>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%] rounded-[12px]  hover:scale-105 duration-300'>
                        <img src={semiCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[50%] lg:w-[60%] color-[#333] sm:text-[12px] xl:text-lg'>Semi-circle shaped cab</p>
                    </div>
                    <div className='flex items-center border-[.3px] border-gray-200 shadow w-[95%] h-[90%] rounded-[12px] hover:scale-105 duration-300'>
                        <img src={futureCab} alt='cut-angle cab'/>
                        <p className='leading-24px ml-3 w-[50%] lg:w-[60%] color-[#333] sm:text-[12px] xl:text-lg'>Future prospects cab</p>
                    </div>
                </div>
            </div>
        </section>
    )
}