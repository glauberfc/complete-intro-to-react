// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
}

export type Show = {
  title: string,
  year: string,
  description: string,
  poster: string,
  imdbID: string,
  trailer: string
}

export type setSearchTermAction = { type: 'SET_SEARCH_TERM', payload: string }

export type Action = setSearchTermAction
