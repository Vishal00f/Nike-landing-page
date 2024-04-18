import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"
function Navbar() {
    const [isExpanded,setIsExpanded]=useState<boolean>(false)
const handleExpandMenu = ()=>{
    setIsExpanded(!isExpanded)
}
let content=(
    <div className=" flex-col  items-center w-full  bg-pale-blue lg:hidden ">
        <ul className=" w-full text-center p-2" >
            {navLinks.map((item)=>
                
                    <a href={item.href}>
                        <li className="p-4 text-lg w-full hover:bg-gray-900 hover:text-white rounded-lg font-bold" >{item.label}</li></a>
                
            )}
        </ul>
    </div>
)
  return (<>
  
    <header className=" absolute z-20 w-full ">
        <nav className="padding-x  flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>
                    <li key={item.label}>
                        <a href={item.href} 
                            className="font-montserrat leading-normal text-lg text-slate-gray transition duration-300  transform hover:scale-125 hover:text-gray-900 hover:font-bold"
                        >{item.label}</a>
                    </li>
                )}
            </ul>
            <div className="cursor-pointer" onClick={handleExpandMenu}>
                <img src={hamburger} alt="hamburger"  width={25} height={25} className="max-lg:block hidden"/>
            </div>
        </nav>
            {isExpanded && content}
    </header>
            </>
  )
}

export default Navbar