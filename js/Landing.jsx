// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { RouterHistory } from 'react-router-dom'
import setSearchTerm from './actionCreators'

type Props = {
  searchTerm: string,
  handleSearchTermChange: Function,
  history: RouterHistory
}

class Landing extends Component<Props> {
  goToSearch = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.history.push('/search')
  }
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
          />
          <a>or Browse All</a>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state: Object) {
  return { searchTerm: state.searchTerm }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    handleSearchTermChange: event => {
      dispatch(setSearchTerm(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
