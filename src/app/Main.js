import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {observer} from 'mobx-react'
import Home from './Home.js'
import Login from './Login.js'
import H1 from './Home.js'

@observer
export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => (<Login store={this.props.store}/>)} />
          <Route exact path="/home" component={() => (<Home store={this.props.store}/>)} />
          <Route exact path="/test" component={() => (<H1 store={this.props.store}/>)} />
        </div>
      </Router>
    )
  }
}

// SAMPLE ROUTES FOR EXAMPLE //
// <Route path="/room/:id" component={() => (<Room store={this.props.store}/>)}/>
// <Route path="/about" component={About}/>
// <Route path="/contact" component={Contact}/>