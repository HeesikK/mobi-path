import styled from "styled-components";
import { useEffect, useState } from "react";

const Pagination = ({ limit, totalPage }) => {
  // const currentPage = 1;
  const [pageGroup, setPageGroup] = useState(1);

  // pageGroup = 1 이면 1~5 pageGroup = 2 이면 6~10
  const pageArray = Array.from({ length: limit }, (_, idx) => (pageGroup - 1) * limit + idx + 1);

  console.log(pageArray);

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

  return (
    <Container>
      <button onClick={onFirstPage} disabled={pageArray[0] === 1}>
        {"<<"}
      </button>
      <button onClick={onPrevPage} disabled={pageArray[0] === 1}>
        {"<"}
      </button>
      {pageArray.map((page) => (
        <button>{page}</button>
      ))}
      <button onClick={onNextPage} disabled={pageArray[pageArray.length - 1] === totalPage}>
        {">"}
      </button>
      <button onClick={onLastPage} disabled={pageArray[pageArray.length - 1] === totalPage}>
        {">>"}
      </button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  > div {
    margin: 0px 15px;
    cursor: pointer;
  }
`;
/* 
재사용 가능한 페이지네이션 만들기

Page Per Member(페이지 당 유저수): Total User Number(총 유저수) / Total Page(전체 페이지 수)
Pagination: 5개 단위
<< < 1 2 3 4 5 > >>

1페이지 -> 0번째 인덱스 ~ 19번째 인덱스
2페이지 -> 20번째 인덱스 ~ 39번쨰 인덱스
.
.
.
9페이지 -> 160번째 인덱스 ~ 189번째 인덱스
10페이지 -> 190번째 인덱스 ~ 199번째 인덱스
*/
