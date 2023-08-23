import Navbar from './CrewNavbar'
import { useParams } from 'react-router'

function CrewDetails(props : {crew : CrewData[], heading: string}) {

    const { role } = useParams();
    const crew = props.crew;
    const person = crew.find(
        (person : CrewData) => person.role.toLowerCase() === role!.split('_').join(' ')
    );

    if (person) {
        return (
            <div className = "flex flex-col-reverse justify-end sm:flex-col md:flex-row h-full items-center sm:justify-between md:justify-evenly w-screen">
                <div className = "crew-text-container">
                        <div className='flex flex-col items-center md:items-start'>
                            <h2 className='font-sans text-base sm:text-2xl md:text-4xl text-opacity-50 text-white py-3'>{person.role.toUpperCase()}</h2>
                            <h1 className='text-white md:text-left text-2xl sm:text-5xl md:text-6xl py-3 max-w-[100%]'>{person.name.toUpperCase()}</h1>
                            <p className='p-text md:text-left min-w-[12rem] sm:min-w-[20rem] sm:w-[90%] sm:max-w-[35rem] md:max-w-[28rem] py-3'>{person.bio}</p>  
                        </div> 
                        <Navbar crew = {crew}></Navbar>
                    </div>
                <div className={`crew-image ${role  === "commander" ? "bg-commander" : ""}${role === "mission_specialist" ? "bg-mission_specialist" : ""}${role === "pilot" ? "bg-pilot" : ""}${role === "flight_engineer" ? "bg-flight_engineer" : ""}`} aria-label={`photo of ${person.name}`}> 
                </div>
            </div>
        )
    } else {
        return (
            <div>This link doesn't exist</div>
        )
    }

}

export default CrewDetails