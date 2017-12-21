import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import signupRequest from '../actions'
import {  
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../constants'

const mockStore = configureMockStore();

// Going to write test cases for Signup Action Creators
describe('Signup Action Creators', () => {
  it('should dispatch action onSignup', () => {
    // Initialize mockstore with empty state
    const store = mockStore({});
    const signupDetails = {email: "test@test.com", password: "password"};
    // dispatch the signup action
    store.dispatch(signupRequest(signupDetails));
    const expectedActions = signupDetails;
    expectedActions['type'] = SIGNUP_REQUESTING ;
    // Test if your store dispatched the expected actions
    expect(store.getActions()).toEqual([expectedActions]);
  });
});
