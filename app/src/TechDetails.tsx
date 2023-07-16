import './ThirdPageTech.sass'
import Navbar from './TechNavbar'
import { useParams } from 'react-router';

function TechDetails(props : {technology : TechData[]}) {

    const { name } = useParams();
    const technology = props.technology;
    const techObject = technology.find(
        (techObject : TechData) => techObject.name.toLowerCase().split(' ').join('_') === name
    );

    if (techObject) {
        return (
            <div className = "container">
                <Navbar technology = {technology}></Navbar>
                <div className = "text">
                    <h3>The technology...</h3>
                    <h1>{techObject.name}</h1>
                    <p>{techObject.description}</p>
                </div>
                <img src={`/${techObject.images.portrait}`} alt ={ techObject.name }></img>
            </div>
        )
    } else {
        return (
            <div>This link doesn't exist</div>
        )
    }

}

export default TechDetails