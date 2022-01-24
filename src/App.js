import React, { Component } from 'react'
import LifeCicle from './life-cicle'
import Hooks from './hooks'
import ContextAPI from './context-api'
import Fragments from './fragments'
import RenderProps from './render-props'
import PropTypeClass from './prop-types'
import RefsDom from './refs-dom'

class App extends Component {

  render () {

    /****************************************************************/
    /*  TABLE OF CONTENTS                                           */
    /****************************************************************/

    // Class 01: Life Cicle <LifeCicle />
    // Class 02: Hooks <Hooks />
    // Class 03: Context API <ContextAPI />
    // Class 04: Fragments <Fragments />
    // Class 05: ErrorBoundary <ErrorBoundary /> (used on index.js)
    // Class 06: Render Props <RenderProps />
    // Class 07: Prop Types <PropTypes />
    // Class 08: Refs and DOM <RefsDom />

    return (
      <div>
        {/* <LifeCicle /> */}
        {/* <Hooks /> */ }
        {/* <ContextAPI /> */}
        {/* <Fragments /> */}
        {/* <RenderProps /> */}
        {/* <PropTypeClass /> */}
        <RefsDom />
      </div>
    )
  }
}

export default App