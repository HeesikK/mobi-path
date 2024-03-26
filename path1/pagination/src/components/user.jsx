import { UserList } from "../__mock__/user";
import Pagination from "./pagination";

const User = () => {
  const user = UserList();
  return (
    <>
      {/* Pagination의 Props로 전달할 값은 user(mock 데이터), limit(사용자에 보여질 페이지 수), pagePeruser(페이지 당 유저수) */}
      <Pagination user={user} limit={3} pagePerUser={20} />
    </>
  );
};

export default User;
