# zichainTestTask

## Running the app

```bash
# install packages
$ npm i

# run eslinter
$ npm run eslint

# run apitests
$ npm run apitests

# run application
$ npm start

follow http://0.0.0.0:3000/link/add post request with req.body.usersLink 
to add long link and get short one

follow http://0.0.0.0:3000/* to be moved to long link
```
## Examples 

```bash
ed@ed-Extensa-2540:~$ curl -v -X POST http://0.0.0.0:3000/link/add/ -d 'usersLink=https://google.com'
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 0.0.0.0...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 3000 (#0)
> POST /link/add/ HTTP/1.1
> Host: 0.0.0.0:3000
> User-Agent: curl/7.58.0
> Accept: */*
> Content-Length: 28
> Content-Type: application/x-www-form-urlencoded
> 
* upload completely sent off: 28 out of 28 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 40
< ETag: W/"28-X/qKmoA514kT4gTtb2bCEuaQWxI"
< Date: Fri, 23 Aug 2019 08:19:53 GMT
< Connection: keep-alive
< 
* Connection #0 to host 0.0.0.0 left intact
{"link":"http://0.0.0.0:3000/z6Ak11T1u"}

ed@ed-Extensa-2540:~$ curl -v -X GET http://0.0.0.0:3000/z6Ak11T1u
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying 0.0.0.0...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 3000 (#0)
> GET /z6Ak11T1u HTTP/1.1
> Host: 0.0.0.0:3000
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 302 Found
< X-Powered-By: Express
< Location: https://google.com
< Vary: Accept
< Content-Type: text/plain; charset=utf-8
< Content-Length: 40
< Date: Fri, 23 Aug 2019 08:20:33 GMT
< Connection: keep-alive
< 
* Connection #0 to host 0.0.0.0 left intact
Found. Redirecting to https://google.com

```

