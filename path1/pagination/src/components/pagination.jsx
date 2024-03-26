import styled from "styled-components";
import { useEffect, useState } from "react";

const Pagination = ({ user, limit, pagePerUser }) => {
  // 총 페이지 수
  const totalPage = Math.ceil(user.length / pagePerUser);

  const [userList, setUserList] = useState(user.slice(0, pagePerUser));

  // 랜더링되는 페이지 그룹
  const [pageGroup, setPageGroup] = useState(1);

  const totalPageArray = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const paginationArray = Array.from({ length: Math.ceil(totalPage / limit) }, (_, idx) => totalPageArray.slice(idx * limit, idx * limit + limit));
  console.log("페이지 그룹", paginationArray);
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

  useEffect(() => {
    setUserList(user.slice(pagePerUser * (paginationArray[pageGroup - 1][0] - 1), pagePerUser * paginationArray[pageGroup - 1][0]));
  }, [pageGroup]);

  return (
    <Wrapper>
      {userList.map((el) => (
        <UserWrapper>
          <div>{el.id}</div>
          <div>{el.name}</div>
          <div>{el.birthday}</div>
          <div>{el.number}</div>
        </UserWrapper>
      ))}
      <PaginationWrapper>
        <button onClick={onFirstPage} disabled={pageGroup === 1}>
          {"<<"}
        </button>
        <button onClick={onPrevPage} disabled={pageGroup === 1}>
          {"<"}
        </button>
        {paginationArray[pageGroup - 1].map((page) => (
          <button onClick={onMoveCurrentPage}>{page}</button>
        ))}
        <button onClick={onNextPage} disabled={pageGroup === Math.ceil(totalPage / limit)}>
          {">"}
        </button>
        <button onClick={onLastPage} disabled={pageGroup === Math.ceil(totalPage / limit)}>
          {">>"}
        </button>
      </PaginationWrapper>
    </Wrapper>
  );
};

export default Pagination;

const UserWrapper = styled.div`
  display: flex;
  > div {
    margin: 0px 8px;
    padding: 8px;
  }
`;

const PaginationWrapper = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
