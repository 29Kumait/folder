import { useContext } from "react";
import { AuthContext } from "../components/Authentication/Authentication.tsx";
export const useAuthContext = () => useContext(AuthContext);
