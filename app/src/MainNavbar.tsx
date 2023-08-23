import { NavLink } from 'react-router-dom';

function MainNavbar() {
    return (
            <div className='main-nav-container'>
                <img src='/assets/shared/logo.svg' className='w-[40px] sm:w-[48px] md:mr-10'></img>
                <svg className='hidden md:block grow relative -right-6 z-30' height="1" width="200">
                    <line x1="0" y1="0" x2="1000" y2="0"/>
                </svg>
                <img className='sm:hidden pr-6' src='/assets/shared/icon-hamburger.svg'></img>
                <div className='absolute hidden top-0 right-0 sm:static h-screen w-[20rem] sm:flex grow items-center sm:w-[32rem] sm:max-w-[65%] md:max-w-[45rem] sm:h-full px-4 md:pr-12 bg-white bg-opacity-5 backdrop-blur-md z-20'>
                    <div  className='flex flex-col sm:flex-row w-full h-full justify-start sm:justify-evenly'>
                        <NavLink 
                            to='/'   
                            className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''}>
                            <div className='nav-element'>
                                <span>00</span> 
                                HOME
                            </div>
                        </NavLink>
                        <NavLink
                            to='/destinations'   
                            className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''}>
                            <div className='nav-element'>
                                <span>01</span> 
                                DESTINATION
                            </div>
                        </NavLink>
                        <NavLink 
                            to='/crew'   
                            className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''}>
                            <div className='nav-element'>
                                <span>02</span> 
                                CREW
                            </div>
                        </NavLink>
                        <NavLink 
                            to='/technology'   
                            className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''}>
                            <div className='nav-element'>
                                <span>03</span>
                                TECHNOLOGY
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}

export default MainNavbar