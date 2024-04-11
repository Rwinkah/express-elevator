import React from "react";
import expressLogo from '../assets/expressLogo.svg'
export default function Navbar() {
    return (
        <nav className="flex pl-[155px] pr-[155px] h-[68px] justify-between bg-white  center items-center box-border">
            <div id="logo" className="">
                <img className="" src={expressLogo}/>
            </div>

            <div className="flex gap-[1rem] items-center text-sm text-[#61636B]">
                <a className="text-[#61636B] text-sm">Why choose us</a>
                <a className="text-[#61636B] text-sm">Services</a>
                <a className="text-[#61636B] text-sm">Components</a>
                <div className="ml-[2rem] h-[36px] w-[105px] border rounded-3xl bg-[#0375F5] flex items-center align-middle justify-around">
                  <a className="text-white font-medium text-sm" >Contact us</a>
                </div>
            </div>

        </nav>
    )
}