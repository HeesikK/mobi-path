import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ user, setUserList, limit, pagePerUser }) => {
  // 총 페이지 수
  const totalPage = Math.ceil(user.length / pagePerUser);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("page") ?? "1";

  // console.log("파람값은?", params);
  const [currentPage, setCurrentPage] = useState(Number(params));

  // 랜더링되는 페이지 그룹
  const pageGroup = Math.ceil(currentPage / limit);

  const totalPageArray = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const paginationArray = Array.from({ length: Math.ceil(totalPage / limit) }, (_, idx) => totalPageArray.slice(idx * limit, idx * limit + limit));

  // "<<" 버튼 클릭
  const onFirstPage = () => {
    setCurrentPage(1);
  };

  // "<" 버튼 클릭
  const onPrevPage = () => {
    const prevPageGroupFirstPage = (pageGroup - 1) * limit;
    if (prevPageGroupFirstPage >= 1) {
      setCurrentPage(prevPageGroupFirstPage);
    } else {
      setCurrentPage(1);
    }
  };

  // ">" 버튼 클릭
  const onNextPage = () => {
    setCurrentPage(pageGroup * limit + 1);
  };

  // ">>" 버튼 클릭
  const onLastPage = () => {
    setCurrentPage(totalPage);
  };

  // page 클릭
  const onMoveCurrentPage = (e) => {
    setSearchParams({ page: String(e.target.textContent) });
  };

  /*
    "<", "<<", ">", ">>" 버튼을 클릭하면 page
   */

  useEffect(() => {
    setSearchParams({ page: String(currentPage) });
  }, [pageGroup]);

  useEffect(() => {
    setCurrentPage(params);
    setUserList(user.slice(pagePerUser * (Number(params) - 1), pagePerUser * Number(params)));
  }, [params]);

  console.log("현재 페이지", currentPage, "페이지 그룹", paginationArray[pageGroup - 1]);

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
