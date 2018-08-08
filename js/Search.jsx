// @flow

import React, { Component } from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

type State = {
  searchTerm: string
}

class Search extends Component<{ shows: Array<Show> }, State> {
  state = {
    searchTerm: ''
  }

  props: {
    shows: Array<Show>
  }

  handleSearchTermChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.shows
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
