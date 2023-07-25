import Navbar from './DestinationNavbar'
import { useParams } from 'react-router';

function DestinationDetails(props : {planets : PlanetData[]}) {

    const { name = "moon" } = useParams();
    
    const planets = props.planets;

    const planet = planets.find(
        (planet : PlanetData) => planet.name.toLowerCase() === name
    );

    if (planet) {
        return (
            <div className = "container">
                <img src={`/${planet.images.png}`} alt ={planet.name}></img>
                <div className = "text">
                    <Navbar planets = {planets}></Navbar>
                    <h1>{planet.name.toUpperCase()}</h1>
                    <p>{planet.description}</p>
                    <hr></hr>
                    <div className='numbers'>
                        <div>
                            <h3>{`avg. distance`.toUpperCase()}</h3>
                            <p>{planet.distance}</p>
                        </div>
                        <div>
                            <h3>{`est. travel time`.toUpperCase()}</h3>
                            <p>{planet.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>This link doesn't exist</div>
        )
    }

}

export default DestinationDetails