// Fetch data from multiple APIs and display the combined data in your component

import axios from "axios";
import { useEffect, useState } from "react";

export const TwentySix = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        setData1(response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then(response => {
        setData2(response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  console.log(data1, data2);

  return (
    <>
      <div>Fetching Multiple API</div> <div>
        <h2>Data 1:</h2>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>
      <div>
        <h2>Data 2:</h2>
        <pre>{JSON.stringify(data2, null, 2)}</pre>
      </div>
    </>
  );
};
