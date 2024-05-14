import AddUser from "./components/AddUser";
import Users from "./components/Users";
import UsersInfo from "./components/UsersInfo";
import { UsersProvider } from "./context/users";

function App() {

  return (
    <div className="container">
      <h1>User control app !!!</h1>
      
      <UsersProvider>

        <AddUser />
        <UsersInfo />
        <Users />

      </UsersProvider>

    </div>
  );
}

export default App;