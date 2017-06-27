import React from 'react'
import ReactDOM from 'react-dom'

export default class Keypad extends React.Component {
  log () {
    console.log('Entering password...')
  }

  render () {
    return (
      <div>
        <input onKeyUp={this.log} type='password' />
      </div>
    )
  }
}
