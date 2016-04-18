import 'es6-promise';
import 'isomorphic-fetch';


export function API_CALL(url) {
  return fetch(url).then((response) => {
    return response.json().then(json => ({json, response}))
  }).then(function({json, response}) {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });

}
