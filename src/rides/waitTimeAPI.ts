import { Land } from './Land';
import { LandRoot } from './LandRoot';
const baseUrl = 'https://queue-times.com/parks';
const url = '${baseUrl}';

function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission.';
    default:
      return 'There was an error retrieving the wait timess. Please try again.';
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {
  return response.json(); //.then((data) => data.lands); // Change 'rootObject' to the actual key of the object you want
}

// eslint-disable-next-line
function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

function convertToLandModels(data: any): LandRoot {
  let lands: LandRoot = data.map(convertToLandModel);
  return lands;
}

function convertToLandModel(item: any): Land {
  return new Land(item);
}

const waitTimeAPI = {
  get(parkid: number) {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('X-Content-Type-Options:nosniff');

    return fetch(`https://queue-times.com/parks/6/queue_times.json`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        credentials: 'same-origin', //include, same-origin
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'X-Content-Type-Options': 'nosniff',
      },
    })
      .then(delay(600))
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToLandModels)
      .catch((error: TypeError) => {
        console.log('log client error ' + error);
        throw new Error(
          'There was an error retrieving the wait times. Please try again.'
        );
      });
  },
};

export { waitTimeAPI };
