export const logIn = (loginData) => {
  return {
    type: 'LOG_IN',
    payload: loginData
  }
}

export const logOut = () => {

  const loginData = {
    login: null,
    password: null,
  }

  return {
    type: 'LOG_IN',
    payload: loginData
  }
}