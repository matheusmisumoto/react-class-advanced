import React, { Component } from 'react'
import TwitterHooks from './TwitterHooks'

class Hooks extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render () {
    
    const posts = [{
      title: 'xpto',
      description: 'foo'
    },{
      title: 'xpto',
      description: 'foo'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remove component</button>
        {this.state.actived && (
          <TwitterHooks posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default Hooks