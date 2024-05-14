import { useContext, useState } from "react";
import { UsersContext, removeUser } from "../context/users";
import EditUser from "./EditUser";

const Users = () => {
  const [ users, dispatch ] = useContext(UsersContext);
  const [ isEditActive, setIsEditActive ] = useState(false);
  const [ editUserElem, setEditUserElem ] = useState({});

  const editUserHandler = (e) => {
    const editUserId = +(e.target.dataset.id);
    console.log(editUserId);

    setEditUserElem(users.find(user => user.id === editUserId));
    setIsEditActive(prev => !prev);
  }

  return (
    <div className="users">

      { isEditActive && <EditUser editUserElem={editUserElem} setIsEditActive={setIsEditActive} /> }  
      
      {
        users.map( user => (
          <div key={ user.id } className="user">
            <h3 className="user__title">{ user.title }</h3>

            <div className="user__btns">
              <button 
                  className="user__btn user__btn_edit"
                  data-id={ user.id }
                  onClick={(e) => editUserHandler(e)}
              >
                  Edit
              </button>

              <button 
                  className="user__btn user__btn_del"
                  data-id={ user.id }
                  onClick={(e) => dispatch(removeUser(+(e.target.dataset.id)))}
              >
                  Del
              </button>
            </div>
          </div>
        ) )
      }

    </div>
  );

};

export default Users;