import { Phone } from 'lucide-react'
import Logo from '../assets/expressLogo.svg'
import facebook from '../assets/social_facebook.svg'
import instagram from '../assets/social_ig.svg'
import linkedin from '../assets/social_linkedin.svg'

export default function Footer () {
    return (
        <section id="footer" className="pl-[100px] bg-[#021E42] h-[248px] w-[100vw] flex justify-between text-white  items-center">
            <div id='footer_left'> 
                <img src={Logo} className='mb-[3rem]' />
                <span className=''>Plot 8, 10 A Sani Zangon-Daura Street, Guzape, Asokoro, FCT ABUJA, Nigeria</span>
                <p className='mb-2 mt-[18px]'>Copyright/All rights reserved.</p>
                <p>Designed by Retro Developers.</p>
            </div>
            <div id='footer_right' className='w-[20vw]'>
                <span>Contact us:</span>
                <span className='flex gap-2 mt-4'>
                    <img src={linkedin}/>
                    <img src={facebook} />
                    <img src={instagram} />
                </span>
                <span className='flex'>
                    <img/>
                    <p>+234(0)8098888666</p>
                </span>
                <span className='flex'>
                    <img src={}/>
                    <p>+234(0)9086060234</p>
                </span>
            </div>

        </section>
    )
}