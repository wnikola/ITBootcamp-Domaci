const SPACEX_API = 'https://api.spacexdata.com/v3';
const LAUNCHES_PAST = '/launches/past';
const LAUNCHES_UPCOMING = '/launches/upcoming';
const ROADSTER = '/roadster';
const INFO = '/info';

export function getPastLaunches() {
  return fetch(`${SPACEX_API}${LAUNCHES_PAST}`)
    .then(res => res.json());
}

export function getUpcomingLaunches() {
  return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`)
    .then(res => res.json());
}

export function getRoadsterInfo() {
  return fetch(`${SPACEX_API}${ROADSTER}`)
    .then(res => res.json());
}

export function getInfo() {
  return fetch(`${SPACEX_API}${INFO}`)
    .then(res => res.json());
}