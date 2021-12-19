function Movi(props) {
    const {Title,Year, ImdbID,Poster, Type} = props
    return <div className="card" id={ImdbID} >
        <div className="card-image waves-effect waves-block waves-light">
            {
             Poster === 'N/A' ?
                <img className="activator" src={'https://via.placeholder.com/300x400?text=Visit+Blogging.com+Now'} alt={Poster}/>
                :
                <img className="activator" src={Poster} alt={Poster}/>
            }
     
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Year} <span className = 'right'>{Type}</span></p>
        </div>

</div>
}

export {Movi}