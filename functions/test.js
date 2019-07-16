const fetch = require('node-fetch');

const requestMeUrl = 'https://kapi.kakao.com/v2/user/me';
const kakaoAccessToken = 'xnISYVWvAaeQych8XKhmPm-NRrQjJNO3iMgIkworDR8AAAFr-FDcWw';

fetch(requestMeUrl,{
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + kakaoAccessToken}
}).then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err));

// fetch('https://api.github.com/users/github')
// .then(res => 
// .then(json => console.log(json));