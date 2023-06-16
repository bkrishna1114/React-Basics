import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h1>I'm From {this.props.name} component</h1>
      </div>
    )
  }
}
