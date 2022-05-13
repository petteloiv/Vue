### life cycle hook 



#### 인스턴스 instance

-  생성(create) 
- 부착(mount)
- 업데이트(update)
- 없어짐(destroy)
- 위의 네 가지 과정을 거친다. 



#### 라이프사이클

- vue 인스턴스나 컴포넌트가 생성될 때, 미리 사전에 정의된 몇 단계의 과정 거치는 것
- vue 인스턴스 생성된 후 우리 눈에 보여지고, 사라지기까지의 단계

![1](life cycle hook.assets/1.png)



#### Life Cycle API

|               |                                                              |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | - 가장 먼저 실행<br />- Vue 인스턴스가 초기화 된 직후에 발생<br />- 컴포넌트가 DOM에 추가되기 전이라서 this.$el에 접근 불가<br />- data, methods 에도 접근 불가 |
| created       | - data 반응형으로 추적 가능!<br />- computed, methods, watch 등 활성화되어 접근 가능하지만<br />- DOM에는 추가되지 않은 상태<br />- data 직접 접근 가능 ; 외부 값으로 data 세팅, 이벤트 리스너 선언! |
| beforeMount   | - DOM에 부착하기 직전에 호출<br />- 가상 DOM 생성, 실제 DOM에는 부착 전! |
| mounted       | - 가상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행<br />- this.$el, data, computed, methods, watch 등 모든 요소 접근 가능<br />- 부모 컴포넌트의 mounted 훅은 자식 컴포넌트의 mounted 훅 이후에 발생! |
| beforeUpdate  | - data 값이 변하서 DOM에 변화 적용해야할 때가 있다 ..<br />- 변화 직전에 호출된다! 재렌더링 전에 호출된다. |
| updated       | - 실제 DOM 변경된 이후에 호출되는 updated 훅<br />- 변경된 data가 DOM에도 적용된 상태<br />- 변경된 값들을 DOM을 이용해 접근하고 싶다면 updated훅이 적절!<br />- 여기서 data 변경하면 무한 루프 일으킬 수 있다 (데이터 직접 변경 금지)<br />- this.$nextTick 이용해서 모든 화면 업데이트 된 이후 상태 보ㅗ장 ,, |
| beforeDestroy | - 인스턴스 해체되기 직전<br />- 이벤트리스너 해제 등 인스턴스가 사라지기 전에 해야할 일들 처리 |
| destroyed     | - 인스턴스 해체 직후에 호출<br />- 인스턴스 속성 접근 불가, 하위 vue 인스턴스 삭제 |



- 가장 많이 사용되는 것 : created, mounted