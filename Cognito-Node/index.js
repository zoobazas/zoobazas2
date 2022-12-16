// ---------------------------------------------------------------
//	get_token.js
//	TCS andre.chow  2022 11 17
// ---------------------------------------------------------------
const HttpsClient = require('./HttpsClient');
const dotenv = require('dotenv')

dotenv.config()
const hostName = `${process.env.HOSTNAME}`
const path = `${process.env.PATH}`
// Set request params
const postDate = `${process.env.DATA}`
// No body 
HttpsClient.get({
    host: hostName,
    path: '/',
}).then(data => {
    console.log(data);
});

// Have body
HttpsClient.post({
    host: hostName,
    path: '/dev/item-point-ref',
    //use text/plain
    headers: {'content-type': 'text/plain',
    //Use id token
    Authorization:'eyJraWQiOiI1cGhRUUUyVlg3M0hQWmpBbmFzTlZud2hCYU4xK1Y2MTlMaVBaYldPRFFzPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiNzlhOWI2OTMtYTc2OS00OGM0LWIxMzUtNzMxZjRmNjBmNjBhIiwic3ViIjoiNTZjMDA5NzQtYzU5My00ZDQ3LWJjMTEtYmZhZWZlMzFlZDk5IiwiYXVkIjoiNDZpbDV0bW1pYzltc2x1bzVmajM1OGRvNjIiLCJldmVudF9pZCI6Ijc5NDhlNWI4LWMxMWItNGE4Yi05ZGEwLTViMGI5NTJjZWZhMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjY4NjU2MTI5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfMmx2T0V2UHg3IiwiY29nbml0bzp1c2VybmFtZSI6ImRldiIsImV4cCI6MTY2ODc0MjUyOSwiaWF0IjoxNjY4NjU2MTI5LCJqdGkiOiI4MDQ4ZTZjYy02NGNhLTRmYzEtYTBhOC00MjRjNDZjMDg1NjYifQ.J6d4ZGaUPf6S2Cv3VXU5RQpHdSpRVi6Mg3tqZg4f8gW5o6nYQzAYKMi54OHZ59DKtYfq6PkN4HGuzt5XbyrCM4z01hfxm4wRqLWqEynPuSGIAF8mvSHGtee7JEbEbaqYJuhH7m-SO4bIqywBfL0ZhoL3hoKhI4A4M9bi9NJKxzHYCevBojMa0hEUikZt-1rQxSWRW5p579mAkfHTzEVCMM2WCyDwuPZ5Muc44mAWWv1K1K2hLXKgz2x2gmJa8f8yrjB7fF_NHvCCRbjyuSJhj87FT63pTi0Y8T63X6sG0jCthJGfHPwhne8B0B2285fAzjsqPZgoYxM0vCjCtX-ouQ'    
    },
    body: postDate
}).then(data => {
    console.log(data);
});
