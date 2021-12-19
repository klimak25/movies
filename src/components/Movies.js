import {Movi} from './Movi'
function Movies(props){
     const {movie = []} = props
     return <div className='movies'>
          {movie.length ? movie.map(movie => (
              <Movi key={movie.imdbID} {...movie}/>)) : <h4>Not end</h4>
     
          }  
</div>
}


export{ Movies}
