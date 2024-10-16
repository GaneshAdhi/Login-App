import './index.css'

import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {status: true}

  checkStatus = () => {
    this.setState(pre => ({status: !pre.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="main-container">
        <Message status={status} />
        {status && <Login login={this.checkStatus} />}
        {!status && <Logout logout={this.checkStatus} />}
      </div>
    )
  }
}

export default Home
