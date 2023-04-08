# wanted-pre-onboarding-frontend 사전과제

<br>
<br>
<br>

## 배포한 사이트 링크

링크: https://wanted-pre-onboarding-fr-39654.web.app/

해당 링크로 접속하면 볼 수 있습니다.

<br>
<br>
<br>



## 프로젝트 실행 방법
1. git clone을 통해 해당 저장소를 clone합니다.
```$ git clone https://github.com/ZetBe/wanted-pre-onboarding-frontend.git```

2. vsCode로 좌측 위에 File -> Open Folder -> clone한 저장소 폴더 선택합니다.

3. 해당 폴더로 이동하면 좌측 위에 Terminal -> New Terminal 을 클릭하여 터미널을 엽니다.

4. 터미널에서 해당 코드를 입력해서 먼저 설치합니다.
```npm install```

5. 마지막으로 해당 코드를 입력해서 실행합니다.
```npm start```

(깃에서 바로 `npm install`, `npm start`를 입력해도 됩니다.)

<br>
<br>
<br>

## 데모 영상
회원 가입


https://user-images.githubusercontent.com/90635746/230720348-2c183bd8-f455-4d44-bca8-b079e97517fe.mp4

<br>
<br>
<br>
<br>
<br>
<br>

로그인



https://user-images.githubusercontent.com/90635746/230720339-83bf4cf6-b0c4-4c20-8af7-c0cb6114b702.mp4

<br>
<br>
<br>
<br>
<br>
<br>

Todo 작성, 수정(수정 중 취소), 삭제


https://user-images.githubusercontent.com/90635746/230720321-eb9b1252-4e9e-4367-b277-3508e8628742.mp4




## 사이트 실행 과정

### 회원가입
(로그인 한 기록이 있다면 `/todo`로 이동합니다.)


1. 새 이메일과 새 비밀번호를 적습니다.
<img width="746" alt="image" src="https://user-images.githubusercontent.com/90635746/230720476-92d592da-f05a-4577-a860-beb005bdf8de.png">
2. 만약 이메일에 '@'를 넣고 비밀번호가 8글자를 넘어가면 해당 사진처럼 회원가입 버튼이 활성화 되어 회원가입이 가능합니다.
<img width="710" alt="image" src="https://user-images.githubusercontent.com/90635746/230720494-6dc8e5ae-b466-469a-b914-c5db43c607d1.png">
3. 회원가입에 성공하면 바로 signin페이지로 이동합니다.
<img width="689" alt="image" src="https://user-images.githubusercontent.com/90635746/230720768-1e7184e1-ef74-402c-aa13-fca1cd3c9e66.png">

3-1. 하지만 회원가입에 문제가 있다면 alert창으로 해당 사실을 알립니다.

<img width="334" alt="image" src="https://user-images.githubusercontent.com/90635746/230720569-37a44a90-8400-4716-bd25-55689241ca14.png">

### 로그인
(로그인 한 기록이 있다면 `/todo`로 이동합니다.)

1. 비밀번호와 동일하게 이메일에 '@'를 넣고 비밀번호의 글자수가 8자를 넘으면 로그인 버튼이 활성화되어 로그인이 가능합니다.
<img width="600" alt="image" src="https://user-images.githubusercontent.com/90635746/230720768-1e7184e1-ef74-402c-aa13-fca1cd3c9e66.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/90635746/230720864-03932d4e-8f28-4af9-ba57-fc888bbb08c1.png">

2. 로그인에 성공하면 JWT 토큰이 부여되고, todo 페이지로 이동합니다.
<img width="635" alt="image" src="https://user-images.githubusercontent.com/90635746/230720988-c3f0aeb3-0f56-42ab-a0a4-80acb0fee3e5.png">


### Todo 작성
(로그인 한 기록이 없다면 `/signin`로 이동합니다.)


todo페이지에 쓰고 싶은 것이 있다면 빨간색 화살표로 가리킨 부분에 입력하고 추가 버튼을 누릅니다.
<img width="635" alt="image" src="https://user-images.githubusercontent.com/90635746/230721035-17565677-f9c5-4cd4-b1a3-29d368e624fb.png">

입력하고 버튼을 누르면 이렇게 나옵니다.
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/90635746/230721099-7964633c-61a8-4c57-b0a2-f7a0008fcbfa.png">

### Todo 수정

수정하고 싶은 것이 있다면 해당 부분에 수정 버튼을 눌러 수정하고 싶은 부분을 수정하고 제출 버튼을 누릅니다. 

만약 취소를 누르면 원래 있던 글 그대로 나옵니다.
<img width="704" alt="image" src="https://user-images.githubusercontent.com/90635746/230721220-47b7fdbc-16bb-44c7-9eca-d7dc890ef3b7.png">


todo리스트에 체크하고 해당 부분을 수정하면 체크한 부분도 수정됩니다.
<img width="659" alt="image" src="https://user-images.githubusercontent.com/90635746/230721183-44402eb8-d911-499d-ab75-4b94ebc48d68.png">


### Todo 삭제

삭제하고 싶은 것이 있다면 해당 부분에 삭제 버튼을 누르면 해당 부분만 삭제되는 모습이 나옵니다.
<img width="704" alt="image" src="https://user-images.githubusercontent.com/90635746/230721099-7964633c-61a8-4c57-b0a2-f7a0008fcbfa.png">
<img width="748" alt="image" src="https://user-images.githubusercontent.com/90635746/230721313-1b5ae606-2499-4c44-badb-4c1ba62c4d09.png">

<br>
<br>
<br>



## 이 사이트에서 사용한 api

api링크: https://www.pre-onboarding-selection-task.shop/

<br>
<br>
<br>

## 이 사이트에서 사용한 라이브러리
- React: 기본적으로 사용한 라이브러리 입니다.
- React Router: `/signin`, `/signup`, `/todo`, `/`페이지를 만드는데 사용했습니다.
- Axios: axios로 `DELETE`요청을 했습니다.
