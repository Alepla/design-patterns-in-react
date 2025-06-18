// Proxy Example in React
// Adding access control or delay to component rendering

export const LazyComponent = ({ load }) => {
    const [Component, setComponent] = useState(null);
  
    useEffect(() => {
        load().then((mod) => setComponent(() => mod.default));
    }, [load]);
  
    return Component ? <Component /> : <div>Loading...</div>;
};
  