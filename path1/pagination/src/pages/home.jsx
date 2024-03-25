import { UserList } from "../__mock__/user";
import Pagination from "../components/pagination";

const HomePage = () => {
  const userList = UserList();

  return (
    <>
      <Pagination data={userList.length} limit={5} pagePerData={20} />
    </>
  );
};

export default HomePage;
