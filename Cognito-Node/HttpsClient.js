// ---------------------------------------------------------------
//	get_token.js
//	TCS andre.chow  2022 11 17
// ---------------------------------------------------------------
const https = require('https');
// need body
const noBodyReqs = ['head','get','copy','purge','unlock'];
// no need body
const hasBodyReqs = ['post','put','patch','delete','options','link','unlink','lock','propfind','view'];
 
const HttpsClient = {};
 
noBodyReqs.concat(hasBodyReqs).forEach(method => {
    HttpsClient[method] = obj => {
        return new Promise(function (cb) {
            const options = {
                host: obj.host,
                port: 443,
                path: obj.path,
                method,
                headers: obj.headers ? obj.headers : {},
            };
            const req = https.request(options, res => {
                let chunks = Buffer.from([]);
                let chunksLength = chunks.length;
                res.on('data', chunk => {
                    chunks = Buffer.concat([chunks,chunk],chunksLength + chunk.length);
                    chunksLength = chunks.length;
                });
                res.on('end', () => {
                    cb(chunks.toString());
                });
            });
 
            req.on('error', e => {console.log(`request error: ${e}`);});
 
            if(hasBodyReqs.indexOf(method) !== -1) req.write(obj.body);
            req.end();
        });
    }
});
 
module.exports = HttpsClient;