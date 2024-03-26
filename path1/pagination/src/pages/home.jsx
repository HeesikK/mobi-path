import { useState } from "react";
import { UserList } from "../__mock__/user";
import User from "../components/user";
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
