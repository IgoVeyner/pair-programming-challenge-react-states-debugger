import React, { Component } from 'react'

function StateCard() {

    return (
      <div className="state-card">

        <h3>{props.name}</h3>
        <img src={props.flag} alt={`flag of ${props.name}`} onClick={props.handleClick} />

      </div>
    )

}
