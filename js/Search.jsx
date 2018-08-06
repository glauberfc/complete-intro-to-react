// @flow

import React, { Component } from 'react'
import { shows } from '../data.json'
import ShowCard from './ShowCard'

type State = {
  searchTerm: string
}

class Search extends Component<{}, State> {
  state = {
    searchTerm: ''
  }

  handleSearchTermChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toLowerCase()
                  .indexOf(this.state.searchTerm.toLowerCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    )
  }
}

export default Search
