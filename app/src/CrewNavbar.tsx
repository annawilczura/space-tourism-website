import { NavLink } from "react-router-dom"

function CrewNavbar(props: {crew: CrewData[]}) {
    const crewLinks = props.crew.map( person => {
        return (
                <NavLink className='crew-navlink' to={`/crew/${person.role.split(' ').join('_').toLowerCase()}`}>
                </NavLink>
        )
    })
    return (
        <div className='self-center md:self-start w-[7rem] h-4 md:w-[8.5rem] flex justify-between mt-6'>
            {crewLinks}
        </div>
    )
}

export default CrewNavbar