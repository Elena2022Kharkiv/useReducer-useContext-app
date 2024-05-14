import { useContext } from "react";
import { UsersContext } from "../context/users";

const UsersInfo = () => {
  const [users, ] = useContext(UsersContext);

  return (
    <h4 className="users-count">
      users count: { users.length }
    </h4>
  );
};

export default UsersInfo;