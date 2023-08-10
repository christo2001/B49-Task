import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return React.createElement('div',{className:"container"},  React.createElement('div', {className:"card"}, React.createElement('div',{className:"cards"},
    
    //card1
    React.createElement('div',{className:'card1'}, React.createElement('p',{className:"type"},"free"), React.createElement('h1',{className:'heading'},"$0/month"),
    //card1 body
    React.createElement('div',{className:'card-body'},
    // availability
    React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"single user"),
    React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"50 gb storage"),
    React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"unlimited public projects"),
    React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"community access"),
    //declined
    React.createElement('p',{className:"declined"},<FontAwesomeIcon icon={faCircleXmark} />,"unlimited private projects"),
    React.createElement('p',{className:"declined"},<FontAwesomeIcon icon={faCircleXmark} />,"dedicated phone support"),
    React.createElement('p',{className:"declined"},<FontAwesomeIcon icon={faCircleXmark} />,"free subdomain"),
    React.createElement('p',{className:"declined"},<FontAwesomeIcon icon={faCircleXmark} />,"monthly status reports"),
    //button
    React.createElement('div',{className:'button-dec'},"button"))),
  
    








  //card2
  React.createElement('div',{className:'card1'}, React.createElement('p',{className:"type"},"plus"), React.createElement('h1',{className:'heading'},"$9/month"),
  //card2 body
  React.createElement('div',{className:'card-body'},
  // availability
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"5 users"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"50 gb storage"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"unlimited public projects"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"community access"),
  //declined
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"unlimited private projects"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"dedicated phone support"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"free subdomain"),
  React.createElement('p',{className:"declined"},<FontAwesomeIcon icon={faCircleXmark} />,"monthly status reports"),
  //button
  React.createElement('div',{className:'button-dec'},"button"))),


  //card3
  React.createElement('div',{className:'card1'}, React.createElement('p',{className:"type"},"pro"), React.createElement('h1',{className:'heading'},"$49/month"),
  //card3 body
  React.createElement('div',{className:'card-body'},
  // availability
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"unlimited users"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"50 gb storage"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"unlimited public projects"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"community access"),
  //declined
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"unlimited private projects"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"dedicated phone support"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"free subdomain"),
  React.createElement('p',{className:"available"},<FontAwesomeIcon icon={faCheck} />,"monthly status reports"),
  //button
  React.createElement('div',{className:'button-avai'},"button"))),



    
    )))
  }
}

export default App
