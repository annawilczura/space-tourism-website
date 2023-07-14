import { NavLink } from "react-router-dom"

function DestinationNavbar(props: {planets: PlanetData[]}) {
    const planetNames = props.planets.map( planet => {
        return (
            <li key={planet.name}>
                <NavLink to={`/destinations/${planet.name.toLowerCase()}`}>
                    {planet.name}
                </NavLink>
            </li>
        )
    })
    return (
        <div>
            {planetNames}
        </div>
    )
}

export default DestinationNavbar