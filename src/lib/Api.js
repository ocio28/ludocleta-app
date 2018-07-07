const stage = '/dev'
const ApiUrl = 'https://wthwk4ghue.execute-api.us-east-1.amazonaws.com'
let bearer = null

export function init(token) {
  if (token !== null) {
    bearer = 'Bearer ' + token
  }
}

export function register(user) {
  return send('/register', user)
}

export function sendCode(email) {
  return send('/code', {email})
}

export function login(data) {
  return send('/login', data)
}

export function games() {
  return send('/games/fetch')
}

export function getGame(id) {
  return send('/games/get', {id: id})
}

export function getUser() {
  return send('/user/get')
}

export function devices() {
  return send('/user/devices/fetch')
}

function send(path, body) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (bearer !== null) {
    headers['Authorization'] = bearer
  }
  return fetch(ApiUrl + stage + path, {
    method: 'POST',
    headers,
    body: body ? JSON.stringify(body) : {}
  }).then(response).then(success)
}

function response(response) {
  return response ? response.json() : Promise.reject('Error Interno')
}

function success(response) {
  return response.status === 'success' ? response.data : Promise.reject(response.data)
}
