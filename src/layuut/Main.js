import React from "react"
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import { Search } from "../components/Search"
 
const API_KEY = process.env.REACT_APP_API_KEY
  class Main extends React.Component {

    state = {
      movie: [],
      loading: true
    }
    componentDidMount() {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avatar`)
      .then(response => response.json())
      .then(data => this.setState({movie: data.Search, loading: false}))
      .catch((err) => {
        console.log(err)
        this.setState({ loading: false})
      })
  }

  searchMovies =(str, type = 'all') => {
    this.setState({loding: true})
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' 
    ? `&type=${type} ` : ''}`)
    .then(response => response.json())
    .then(data => this.setState({movie: data.Search, loading: false}))
    .catch((err) => {
      console.log(err)
      this.setState({ loading: false})
    })
  }

    render(){
      const {movie, loading} = this.state
    return <main className=' contanier content'>
      <Search searchMovies={this.searchMovies}/>
       { loading ? <Preloader/> : <Movies movie ={movie}/> }   
    </main> 
    }
}
export {Main}