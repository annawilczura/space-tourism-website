import { NavLink } from "react-router-dom"

function DestinationNavbar(props: { technology: TechData[] }) {
    const navButtons = props.technology.map( (techObject, index) => {
        return (
            <li key={ techObject.name.toLowerCase().split(' ').join('-') }>
                <NavLink to={`/technology/${techObject.name.toLowerCase().split(' ').join('_')}`}>
                    { index + 1 }
                </NavLink>
            </li>
        )
    })
    return (
        <ul>
            {navButtons}
        </ul>
    )
}

export default DestinationNavbar