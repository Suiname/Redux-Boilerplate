import 'isomorphic-fetch';


const defaultPost = {
  url: '',
  body: {},
  error(err) {
    console.error(err)
  },
  success(json) {

  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function PostFetch(opts) {
  const options = Object.assign({}, defaultPost, opts);

  fetch(options.url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options.body)
  })
  .then(checkStatus)
  .then((response) => {
    return response.json().then(json => ({response, json}))
  })
  .then(({response, json}) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    options.success(json)
  })
  .catch((err) => {
    options.error(err)
  })
}
