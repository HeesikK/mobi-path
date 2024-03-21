import { UserList } from "../__mock__/user";

const HomePage = () => {
  const userList = UserList();

  console.log(userList);

  return <>홈페이지</>;
};

export default HomePage;
