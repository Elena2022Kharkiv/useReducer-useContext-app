import { useReducer } from 'react';
import { UsersContext } from './context';
import { initialState, reducer } from './reducer';

// UsersProvider - компонент высшего порядка (НОС)
export const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, initialState);
  // reducer, initialState(массив юзеров) получаем из файла reducer.js
  // получаем из функции reducer - users (новый массив юзеров)
  // useReducer и dispatch нужен, чтобы изменять данные

  return (
    <UsersContext.Provider value={[users, dispatch]}>
      {/* передаем данные [users, dispatch] */}
      {/* в любой компонент, обвернутый провайдером */}
      {/* с возможностью изменения этих данных в этом компоненте */}
      { children }
    </UsersContext.Provider>
  )
}
// usersContext (useContext) позволяет обновлять компонент
// при изменении параметров value={[users, dispatch]}