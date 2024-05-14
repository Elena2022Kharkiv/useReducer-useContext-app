import { addUser } from "../context/users";
import { useUsersContexst } from "./../hooks/useUsersContext";

const AddUser = () => {
  const [users, dispatch] = useUsersContexst();

  const clickHandler = () => {
    const id = users[users.length - 1].id + 1;

    dispatch(addUser({
      id,
      title: `User ${id}`,
    }));
  }

  return (
    <button onClick={ clickHandler }>Add user</button>
  );
};

export default AddUser;