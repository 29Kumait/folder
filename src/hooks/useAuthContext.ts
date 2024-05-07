import { useContext } from 'react';
import { AuthContext } from "../components/Authentication";
export const useAuthContext = () => useContext(AuthContext);