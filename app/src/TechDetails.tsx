import Navbar from './TechNavbar'
import { useParams } from 'react-router';
import { TechData } from './models/TechData';

function TechDetails(props : {technology : TechData[]}) {

    const { name } = useParams();
    const technology = props.technology;
    const techObject = technology.find(
        (techObject : TechData) => techObject.name.toLowerCase().split(' ').join('_') === name
    );

    if (techObject) {
        return (
            <div className = "flex grow flex-col-reverse md:flex-row justify-end md:justify-between">
                <div className='tech-text-container'>
                    <Navbar technology = {technology}></Navbar>
                    <div className = "text">
                        <h3 className='md:text-left text-sm sm:text-base font-serif1 font-light tracking-widest text-violet'>THE TERMINOLOGY...</h3>
                        <h1 className='font-sans text-white md:text-left text-2xl sm:text-5xl md:text-6xl py-3 max-w-[100%]'>{techObject.name.toUpperCase()}</h1>
                        <p className='p-text md:text-left max-w-[30rem]'>{techObject.description}</p>
                    </div>
                </div>
                <div className={`tech-image ${name === "launch_vehicle" ? "bg-launch-vehicle-ls md:bg-launch-vehicle-pt" : ""}${name === "space_capsule" ? "bg-space-capsule-ls md:bg-space-capsule-pt" : ""}${name === "spaceport" ? "bg-spaceport-ls md:bg-spaceport-pt" : ""}`} aria-label={`photo of ${techObject.name}`}></div>
            </div>
        )
    } else {
        return (
            <div>This link doesn't exist</div>
        )
    }

}

export default TechDetails