// import React from  'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' 
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />)
  })
  // const wrapper = shallow(<NavigationItems />) //lmao? i can do this too

  it('should render 2 <NavigationItem /> elements if not authenicated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  })

  it('should render 3 <NavigationItem /> elements if authenicated', () => {
    wrapper.setProps({isAuthenicated: true})
    expect(wrapper.find(NavigationItem)).toHaveLength(3)
  })

  it('should render a logout <NavigationItem /> element if authenicated', () => {
    wrapper.setProps({isAuthenicated: true})
    expect(wrapper.contains(<NavigationItem link="/logout"> Logout </NavigationItem>)).toEqual(true)
  })
})