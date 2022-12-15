# JavaScript

## 콘솔에 출력하기
ex) Hello world! 출력    
```javascript
// main.js
console.log("Hello World!);
```

## script async와 defer의 차이점
HTML에서 JavaScript를 포함시키는 방법은 여러가지가 있다.   

**1. head 안에 스크립트를 포함시켰을 경우**   
```html
<head>
...
<script src="main.js"></script>
</head>
```
![script_head](https://user-images.githubusercontent.com/89180168/207649332-1fbf264a-a47f-4622-96e1-a7407d79d283.JPG)   
브라우저가 HTML을 한 줄씩 parsing하다가 script 태그가 있으면 HTML을 parsing하는 것을 잠시 멈추고 필요한 JavaScript 파일을 서버에서 받아오고 실행을 한 후에 실행이 끝나면 다시 이어서 HTML을 parsing한다.   
   
- 단점: 다운 받으려고하는 JavaScript 파일이 매우 크면 사용자가 웹사이트를 보는 데까지 많은 시간이 소요된다.
   
**2. body 안에 스크립트를 포함시켰을 경우**
```html
<body>
...
<script src="main.js"></script>
</body>
```
![script_body](https://user-images.githubusercontent.com/89180168/207657730-65060fc5-ddee-49c1-9b9a-f9af87207029.JPG)   
브라우저가 HTML을 parsing해서 페이지가 준비된 다음 스크립트를 서버에서 받아오고 실행하게 된다.   
- 장점: 페이지가 자바스크립트 파일을 받기 전에도 이미 준비가 되어 사용자가 HTML 콘텐츠를 빨리 볼 수 있다.   
- 단점: 만약 웹사이트가 자바스크립트에 의존적이라면, 즉 사용자가 의미있는 콘텐츠를 보기 위해서 자바스크립트를 이용하여 서버에서 데이터를 받아와야하는 웹사이트는 자바스크립트 파일을 fetching하고 executing하는 시간을 기다려야 정상적인 페이지를 볼 수 있다.   

**3. head 안에 async 속성을 추가하여 스크립트를 포함시켰을 경우**
```html
<head>
...
<script async src="main.js"></script>
</head>
```
![script_body](https://user-images.githubusercontent.com/89180168/207657800-79c10532-7cde-4c44-b3c5-dbcedd2b625c.JPG)   
브라우저가 HTML을 parsing하다가 async 속성이 있는 스크립트 파일을 만나면 이 파일을 다운로드 받자고 명령만 하고 계속 parsing하다가 파일 다운이 완료되면 그때 parsing하는 것을 멈추고 자바스크립트가 실행이 되며 실행을 하면 다시 나머지 HTML을 parsing한다.   
- 장점: fetching하는 것이 병렬적으로 일어나기 때문에 자바스크립트 파일을 서버에서 불러오는 시간을 절약할 수 있다.
- 단점: 자바스크립트 파일이 HTML이 parsing되기도 전에 실행이 되기 때문에 만약 Queryselector를 이용하여 DOM요소를 조작한다고 하면 조작하려고하는 시점에 HTML에서 우리가 원하는 요소가 아직 정의되지 않았을 수도 있다. 또한 HTML을 parsing하는 동안 언제든지 자바스크립트를 실행하기 위해 멈출 수 있기 때문에 사용자가 페이지를 보는 데 여전히 시간이 걸릴 수 있다.   

**4. head 안에 defer 속성을 추가하여 스크립트를 포함시켰을 경우**
```html
<head>
...
<script defer src="main.js"></script>
</head>
```
![script_body](https://user-images.githubusercontent.com/89180168/207657838-7a05c427-e520-48b7-894e-b370969cf904.JPG)   
브라우저가 HTML을 parsing하다가 defer 속성이 있는 스크립트 파일을 만나면 이 파일을 다운로드 받자고 명령만 하고 나머지 HTML을 끝까지 parsing한 후에 자바스크립트가 실행된다.   
- 장점: HTML parsing을 먼저 해서 사용자에게 페이지를 보여준 다음 다운로드된 자바스크립트 파일을 바로 이어서 실행할 수 있다.   

> **async와 defer의 차이점**   
> async 속성을 사용하면, 정의된 스크립트 순서에는 상관없이 자바스크립트가 실행되어 만약 순서에 의존적이라면 문제가 생길 수 있지만,   
> defer 속성을 사용하면, 정의된 스크립트 순서에 따라 자바스크립트가 실행되어 문제가 발생하지 않는다.   

-> defer 속성이 가장 효율적이고 안전하다.
