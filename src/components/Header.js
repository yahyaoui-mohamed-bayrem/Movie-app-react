import React, { Component } from 'react'
import './Header.css'
import RatingStars from './RatingStars'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            searchVal:"",
            searchRating:0
        }
    }
    inputHendler=(e)=>{
        this.setState({searchVal: e.target.value})
    }
    submitSearch=()=>{
        this.props.pr(this.state)
    }
    getRating=(p)=>{
        this.setState({searchRating:p})
    }
    render() {
        return (
            <div className='header'>
                <input className='search-input' placeholder='Type movie title' value={this.state.inputVal} onChange={this.inputHendler}/>
                <button className='search-btn' onClick={this.submitSearch}>Search</button>
                <RatingStars getRating={this.getRating}/>
            </div>
        )
    }
}
