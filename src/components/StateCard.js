import React, { Component } from 'react'

export default function StateCard(props) {

    return (
      <div className="state-card">

        <h3>{props.name}</h3>
        <img src={props.flag} alt={`flag of ${props.name}`} onClick={() => props.handleClick(props.flag)} />

      </div>
    )

}
