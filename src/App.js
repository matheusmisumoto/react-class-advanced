import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyRoutes from './routes'


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
    // Class 09: Dumb Components <DumbComponents />
    // Class 10: Smart Components <SmartComponents />

    return (
      <>
        <h1>Table of Contents</h1>
        <ol>
          <li><Link to="/classes/life-cicle">Life Cicle</Link></li>
          <li><Link to="/classes/hooks">Hooks</Link></li>
          <li><Link to="/classes/context-api">Context API</Link></li>
          <li><Link to="/classes/fragments">Fragments</Link></li>
          <li>Error Boundary (used on index.js)</li>
          <li><Link to="/classes/render-props">Render Props</Link></li>
          <li><Link to="/classes/type-checking">Type checking with Prop Types</Link></li>
          <li><Link to="/classes/refs-and-dom">Refs and DOM</Link></li>
          <li><Link to="/classes/dumb-components">Dumb Components</Link></li>
          <li><Link to="/classes/smart-components">Smart Components</Link></li>
          <li><Link to="/classes/project-organization">Organizing your project</Link></li>
        </ol>
        <hr style={{margin: '25px 0' }} />
        <MyRoutes />
      </>
    )
  }
}

export default App