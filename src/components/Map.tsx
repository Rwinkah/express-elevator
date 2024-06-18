import map from '../assets/expressMap.svg'

export default function Map() {
    return (
        <section id='map-section' className='flex items-center w-[100vw] h-[440px] text-[#333] pl-24' style={{backgroundImage: `url(${map})`}}>
            <div className=' box-border w-[537px] gap-4 flex flex-col'>
                <h3 className='text-2xl font-medium'>Distributors and agents</h3>
                <p className='text-lg leading-[24px] '>Spanning the vast expanse of Africa, our extensive network of distributors and agents ensures 
                    that distance is never a barrier to the impeccable service we provide.
                </p>
                <button className='bg-[#0375F5] w-[125px] h-[35px] text-white rounded-2xl shadow-2xl font-medium '>Book now</button>
            </div>
        </section>
    )
}