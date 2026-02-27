import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Data Not Fetched");
      }
      const dataFetched = await res.json();
      console.log(dataFetched);
      setData(dataFetched);
    };
    fetchData()
  }, []);
  return (
    <div>
      {/* Do not remove the main div */}
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
