import map from '../assets/expressNewMap.svg'
import mapback from '../assets/mapGroup.svg'

export default function Map() {
    return (
        <section id='map-section' className='bg-white flex justify-between items-center w-[100vw] h-[440px] text-[#333] pl-24 pr-24' >
            <div className=' box-border w-[537px] h-full justify-center pl-20 gap-4 flex flex-col' style={{backgroundImage: `url(${mapback})`}}>
                <h3 className='text-2xl font-medium'>Distributors and agents</h3>
                <p className='text-lg leading-[24px] '>
                    Distributors and Agents are Recruited in all regions in Africa
                </p>
                <button className='bg-[#0375F5] w-[125px] h-[35px] text-white rounded-2xl shadow-2xl font-medium '>Book now</button>
            </div>
            <div>
                <img src={map}/>
            </div>

        </section>
    )
}