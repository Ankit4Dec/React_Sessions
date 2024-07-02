// Create a component that fetches data from an API and display it.

import { useEffect, useState } from "react";

export const Six = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/6")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div>
        {data ? (
          <div>
            <h1>Title: {data.title}</h1>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
