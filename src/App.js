import './App.css'

import {Component} from 'react'
class App extends Component {
  state = {color: 'Yellow'}
  shouldComponentUpdate() {
    return false
  }
  onUpdateColor = () => {
    this.setState({color: 'blue'})
  }
  render() {
    const {color} = this.state
    console.log(color)
  }
}
