import React from 'react'
import { shallow } from 'enzyme'
import { shows } from '../../data.json'
import { Unwrapped as UnwrappedSearch } from '../Search'
import ShowCard from '../ShowCard'

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={shows} searchTerm="" />)

  expect(component).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={shows} searchTerm="" />)

  expect(component.find(ShowCard).length).toEqual(shows.length)
})

test('Search should render correct amount of shows based on search term', () => {
  const searchTerm = 'black'
  const component = shallow(
    <UnwrappedSearch shows={shows} searchTerm={searchTerm} />
  )
  const showCount = shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) >= 0
  ).length

  // component.find('input').simulate('change', { target: { value: searchTerm } })
  expect(component.find(ShowCard).length).toEqual(showCount)
})
