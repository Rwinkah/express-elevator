import phone from '../assets/phone.svg'
import Logo from '../assets/expressLogo.svg'
import facebook from '../assets/social_facebook.svg'
import instagram from '../assets/social_ig.svg'
import linkedin from '../assets/social_linkedin.svg'
import email from '../assets/email.svg'
import UseMediaQuery from '../../lib/use-media-query'

export default function Footer () {
    const isTabletAbove = UseMediaQuery("(min-width: 768px)");
    return (
        <>
        {
        isTabletAbove ?(
            <section id="footer" className="pl-[100px] bg-[#021E42] h-[248px] w-[100vw] flex justify-between text-white text-sm  items-center">
            <div id='footer_left'> 
                <img src={Logo} className='mb-[3rem]' />
                <span className=''>Plot 8, 10 A Sani Zangon-Daura Street, Guzape, Asokoro, FCT ABUJA, Nigeria</span>
                <p className='mb-2 mt-[18px]'>Copyright/All rights reserved.</p>
                <p>Designed by Retro Developers.</p>
            </div>
            <div id='footer_right' className='w-[20vw]'>
                <span className='text-base'>Contact us:</span>
                <span className='flex gap-2 mt-6 mb-8'>
                    <img src={linkedin}/>
                    <img src={facebook} />
                    <img src={instagram} />
                </span>
                <span className='flex gap-2 mb-2'>
                    <img src={phone}/>
                    <p>+234(0)8098888666</p>
                </span>
                <span className='flex gap-2'>
                    <img src={phone}/>   
                    <p>+234(0)9086060234</p>
                </span>
            </div>

        </section>
        ): (
        <section className='bg-[#021E42] pl-[5vw] pt-[5vh] text-white text-sm'>
            <img src={Logo}/>
            <h4 className='text-base mt-8 mb-[18px]'>Contact us:</h4>
            <span className='flex gap-3 mt-2 mb-4'> <img src={email}/> info@expresselevators.ca</span>
            <span className='flex gap-2 mb-2'>
                    <img src={phone}/>
                    <p>+234(0)8098888666</p>
            </span>
            <span className='flex gap-2 mb-2 pb-8'>
                <img src={phone}/>
                <p>+234(0)8098888666</p>  
            </span>
            <span className='flex gap-2 mt-6 mb-4 border-t-[2px] border-gray-600 pt-4 w-[90vw]'>
                    <img className='w-6 h-6' src={linkedin}/>
                    <img className='w-6 h-6' src={facebook} />
                    <img className='w-6 h-6' src={instagram} />
            </span>
            <span className='flex flex-col gap-2 pb-8'>
                <p>Copyright/All rights reserved.</p>
                <p>Designed by Retro Developers.</p>
            </span>
        </section>)


        }
        </>

    )
}