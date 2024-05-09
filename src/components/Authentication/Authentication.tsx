import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
