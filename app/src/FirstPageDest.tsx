import './FirstPageDest.sass'

function FirstPageDest(props: PlanetData) {
    const planet = props;

    return (
        <div className = "container">
            <img src={planet.images.png} alt ={planet.name}></img>
            <div className = "text">
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
}

export default FirstPageDest