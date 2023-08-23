import { NavLink } from "react-router-dom"

function TechNavbar(props: { technology: TechData[] }) {
    const navButtons = props.technology.map( (techObject, index) => {
        return (
            <NavLink to={`/technology/${techObject.name.toLowerCase().split(' ').join('_')}`}>
                <li className='tech-navlink' key={ techObject.name.toLowerCase().split(' ').join('-') }>
                    { index + 1 }
                </li>
            </NavLink>
        )
    })
    return (
        <ul className="flex md:flex-col text-white justify-center md:justify-normal h-full gap-5 mr-8">
            {navButtons}
        </ul>
    )
}

export default TechNavbar