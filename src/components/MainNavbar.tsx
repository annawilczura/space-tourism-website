import { NavLink } from 'react-router-dom';
import { useState, useEffect, MouseEventHandler } from 'react';
import logoUrl from "/assets/shared/logo.svg?url";
import closeIconUrl from "/assets/shared/icon-close.svg?url";
import burgerIconUrl from "/assets/shared/icon-hamburger.svg"

function MainNavbar() {
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, []);
    
    const handleClick : MouseEventHandler = (e) => {
        if (e.target === e.currentTarget) {
            setIsShown(current => !current);
          }
    };

    const [width, setWidth] = useState(window.innerWidth);
    const [isShown, setIsShown] = useState(false);
    const breakpoint = 520;
    const navElements = [{number:"00", title:"HOME", route:"/"}, {number:"01", title:"DESTINATION", route:"/destinations"}, {number:"02", title:"CREW", route:"/crew"}, {number:"03", title:"TECHNOLOGY", route: "/technology"}];
    const navLinks = navElements.map((el) => {
        return (
            <NavLink 
                to={el.route}
                className={({ isActive, isPending }) =>
                isPending ? "nav-element" : isActive ? "active nav-element" : "nav-element"
              }
                onClick={handleClick}
                key={el.title.toLowerCase()}>
                    <span>{el.number}</span> 
                    {el.title}
            </NavLink>
        )
    })
    return (
        <div className='main-nav-container'>
            <img src={logoUrl} className='w-[40px] sm:w-[48px] md:mr-10' alt='logo'></img>
            <svg className='hidden md:block grow relative -right-6 z-30' height="1" width="200">
                <line x1="0" y1="0" x2="1000" y2="0"/>
            </svg>
            <img onClick={handleClick} className='sm:hidden pr-6 cursor-pointer' src={burgerIconUrl} alt='menu icon'></img>
            {
                width < breakpoint
                ? isShown &&
                (<div className='absolute top-0 left-0 h-screen w-screen' onClick={handleClick}>
                    <div className='absolute top-0 right-0 flex flex-col h-screen w-[20rem] bg-white bg-opacity-5 backdrop-blur-md z-20'>
                        <img className='self-end cursor-pointer m-10' onClick={handleClick} src={closeIconUrl} alt='close icon'></img>
                        <nav className='flex flex-col sm:flex-row w-full h-full justify-start sm:justify-evenly pt-10 pl-10 pr-[2px]'>
                            {navLinks}
                        </nav>
                    </div>
                </div>)
                : 
                (<div className='sm:flex grow items-center w-[32rem] sm:max-w-[65%] md:max-w-[45rem] sm:h-full px-4 md:pr-12 bg-white bg-opacity-5 backdrop-blur-md'>
                    <nav  className='flex flex-col sm:flex-row w-full h-full justify-start sm:justify-evenly'>
                        {navLinks}
                    </nav>
                </div>)          
            }
        </div>
    )
}

export default MainNavbar