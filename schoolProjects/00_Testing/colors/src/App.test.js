import React from 'react';
import App, {colors, randColor, randNum} from './App';
import { shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

it("renders without crashing", ()=>{
  const wrapper = shallow(<App />)
  // console.log(wrapper)
  // console.log(wrapper.debug())
  
  const appComponent = wrapper.find("[data-test='component-app']")
  // console.log(appComponent.debug())
})

describe("Color array", ()=>{
  it('contains an array of at least 3 colors', () => {
    expect(colors.length).toBeGreaterThanOrEqual(3)
  })
  
  it('contains an array with at least red, blue, and green as values', () => {
    expect(colors).toEqual(expect.arrayContaining(['red', 'blue', 'green']))
  })
})

describe("Button and functionality", ()=>{
  it('contains a <button> element', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    expect(button.length).toBe(1)
  })

  it('runs the function when button is clicked', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    expect(button.simulate('click')).toBeTruthy()
    button.simulate('click')
    wrapper.update()
    const updatedBackgroundColorState = wrapper.find('backgroundColor')
    expect(updatedBackgroundColorState).not.toEqual('purple')
  })
})

describe("Random number genertion", ()=>{
  it('random number generator function exists', ()=> {
    expect(randColor).toBeTruthy()
  })
  
  it('picks a number that is NOT larger than the array of colors', () => {
    expect(randNum()).toBeGreaterThanOrEqual(0)
    expect(randNum()).toBeLessThan(colors.length)                                 
  })
})

describe('Initial sate', ()=>{
  it('has initial state of purple', () => {
    const wrapper = shallow(<App />)
    const initialBackgroundColorState = wrapper.find("[data-test='component-app']").prop('style')
    expect(initialBackgroundColorState.backgroundColor).toBe('purple')
  })
})

