export default function MobileHeroImg () {
    return (
        <div id="hero-image" className="flex  gap-3">
        <img className="md:w-[318px] md:h-[438px] w-[45%]" src={Hero1} />

        <div className="m-0 p-0 flex flex-col gap-[6rem] items-center w-[370px] h-[250px]">
            <img className="md:w-[318px] md:h-[438px]" src={Hero2} />
            <button className="rounded-3xl text-white bg-expBlue md:w-[60%] md:h-[30%] shadow-2xl font-medium text-[20px]"> Get a free quote</button>
        </div>
        <img className="md:w-[318px] md:h-[438px] w-[45%]" src={Hero3} />

        </div>

    )
}