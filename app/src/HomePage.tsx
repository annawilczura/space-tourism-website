import data from './data/data.json'
import './HomePage.sass';
function HomePage() {
    return (
        <div className='container'>
            <div className='text'>
                <h1>{data['landing-page']['text-part1']}</h1>
                <h1>{data['landing-page']['text-part2'].toUpperCase()}</h1>
                <h2>{data['landing-page']['text-part3']}</h2>
            </div>
            <button className='button'>Explore</button>
        </div>
    )
}

export default HomePage