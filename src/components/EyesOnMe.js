import React from 'react'
import ReactDOM from 'react-dom'

export default class EyesOnMe extends React.Component {
  constructor (props) {
    super(props)
  }

  focused () {
    console.log('Good!')
  }

  blurred () {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <div>
        <button onFocus={this.focused} onBlur={this.blurred} />
      </div>
    )
  }
}
