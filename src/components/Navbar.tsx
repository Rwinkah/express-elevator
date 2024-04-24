import expressLogo from '../assets/expressLogo.svg'
import UseMediaQuery from '../../lib/use-media-query'
import Hamburger from 'hamburger-react';
import { useState} from 'react';
import {Link} from 'react-scroll'



export default function Navbar() {
    const isTabletAbove = UseMediaQuery("(min-width: 768px)");
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='z-[10] top-0'>
        {
            isTabletAbove ? (
                <nav  className="flex pl-[155px] pr-[155px] h-[68px] justify-between bg-white  center items-center  w-[100vw] z-[1000] box-border  top-0 fixed text-sm shadow-lg">
                <Link  activeClass='active'smooth spy to='hero-section' className="text-sm" >
                    <img className="" src={expressLogo}/>
                </Link>
    
                <div className="flex gap-[1rem] items-center text-sm text-[#61636B]">
                <Link activeClass="active" smooth spy to="reason-section" className='text-sm'>
                Why choose us
              </Link>         
              <Link activeClass="active" id='navbarExpertise'  smooth spy to="expertise-section" className='text-sm'>
                Expertise
              </Link>      
              <Link activeClass="active" smooth spy to="component-section" className='text-sm'>
                Components
              </Link>
                <div className="ml-[2rem] h-[36px] w-[105px] border text-white rounded-3xl bg-[#0375F5] flex items-center align-middle justify-around">
                <Link activeClass="active" smooth spy to="footer-section" className='text-sm shadow'>
                Contact us
              </Link>                    </div>
                </div>
    
            </nav>
            ) : (
                <nav className="flex  min-h-[68px] z-9999 bg-white justify-between pr-10   center items-center z-[1000]  w-[100vw] box-border fixed top-0">
                <div id="logo" className="">
                    <img className="" src={expressLogo}/>
                </div>
                <div>
                <Hamburger duration={0.8} toggle={setOpen} toggled={isOpen}/>
                {isOpen && <div className='w-[100vw]'>
                    <ul className='flex-col flex gap-2 bg-white w-full text-lg text-333333white text-white'>
                        <Link activeClass='active'smooth spy to='hero-section' className="border h-[4rem] w-full items-center flex pl-10 pt-2 pb-2  bg-[#283757] rounded-lg">
                            Home
                        </Link>
                        <Link activeClass='active'smooth spy to='reason-section'  className="border h-[4rem] w-full items-center flex pl-10 pt-2 pb-2  bg-[#283757] rounded-lg">
                             Why choose us
                        </Link>
                        <Link id='navbarExpertise' activeClass='active'smooth spy to='expertise-section' className="border h-[4rem] w-full items-center flex pl-10 pt-2 pb-2  bg-[#283757] rounded-lg">
                          Expertise
                        </Link>         
                        <Link activeClass='active'smooth spy to='footer-section' className="border h-[4rem] w-full items-center flex pl-10 pt-2 pb-2  bg-[#283757] rounded-lg ">
                           Contact us
                        </Link>             
                    </ul>
                    </div>}
                </div>

    
    
            </nav>
            )
        }</div>

    )
}