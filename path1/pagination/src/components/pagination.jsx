import styled from "styled-components";
import { useEffect, useState } from "react";

const Pagination = ({ data, limit, pagePerData }) => {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 총 페이지 수
  const totalPage = Math.ceil(data / pagePerData);

  // 랜더링되는 페이지 그룹
  const [pageGroup, setPageGroup] = useState(1);

  const totalPageArray = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const paginationArray = Array.from({ length: Math.ceil(totalPage / limit) }, (_, idx) => totalPageArray.slice(idx * limit, idx * limit + limit));
  console.log("페이지네이션", paginationArray);

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
      <button onClick={onFirstPage} disabled={pageGroup === 1}>
        {"<<"}
      </button>
      <button onClick={onPrevPage} disabled={pageGroup === 1}>
        {"<"}
      </button>
      {paginationArray[pageGroup - 1].map((page) => (
        <button>{page}</button>
      ))}
      <button onClick={onNextPage} disabled={paginationArray[pageGroup - 1][paginationArray[pageGroup - 1].length - 1] === totalPage}>
        {">"}
      </button>
      <button onClick={onLastPage} disabled={paginationArray[pageGroup - 1][paginationArray[pageGroup - 1].length - 1] === totalPage}>
        {">>"}
      </button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  > button {
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
  }
`;
