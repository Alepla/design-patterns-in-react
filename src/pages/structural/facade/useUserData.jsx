// Facade Example in React
// Simplifying complex logic behind a unified API

import { useState } from "react";

export const useUserData = () => {
    const [user, setUser] = useState(null);
  
    const loadUser = async () => {
        const res = await fetch('/api/user');
        const data = await res.json();
        setUser(data);
    };
  
    return { user, loadUser };
};
  