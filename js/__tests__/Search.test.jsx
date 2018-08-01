import React from 'react'
import { shallow } from 'enzyme'
import { shows } from '../../data.json'
import Search from '../Search'
import ShowCard from '../ShowCard'

test('Search renders correctly', () => {
  const component = shallow(<Search />)

  expect(component).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />)

  expect(component.find(ShowCard).length).toEqual(shows.length)
})

test('Search should render correct amount of shows based on search term', () => {
  const component = shallow(<Search />)
  const searchTerm = 'black'
  const showCount = shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) >= 0
  ).length

  component.find('input').simulate('change', { target: { value: searchTerm } })
  expect(component.find(ShowCard).length).toEqual(showCount)
})
