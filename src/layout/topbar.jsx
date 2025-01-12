import { useState } from 'react'
import logoNM from '/logo/logo-NimeWatch.png'
import { useEffect } from 'react';

export default function Topbar(){

    const [scrollY, setScrollY]         = useState(0);
    const [isVisible, setIsVisible]     = useState(true)

    const handleScrol = () => {
        let currentScrollY = window.scrollY;

        if(currentScrollY > scrollY && currentScrollY > 80)
        {
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }

        setScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrol)
        return() => {
            window.removeEventListener("scroll", handleScrol)
        }
    }, [scrollY])

    return(
        <div className={`lex h-20 w-full justify-center items-center bg-black-900 bg-opacity-60 sticky top-0 z-50 transition-transform duration-300 -translate-y-${isVisible ? 0 : 'full'}`}>
            <div className='flex justify-between w-full px-2 items-center'>
                <img src={logoNM} className='h-8 sm:h-12 md:h-16'/>
                <div>
                    &nbsp;
                </div>
                <div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
                </div>
            </div>
        </div>
    )
}