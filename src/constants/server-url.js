/**
 * This module exports the ServerURL for the current environment based on the __ENV__ variables that becomes set with the webpack DefineTextPlugin.
 * @type {string}
 */

const DEV_URL = 'https://jsonplaceholder.typicode.com/posts';
const QA_URL = 'https://jsonplaceholder.typicode.com/posts';
const LIVE_URL = 'https://jsonplaceholder.typicode.com/posts';

const SERVER_URL = __LIVE__ ? LIVE_URL : (__QA__ ? QA_URL : DEV_URL);

export default SERVER_URL;
