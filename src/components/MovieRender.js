import React, { Component } from 'react'
import './MovieRender.css'
import RatingStars from './RatingStars'

export default class MovieRender extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="movie-card">
                <img className="movie-img" src={this.props.pr.mvImgLink} alt="mvmv"/>
                <h4 className="movie-title">{this.props.pr.mvTitle}</h4>
                <div className="rating"><RatingStars pr={this.props.pr.mvRating}/></div>
            </div>
        )
    }
}
