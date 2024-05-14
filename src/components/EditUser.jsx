import { useContext, useState } from "react";
import { UsersContext, editUser } from "../context/users";

const EditUser = (props) => {
  const { editUserElem, setIsEditActive} = props;
  const [ newTitle, setNewTitle ] = useState( editUserElem.title );
  const [ users, dispatch ] = useContext(UsersContext);

  const editHandler = () => {
    console.log(newTitle);

    const newUsers = users.map(user => {
      if (user.id === editUserElem.id) {
        user.title = newTitle;
      } 
      return user;
    })
    console.log(newUsers);

    dispatch(editUser(newUsers));

    setIsEditActive(prev => !prev);
  }

  return (
      <div className="user__edit">
        <div className="user__edit-form">

          <input 
            className="user-edit-form__input" 
            value={ newTitle }
            type="text"
            onChange={ (e) => setNewTitle(e.target.value) }           
          />
        
          <button
            className="users-edit-form__btn"
            onClick={ editHandler } >         
            Edit
          </button>

        </div>
      </div>
  );
}

export default EditUser;