import expect from 'expect';
import signup from '../reducer'
import {  
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../constants'

describe('Signup reducer test cases', () => {
  const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
  };

  it('should return the initial state', () => {
    expect(
      signup(undefined, "UNDEFINED_STATE")
    ).toEqual(initialState);
  });

  it('should return the SIGNUP_REQUESTING state', () => {
    const expectedState = {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      };

    expect(
      signup(undefined, {
        type: SIGNUP_REQUESTING,
      })
    ).toEqual(expectedState);
  });

  it('should return the SIGNUP_SUCCESS state', () => {
    const expectedState = {
        errors: [],
        messages: [{
          body: 'Successfully created account for test@test.com',
          time: new Date(),
        }],
        requesting: false,
        successful: true,
      };

    expect(
      signup(undefined, {
        email: 'test@test.com',
        type: SIGNUP_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it('should return the SIGNUP_ERROR state', () => {

    const currentState = {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      };

    const expectedState = {
        errors: currentState.errors.concat([{
          body: 'some api error',
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };

    expect(
      signup(currentState, {
        email: 'test@test.com',
        type: SIGNUP_ERROR,
        message: 'some api error'
      })
    ).toEqual(expectedState);
  });
});
