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
