import { useEffect } from 'react';
import data from '../../data/data.json'
import { Link } from 'react-router-dom'

function HomePage(props : {change: (appContainerClassName : string) => void}) {

    useEffect(() => {
        props.change('home-page');
    });

    const buttonText= "EXPLORE";

    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center w-full'>
            <div className='w-5/6 sm:max-w-[70%] md:max-w-[35%] text-center md:text-left'>
                <h3 className='text-violet home-heading'>{data['landing-page']['text-part1'].toUpperCase()}</h3>
                <h1 className='home-heading-main my-5'>{data['landing-page']['text-part2'].toUpperCase()}</h1>
                <p className='p-text'>{data['landing-page']['text-part3']}</p>
            </div>
            <div className='flex items-center justify-center bg-white rounded-full w-[15rem] h-[15rem] sm:w-[22rem] sm:h-[22rem] md:w-[26rem] md:h-[26rem] bg-opacity-0 hover:bg-opacity-10 hover:ease-in duration-500'>
                <Link className='flex items-center justify-center explore-button z-10' to="/destinations/moon">
                    <span className='text-navy-blue text-xl sm:text-4xl font-sans'>{buttonText}</span>
                </Link>
            </div>

        </div>
    )
}
export default HomePage