import { NavLink } from "react-router-dom"

function DestinationNavbar(props: {crew: CrewData[]}) {
    const crewLinks = props.crew.map( person => {
        return (
                <NavLink to={`/crew/${person.role.split(' ').join('_').toLowerCase()}`}>
                    <li key={person.role.split(' ').join('_')}></li>
                </NavLink>
        )
    })
    return (
        <div>
            {crewLinks}
        </div>
    )
}

export default DestinationNavbar