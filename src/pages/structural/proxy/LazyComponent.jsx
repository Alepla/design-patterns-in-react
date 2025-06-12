// Proxy Example in React
// Adding access control or delay to component rendering

import { useState, useEffect } from "react";

export const LazyComponent = ({ load }) => {
    const [Component, setComponent] = useState(null);
  
    useEffect(() => {
        load().then((mod) => setComponent(() => mod.default));
    }, [load]);
  
    return Component ? <Component /> : <div>Loading...</div>;
};
  