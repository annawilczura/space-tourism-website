import Navbar from './DestinationNavbar';
import NoMatch from '../NoMatch';
import { useParams } from 'react-router';
import { PlanetData } from '../../models/PlanetData';

function DestinationDetails(props : {planets : PlanetData[]}) {

    const { name = "moon" } = useParams();
    
    const planets = props.planets;

    const planet = planets.find(
        (planet : PlanetData) => planet.name.toLowerCase() === name
    );
    
    function getImageUrl() {
        return new URL(`/assets/destination/image-${name}.png`, import.meta.url).href
    }

    if (planet) {
        return (
            <div className='flex sm:flex-wrap md:flex-nowrap flex-col md:flex-row h-full w-full md:mt-[5vh] md:justify-evenly items-center md:items-start'>
                <div className='flex'>
                    <img className='max-w-[170px] max-h-[170px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[445px] md:max-h-[445px] sm:mt-[4vh]' src={getImageUrl()} alt={name}></img>
                </div>
                <div className = "flex flex-col text w-[80%] sm:w-[70%] md:w-[28rem]">
                    <div className='flex w-full items-center justify-center md:justify-start'>
                        <Navbar planets = {planets}></Navbar>
                    </div>
                    <h1 className='font-sans text-6xl sm:text-7xl md:text-8xl py-2 sm:py-5 md:py-8 md:text-left'>{planet.name.toUpperCase()}</h1>
                    <p className='p-text md:text-left pb-12'>{planet.description}</p>
                    <hr className='border-gray w-full'></hr>
                    <div className='flex flex-col sm:flex-row sm:justify-around md:justify-normal md:gap-[15%] w-full'>
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='flex items-center font-serif1 text-violet text-sm font-thin tracking-widest pt-2'>{`avg. distance`.toUpperCase()}</h3>
                            <p className='font-sans text-3xl py-3'>{planet.distance.toUpperCase()}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='flex items-center font-serif1 text-violet text-sm font-thin tracking-widest pt-2'>{`est. travel time`.toUpperCase()}</h3>
                            <p className='font-sans text-3xl py-3'>{planet.travel.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <NoMatch />
        )
    }

}

export default DestinationDetails