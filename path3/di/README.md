React에서의 DI(의존성 주입)을/를 고민해본다면 조금은 어렵게 다가올 수도 있는데요!?

저희 조금은 쉽게 생각해볼까요?

의존성 주입이란 것은 예를 들면

a라는 모듈을 직접적으로 b에 import하여 사용한다면
a에 변형이 일어났을 때 b에서도 당연히 변형이 생길 수 있어요.

그리고 이러한 a라는 모듈은 b뿐만 아니라 c,d,e,f,g...
다양한 곳에서 사용될 수 있습니다.

즉 a가 수정됨에 따라 b,c,d,e,f,g를 수정해야할 수도 있다는 것이죠
그렇다면 이렇게 해보는 것은 어떨까요?

a라는 모듈의 사용처의 공통점을 찾아내서 묶었더니 아래와 같은 결과가 나왔습니다.

bcd (비슷함)
efg (비슷함)

이때 a를 활용하여 A, B라고 하는 객체를 만들어

a -> A -> bcd
-> B -> efg

에 사용하는 것이죠 이때 bcd에 변화가 생길 때는 A만 수정하면 되고
efg에 변화가 생기면 B만 수정하면 되는 것이에요!

이러한 것을 a와 bcd,efg사이에 의존성(A, B)를 주입하였다고 합니다.

즉 bcd와 a의 관계 사이에 A라는 의존성이 생기며 직접적인 관계를
느슨하게 만들어 본 것입니다.

리엑트에서의 의존성 주입은 사실 대부분은
이미 여러분들이 하고 있는 것들일 수 있습니다.

예를 든다면 관심사 분리를 위한 모듈화
재사용을 위한 커스텀 훅함수 생성과 전역 상태 관리, 컴포넌트 분리 등

이미 여러분들이 적용중인 것들 하나하나가 이런 DI를 위해 사용되고 있었다는 사실!
알고 계셨나요!?

DI에서 중요한 것은 아래와 같은 사항을 명확히 기억하는 것이 중요합니다.

공통된 부분을 묶어 관리할 포인트를 줄이는 것

대표적으로 관심사 분리는 의존성 주입의 가장 대표적인 방법 중 한 사례입니다.