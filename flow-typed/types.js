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
