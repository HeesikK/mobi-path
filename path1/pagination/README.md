## 📑 페이지네이션 구현하기

페이지네이션이란 컨텐츠를 여러 페이지로 나누는 기술이다. 웹 페이지에서 일반적으로 볼 수 있는 이전, 다음 버튼이나 숫자로 된 페이지 번호를 클릭하여 다른 페이지로 이동할 수 있는 기능을 의미한다.

그러면 지금부터 라이브러리 없이 페이지네이션을 구현해보자😁

## 📌 페이지네이션 조건

페이지네이션 구현은 아래 조건에 맞게 구현하였다.

> ✔️ 하나의 페이지네이션 당 10개의 목록이 보여야한다.
>
> ✔️ 사용자에게 5개 단위의 페이지네이션으로 보여야한다.
>
> ✔️ **반드시 재사용이 가능해야 한다.**

마지막 조건에 **"반드시 재사용이 가능해야 한다."** 라고 적어뒀는데 이는 조건이 변화하더라도 재사용이 가능해야 한다는 의미이다.

즉, 요구 조건(페이지네이션 당 목록의 갯수, 페이지네이션 단위, 데이터의 갯수)에 상관없이 재사용할 수 있다는 것이다.

## ✅ 데이터 받아오기

실제 프로젝트를 진행할 때에는 서버에서 **axios 요청**으로 데이터를 받아오겠지만, 이번에는 간단하게 **Array.fill** 메서드를 사용해서 임의의 랜덤 데이터를 만들었다.

아래 데이터는 이름, 날짜, 생년 월일, 휴대폰 번호로 이루어진 유저 데이터이다. 데이터의 갯수는 200개로 생성하였다.

```javascript
export const UserList = () => {
  // 이름 생성
  const generateName = () => {
    const lastName = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안", "송", "전", "홍"];
    const firstName = ["민준", "서윤", "도윤", "서연", "시우", "지우", "지호", "하윤", "지후", "서현", "준서", "하은", "건우", "민서", "우진", "지유", "선우", "윤서", "서진", "채원"];
    const fullName = lastName[Math.floor(Math.random() * firstName.length)] + firstName[Math.floor(Math.random() * lastName.length)];
    return fullName;
  };

  // 날짜 생성
  const generateRandomDate = (from, to) => {
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  };

  // 생일 생성
  const generateBirthday = () => {
    const date = generateRandomDate(new Date(2023, 0, 1), new Date());
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // 휴대폰 번호
  const generatePhoneNumber = () => {
    return `010-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}`;
  };

  const maskingPhoneNumber = () => {
    const split = generatePhoneNumber().split("-");

    split[1] = "*".repeat(split[1].length);
    return split.join("-");
  };

  return Array(200)
    .fill()
    .map((_, idx) => ({
      id: idx + 1,
      name: generateName(),
      birthday: generateBirthday(),
      number: maskingPhoneNumber(),
    }));
};
```

## ✅ 유저 목록 만들기

유저 목록은 앞서 만든 유저 데이터를 Array.map 메서드를 통해 구현하였다.

```javascript
import styled from "styled-components";

const User = ({ userList }) => {
  return (
    <>
      {userList.map((el) => (
        <UserTable>
          <div>{el.id}</div>
          <div>{el.name}</div>
          <div>{el.birthday}</div>
          <div>{el.number}</div>
        </UserTable>
      ))}
    </>
  );
};

export default User;

const UserTable = styled.div`
  display: flex;
  > div {
    margin: 0px 8px;
    padding: 8px;
  }
`;
```

## ✅ 페이지네이션 구현하기

앞서서도 말했듯이 페이지네이션 구현에 가장 중요한 조건은 **재사용**이므로, 코드의 재사용을 위해 **Pagination 컴포넌트**는 분리하여 작성하였다.

그렇다면 **Pagination 컴포넌트**에는 **Props**로 어떤 것을 넘겨줘야 할까?

### ☑️ Props 전달하기

우선 userList의 상태를 변경할 수 있는 **setUserList** 그리고 원본 유저 목록인 **user**, 요구 조건에 있는 사용자에게 보여지는 페이지네이션 단위인 **limit** 마지막으로 한 페이지에 들어있는 데이터의 갯수인 **pagePerUser**을 Props로 전달하였다.

Pagination 컴포넌트의 전체 코드는 아래와 같다. 각 태그(div, button)는 styled-components로 작성하였다.

### ☑️ Pagination 전체 소스코드

```javascript
import styled from "styled-components";
import { useEffect, useState } from "react";

const Pagination = ({ user, setUserList, limit, pagePerUser }) => {
  // 총 페이지 수
  const totalPage = Math.ceil(user.length / pagePerUser);

  // 랜더링되는 페이지 그룹
  const [pageGroup, setPageGroup] = useState(1);

  const totalPageArray = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const paginationArray = Array.from({ length: Math.ceil(totalPage / limit) }, (_, idx) => totalPageArray.slice(idx * limit, idx * limit + limit));

  // "<<" 버튼 클릭
  const onFirstPage = () => {
    setPageGroup(1);
  };

  // "<" 버튼 클릭
  const onPrevPage = () => {
    setPageGroup((prev) => prev - 1);
  };

  // ">" 버튼 클릭
  const onNextPage = () => {
    setPageGroup((prev) => prev + 1);
  };

  // ">>" 버튼 클릭
  const onLastPage = () => {
    setPageGroup(Math.ceil(totalPage / limit));
  };

  // page 클릭
  const onMoveCurrentPage = (e) => {
    setUserList(user.slice(pagePerUser * (e.target.textContent - 1), pagePerUser * e.target.textContent));
  };

  /*
    "<<", "<", ">", ">>" 버튼을 클릭하면 해당 pageGroup의 첫 번째 페이지(인덱스)로 이동
    useEffect 의존성 배열에 pageGroup를 추가하여 pageGroup이 바뀔때만 userList를 변경
  */
  useEffect(() => {
    setUserList(user.slice(pagePerUser * (paginationArray[pageGroup - 1][0] - 1), pagePerUser * paginationArray[pageGroup - 1][0]));
  }, [pageGroup]);

  // Wrapper = styled.div, PageButton = styled.button
  return (
    <Wrapper>
      <PageButton onClick={onFirstPage} disabled={pageGroup === 1}>
        {"<<"}
      </PageButton>
      <PageButton onClick={onPrevPage} disabled={pageGroup === 1}>
        {"<"}
      </PageButton>
      {paginationArray[pageGroup - 1].map((page) => (
        <PageButton onClick={onMoveCurrentPage}>{page}</PageButton>
      ))}
      <PageButton onClick={onNextPage} disabled={pageGroup === Math.ceil(totalPage / limit)}>
        {">"}
      </PageButton>
      <PageButton onClick={onLastPage} disabled={pageGroup === Math.ceil(totalPage / limit)}>
        {">>"}
      </PageButton>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
`;

const PageButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    border-radius: 50%;
    background: #e3e3e3;
  }
`;
```

### ☑️ 페이지 그룹 나누기

랜더링 되는 페이지 그룹(pageGroup)의 초기값은 1이다. 전달받은 limit가 5이므로 페이지 그룹은 아래와 같은 모습일 것을 예상 할 수 있다.
![](https://velog.velcdn.com/images/psik_2/post/0d3f8e6d-2e37-4302-acf1-97d592ba2ead/image.png)

**totalPage** 값과 **Array.from 메서드**를 사용하여 **totalPageArray** 값을 구할 수 있다.
**totalPageArray** 값은 총 페이지가 20 페이지이므로 **[1, 2, 3, 4, . . . 19, 20]** 형태인 배열인 것을 유추할 수 있다.

**paginationArray** 값은 위에서 구한 totalPageArray 배열을 전달 받은 limit 값에 따라 나눈 것을 알 수 있다. 총 20 페이지이고 limit 값이 5이므로 위에서 구한 totalPageArray 배열을 아래와 같이 분리되는 것을 확인할 수 있다.

![](https://velog.velcdn.com/images/psik_2/post/1a387033-f54b-43f1-af81-dd3b2ce09513/image.png)

**paginationArray** 값을 콘솔에 찍어보면 위와 같은 형태로 나오는 것을 쉽게 확인할 수 있다.
![](https://velog.velcdn.com/images/psik_2/post/2fdb055a-0f64-41d2-bb0d-e426b68751a3/image.png)

### ☑️ 클릭 이벤트

페이지 버튼을 클릭하면 해당 페이지에 매치되는 데이터를 받아볼 수 있다. 이때 **Array.slice** 메서드를 이용해 **userList**의 상태를 변경할 수 있다.

**<<**, **<**, **>**, **>>** 버튼을 클릭하면 **setPageGroup**를 통해 페이지 그룹값을 변경할 수 있다. 버튼을 클릭하여 상태가 변경되면 새로운 페이지 그룹이 화면에 랜더링 되는 것이다.

이때 **useEffect**를 사용하여 의존성 배열에 있는 **pageGroup**의 값이 변경되었을 때만 **userList**의 배열을 변경시키는 것이다. 이 부분은 중요하니 다시 한 번 짚고 넘어가자.

```javascript
useEffect(() => {
  setUserList(user.slice(pagePerUser * (paginationArray[pageGroup - 1][0] - 1), pagePerUser * paginationArray[pageGroup - 1][0]));
}, [pageGroup]);
```

즉 **<<**, **<**, **>**, **>>** 버튼을 클릭하면 **setpageGroup**에 의해 **pageGroup**이 변경되고, **useEffect**에 의존성 배열에 있는 **pageGroup**이 바꼈으므로 **setUserList**를 통해 **userList** 배열을 갱신시킨 것이다.

### ☑️ 페이지네이션 UI 그리기

페이지네이션 UI를 그리는 부분은 전체 소스코드의 return 아랫 부분을 통해 확인할 수 있다. 위에서 나눴던 페이지 그룹은 **Array.map** 메서드를 통해서 구현하였고 **onClick**을 이용해 페이지 이동을 구현하였다.

```javascript
return (
  <Wrapper>
    <PageButton onClick={onFirstPage} disabled={pageGroup === 1}>
      {"<<"}
    </PageButton>
    <PageButton onClick={onPrevPage} disabled={pageGroup === 1}>
      {"<"}
    </PageButton>
    {paginationArray[pageGroup - 1].map((page) => (
      <PageButton onClick={onMoveCurrentPage}>{page}</PageButton>
    ))}
    <PageButton onClick={onNextPage} disabled={pageGroup === Math.ceil(totalPage / limit)}>
      {">"}
    </PageButton>
    <PageButton onClick={onLastPage} disabled={pageGroup === Math.ceil(totalPage / limit)}>
      {">>"}
    </PageButton>
  </Wrapper>
);
```

## ✅ 유저 목록 & 페이지네이션 합치기

앞에서 만든 User 컴포넌트와 Pagination 컴포넌트를 합치면 아래와 같다. 이때 각 컴포넌트에는 앞서 말한 Props를 전달한 것을 확인할 수 있다.

```javascript
import { useState } from "react";
import { UserList } from "../__mock__/user";
import User from "../components/userTable";
import Pagination from "../components/pagination";
import styled from "styled-components";

const HomePage = () => {
  const user = UserList();
  const limit = 5;
  const pagePerUser = 10;
  const [userList, setUserList] = useState(user.slice(0, pagePerUser));

  return (
    <Wrapper>
      <User userList={userList} />
      <Pagination user={user} setUserList={setUserList} limit={limit} pagePerUser={pagePerUser} />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
```

## ✅ 최종 결과

![](https://velog.velcdn.com/images/psik_2/post/09e01aa7-106c-48e6-8432-c1ba4cb5e853/image.gif)
앞에서 말했듯이 구현 조건을 변경해도 페이지네이션이 정상적으로 되는것을 확인 할 수 있다. 아래는 limit를 7로, pagePerUser를 7로 변경한 것이다.
![](https://velog.velcdn.com/images/psik_2/post/abe89da7-9b67-4f9c-b5a5-a3b92554fc26/image.gif)

## 💡결론

오늘은 라이브러리 없이 페이지네이션을 구현해봤다. 구현을 하는 과정에 있어서 코드도 길어지고 중간중간 까다로웠던 부분이 있었던거 같다. 완벽하진 않지만 이렇게 구현을 해보니까 추후에 페이지네이션을 사용할 일이 있으면 지금보다는 훨씬 수월하게 다루지 않을까 싶다...ㅎㅎ
