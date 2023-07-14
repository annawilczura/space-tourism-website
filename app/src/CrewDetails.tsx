import Navbar from './CrewNavbar'
import { useParams } from 'react-router'

function CrewDetails(props : {crew : CrewData[]}) {

    const { role } = useParams();
    const crew = props.crew;
    const person = crew.find(
        (person : CrewData) => person.role.toLowerCase() === role!.split('_').join(' ')
    );

    if (person) {
        return (
            <div className = "container">
                <div className = "text">
                    <h2>{person.role.toUpperCase()}</h2>
                    <h1>{person.name.toUpperCase()}</h1>
                    <p>{person.bio}</p>
                    <Navbar crew = {crew}></Navbar>
                </div>
                <img src={`/${person.images.png}`} alt ={person.name}></img>
            </div>
        )
    } else {
        return (
            <div>This link doesn't exist</div>
        )
    }

}

export default CrewDetails