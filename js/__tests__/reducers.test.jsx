import reducers from '../reducers'

test('SET_SEARCH_TERM', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    { type: 'SET_SEARCH_TERM', payload: 'black' }
  )
  expect(state).toEqual({ searchTerm: 'black', apiData: {} })
})

test('ADD_API_DATA', () => {
  const state = reducers(
    { searchTerm: 'black', apiData: {} },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '2.4',
        title: 'Black Mirror',
        year: '2011–',
        description: 'A television anthology series that shows the dark side of life and technology.',
        poster: 'bm.jpg',
        imdbID: 'tt2085059',
        trailer: 'jDiYGjp5iFg'
      }
    }
  )
  expect(state).toEqual({
    searchTerm: 'black',
    apiData: {
      tt2085059: {
        rating: '2.4',
        title: 'Black Mirror',
        year: '2011–',
        description: 'A television anthology series that shows the dark side of life and technology.',
        poster: 'bm.jpg',
        imdbID: 'tt2085059',
        trailer: 'jDiYGjp5iFg'
      }
    }
  })
})
