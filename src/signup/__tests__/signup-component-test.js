import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Signup from '../../signup';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import expect from 'expect';

describe('Signup Component Test', () => {
  
  describe('Signing up...', () => {
    const initialState = {
      handleSubmit: sinon.spy(),
      signup: {
          requesting: false,
          successful: false,
          messages: [],
          errors: [],
          }
        }
    const mockStore = configureStore();
    let store, component;
    
    beforeEach( () => {
      store = mockStore(initialState);
      component = shallow(<Signup/>, { context: {store} }).dive().dive().dive().dive();

    })
    it('should render Signing up message', () => {
      expect(component.find('div.signup').length).toBe(1);
      expect(component.find('form').length).toBe(1);
      expect(component.find('.widget-form').length).toBe(1); 
    })
  })
})
