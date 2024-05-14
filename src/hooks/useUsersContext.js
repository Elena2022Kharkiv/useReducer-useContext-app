import { useContext } from "react";
import { UsersContext } from "../context/users";

export const useUsersContexst = () => {
    return useContext(UsersContext);
}