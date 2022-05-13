## READ ME _ 영화추천프로그램



#### 프로젝트 생성

```bash
$vue create pjt10
```

- vuex, router add해주기! 
- install axios 



#### 컴포넌트 구조 맞춰서 router-link 설정, .vue 만들기

- views 폴더
  - HomeView, RandomView, WatchListView
- components 폴더 
  - MovieCard, WatchListForm, WatchListItem

---

- router > index.js에 routes 작성
  - url 인척 ... path 설정해주기



#### 난관 1. API로 데이터 받아오기 

```
AJAX 통신을 이용하여 다수의 영화 데이터를 수집합니다.
```

```
<문제점..>

Youtube API 썼던 것처럼 API_URL로 불러오려고했는데 데이터를 어디에 저장해야하지? 어떻게 저장해야하지????? 의 늪에 빠졌습니다.. + axios 써야하는데 어떻게 쓰더라 ..? (json파일을 냅다 만들어서 불러올 뻔 했습니다)
```

- 해결 방법
  - store/index.js에 state(데이터) 조작하게 함수를 만들었습니다.
  - 1. state에 movies 라는 이름으로 빈 배열 만들기
    2. mutation으로 API로 받아온 데이터 state.movies에 넣기 
    3. actions 에서 axios로 영화 데이터 받아오기! / commit으로 mutation 호출
    4. HomeView에서 beforeCreate로 actions에 있는 함수 호출하기!

---

- 어려웠던 점 

```
데이터를 받아오는 시점을 잘 모르겠어서
처음에는 영화 받아오기 버튼을 만들어서 v-on으로 method 호출했습니다!
하지만 ,,, 요구했던것은 바로 영화 목록이 좌라랄 뜨는 것이었기때문에 
beforeCreate를 사용해 무엇보다도 먼저 데이터를 받아와서 state에 저장하도록 만들었습니다! 
```

- 내가 잘 몰랐던 것들! 

```
mapState 사용
- computed에 ...mapState로 state 불러오기!
```



#### 난관 1-2. MovieCard 이미지 링크

```vue
1. 원래 쓰려던 이미지 링크 
<img src="https://image.tmdb.org/t/p/original/{{movie.poster_path}}" class="card-img-top" alt="movieposter">

2. 해결한 방법
<img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="movieposter">
```

- 해결 코드
  - vue에서 src는 v-bind 사용해서 써야한다고 ,, 오류가 저에게 그랬습니다..



#### 난관2. 랜덤뷰 .. 랜덤으로 영화 고르기 

```
<문제점>

RandomView에서 바로 lodash 사용해 랜덤 돌리려고 했으나
_.sample(배열) <- 이 속에 들어갈 배열을 만들지 못했습니다 ..
$state.movies로 불러오려고도 해봤지만 이 방법이 아닌지 자꾸 $state는 사용할 수 없다고 그랬습니다 ....
```

- 해결 방법
  - 얘도 똑같이 index.js에 랜덤으로 뽑아서 객체 저장할 selectedMovie를 만들어서 사용했습니다.
  - 1. state에 null값을 기본으로 가지고 있는 selectedMovie 만들기
    2. mutations에 state.movies에서 랜덤으로 뽑아 selectedMovie에 저장하게 함수 만들기
    3. actions에 mutation 호출 함수 만들기
    4. RandomView에서 클릭하면 actions에 있는 함수를 부르게 만들었습니다,, 



#### 난관 2-2. selectedMovie 보여주기

```
<문제점>

state의 selectedMovie를 불러오는 것까지는 성공했으나 
시작할 때 title, poster_path를 찾을 수 없다고 오류가 났습니다.. 
```

- 해결 방법
  - pick을 눌러서 고르는 함수를 호출하기 전의 selectedMovie 기본 값은 null이었기 때문에 객체가 없어 키 값도 찾을 수 없었습닏 ㅏ ,,
  - v-if / v-else 를 사용해 selectedMovie !== null 일 때와 아닐 때! 다르게 보여주도록 처리했습니다. 



#### 난관 3. 그래서 얘는 어디에 넣어야하지요 (watchlist)

```
<문제점> 

WatchListForm에서 input에 입력받은 값의 저장 ,, 얘를 어떻게 보여줘야하는지 
너무 헷갈렸습니다.
```

- 해결 방법 

  - 1. Form 에서 input 받은 값을 store.state.watchedMovies 배열에 push 하는 함수 작성 (mutations, actions 도 작성!)

    - 저장할 때 title (v-model 처리) 그리고 유일값으로 사용할 date 같이 보내준다

    2. WatchListView에서 mapState로 받아온 watchedMovies를 v-for로 돌려서 하나씩 watch-list-item으로 보내준다..
    3. WatchListItem에서 props 받은 영화 객체의 title을 보여준다! 