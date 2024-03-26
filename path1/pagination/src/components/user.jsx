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
