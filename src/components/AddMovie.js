import React, { Component } from 'react'
import './AddMovie.css'

export default class AddMovie extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="add-container" onClick={()=>this.props.pr()}>
                <img className="add-icon" src="https://c7.uihere.com/icons/668/60/889/shape-square-plus-185061cb55963193d91172f968f560fe.png" alt="mmm"/>
            </div>
        )
    }
}
