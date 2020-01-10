import React, { Component } from 'react'
import './RatingStars.css'

export default class RatingStars extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            rating:this.props.pr?this.props.pr:0
        };
    }
    startHendler =(e)=>{
        this.setState({rating: parseInt(e.target.parentNode.className.baseVal[4])},
        ()=>{if(this.props.getRating){this.props.getRating(this.state.rating)}}
        );
    }
    myTest = (a)=>{return !(a<=this.state.rating) ? "" : " filled"}
    render() {
        return (
            <div>
                <div className="stars" data-stars="1">
                    <svg height="25" width="23" className={"star1" + this.myTest(1)} onClick={this.startHendler}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule: "nonzero"}}/>
                    </svg>
                    <svg height="25" width="23" className={"star2" + this.myTest(2)} onClick={this.startHendler}>
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule:"nonzero"}}/>
                    </svg>
                    <svg height="25" width="23" className={"star3" + this.myTest(3)} onClick={this.startHendler}>
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule:"nonzero"}}/>
                    </svg>
                    <svg height="25" width="23" className={"star4" + this.myTest(4)} onClick={this.startHendler}>
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule:"nonzero"}}/>
                    </svg>
                    <svg height="25" width="23" className={"star5" + this.myTest(5)} onClick={this.startHendler}>
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule:"nonzero"}}/>
                    </svg>
                </div>
                <a>{this.state.myStars}</a>
            </div>
        )
    }
}
