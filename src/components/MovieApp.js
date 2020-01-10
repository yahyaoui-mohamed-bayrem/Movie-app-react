import React, { Component } from 'react'
import './MovieApp.css'
import Header from './Header.js' 
import MovieRender from './MovieRender.js'
import AddMovie from './AddMovie.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
const MySwal = withReactContent(Swal)

export default class MovieApp extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            movieList:[
              {
              mvTitle:"Spider-Man: Into the Spider-Verse (2018)",
              mvImgLink:"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
              mvRating:4
              },
              {
              mvTitle:"Braveheart (1995)",
              mvImgLink:"https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
              mvRating:5
              },
              {
              mvTitle:"The Mandalorian",
              mvImgLink:"https://m.media-amazon.com/images/M/MV5BMWI0OTJlYTItNzMwZi00YzRiLWJhMjItMWRlMDNhZjNiMzJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
              mvRating:3
              },
              {
              mvTitle:"Joker (2019)",
              mvImgLink:"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
              mvRating:5
              },
              {
              mvTitle:"Toy Story 4 (2019)",
              mvImgLink:"https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
              mvRating:3
              }
              ],
            newT:[],
            searchList:[]
        }
    }
    addMovie = ()=>{
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
          }).queue([
            {
              title: 'Movie title',
              text: 'Type in the movie title you want to add'
            },
            {
              title: 'Image',
              text: 'Type in the movie image link'
            },
            {
              title: 'Rating',
              text: 'Type the movie rating ; should be a number between 0 & 5'
            }
          ]).then((result) => {
            if (result.value) {
              const answers = JSON.stringify(result.value)
              this.setState({newT:result.value},()=>{
                const a=Array(this.state.newT)[0]
                console.log(a)
                let myObj = {
                          mvTitle:a[0],
                          mvImgLink:a[1],
                          mvRating:parseInt(a[2])
                }
                this.setState({movieList: [...this.state.movieList,myObj]})
              })
              Swal.fire({
                title: 'All done!',
                html: `
                  Your movie information:
                  <pre><code>${answers}</code></pre>
                `,
                confirmButtonText: 'Lovely!'
              })
            }
          })
    }
    mySearch = (p)=>{
      
      const hhh = ()=>{MySwal.fire({
        width: '1000px',
        title: <div className="movie-container">
        {this.state.searchList.map((el,i)=><MovieRender pr={el} key={i}/>)}
    </div>,
        footer: 'Copyright 2018',
      
      })}
      if (p.searchVal==="")
      {
        if (p.searchRating===0){this.setState({searchList: [...this.state.movieList]},()=>hhh())}
        else{this.setState({searchList: this.state.movieList.filter((el)=>el.mvRating===p.searchRating)},()=>hhh())}
      }
      else{
        if (p.searchRating===0){this.setState({searchList: this.state.movieList.filter((el)=>el.mvTitle.toUpperCase().includes(p.searchVal.toUpperCase()))},()=>hhh())}
        else{this.setState({
                            searchList: this.state.movieList.filter((el)=>el.mvTitle.toUpperCase().includes(p.searchVal.toUpperCase())).filter((el)=>el.mvRating===p.searchRating)
                          }
                            ,()=>hhh())}
      }
    }
    render() {
        return (
            <div className='movie-app'>
                <Header pr={this.mySearch}/>
                <div className="movie-container">
                    {this.state.movieList.map((el,i)=><MovieRender pr={el} key={i}/>)}
                    <AddMovie pr={()=>this.addMovie()}/>
                </div>
            </div>
        )
    }
}
