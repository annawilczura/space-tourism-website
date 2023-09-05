import { NavLink } from 'react-router-dom';
import { PlanetData } from '../../models/PlanetData';

function DestinationNavbar(props: {planets: PlanetData[]}) {
    const planetNames = props.planets.map( planet => {
        return (
            <NavLink 
                className={({ isActive, isPending }) => isPending ? "nav-element-dest" : isActive ? "active nav-element-dest" : "nav-element-dest"}
                to={`/destinations/${planet.name.toLowerCase()}`}>
                {planet.name.toUpperCase()}
            </NavLink>
        )
    })
    return (
        <nav className="flex w-[80%] sm:max-w-[20rem] md:w-[20rem] h-[3rem] justify-between">
            {planetNames}
        </nav>
    )
}

export default DestinationNavbar