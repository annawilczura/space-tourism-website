import { NavLink } from "react-router-dom"

function DestinationNavbar(props: {planets: PlanetData[]}) {
    const planetNames = props.planets.map( planet => {
        return (
            <NavLink className='nav-element-dest' to={`/destinations/${planet.name.toLowerCase()}`}>
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