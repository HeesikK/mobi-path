스토리북이란?

React에서 Components의 중요성은 말하지 않아도 알고 있을 것입니다.
그러나 이러한 컴포넌트 때문에 오히려 유지보수가 어려워지는 상황이 있는데요!
바로 재사용되지 못하는 컴포넌트가 생긴다는 것입니다.

분명 재사용될거라 생각했던 컴포넌트들이 재사용되지 않으면서
많은 부채를 생성하고, 이러한 부채는 점점 쌓여 향후에는 내 프로젝트에
어떤 컴포넌트가 있었는지 조차 의심하게 될거에요...

이러한 컴포넌트들의 재사용성을 효율적으로 활용하고 부채를 만들지 않기 위해
탄생한 개발 방법이 바로 컴포넌트 주도 개발(CDD)입니다.

공용으로 사용되는 컴포넌트는 주로 디자이너에 의해 생성이 되는데요
아쉽게도 컴포넌트 양이 많으면 많아질수록 관리가 힘든 것은 당연한 것입니다.

따라서 생성된 컴포넌트를 디자이너와 개발자가 함께 볼 수 있도록하여
기존에 생성된 컴포넌트로 화면을 디자인 및 개발할 수 있도록 하는 UI 보관소가 필요했는데요!

그것이 바로 StoryBook입니다.

===================================================================

스토리북 사용하기

Storybook을 명확히 사용하기 위해서는 그 의미를 명확히 알고 있어야합니다.

"재사용될 수 있는 컴포넌트를 개발자와 디자이너가 확인할 수 있도록
인벤토리에 보관한다"

아래는 Storybook 사용시 자주 활용하는 옵션들 중 하나입니다.
모두 중요하지만 꼭 다 알아야할 필요는 없습니다.

특히 Play function은 알아두면 좋지만 굳이 UI 인벤토리 용도의 스토리북과는
거리가 조금 멀다고 할 수 있어요 :)

하지만 \* 표시되어있는 것은 모른다면 스토리북 활용이 어려우니 꼭 숙지해보도록 해요!

(1) \* init
https://storybook.js.org/docs/get-started/install

`npx storybook@latest init`
`npm run storybook`

(2) \* args
https://storybook.js.org/docs/writing-stories/args

`variant의 value에 따라 다양한 컴포넌트를 생성하기 위해 필수적인 요소`
`args를 통해 <Button> 컴포넌트를 활용하여 primary-button과 secondary-button 생성 가능`

(3) parameters
https://storybook.js.org/docs/writing-stories/parameters

`stroybook의 preview와 main에 차이에 대해서 명확히 알아보기`

.storybook/main.js:
Storybook의 구성을 정의하는 파일입니다.

.storybook/preview.js:
개발자가 이 파일에서 전역적으로 사용될 추가 설정을 정의할 수 있습니다.

(4) Play function
https://storybook.js.org/docs/writing-stories/play-function

보통 storybook을 단순히 ui 인벤토리로 삼지 않고 테스트 도구로 삼기 위해서도 사용합니다.
잘 나누어진 ui 인벤토리와 컴포넌트는 jest와 같은 test-code를 연동하여 테스트를 위해
사용할 수 있습니다.

(5) \* Actions
https://storybook.js.org/docs/essentials/actions

눌렸을 때의 action을 통해 컴포넌트의 변화를 일으킬 수 있어요
호버나 특정 행동에 따라 컴포넌트의 변화가 있다면 적용해야하는 옵션입니다.

(6) \* Controls
https://storybook.js.org/docs/essentials/controls

action과 달리 특정한 행위에따라 컴포넌트의 변화를 일으키는 것이 아닌
선택한 옵션에 따라 컴포넌트의 변화를 일으킬 수 있습니다.

예를 들면 선택된 상태인지, 선택되지 않은 상태인지 radio의 형태로 구분하여
단순히 클릭 몇번으로 모든 컴포넌트의 상태의 경우를 확인할 수 있어요
