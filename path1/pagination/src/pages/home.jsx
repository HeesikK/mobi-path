import { UserList } from "../__mock__/user";
import Pagination from "../components/pagination";

const HomePage = () => {
  const userList = UserList();

  console.log(userList);

  return (
    <>
      <Pagination limit={5} totalPage={20} />
    </>
  );
};

export default HomePage;
