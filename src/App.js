import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo =() => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <center><h1 style={{ color: "blue" }}>Using JavaScript Fetch API</h1></center>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              key={index} 
              style={{
                width: "15em",
                backgroundColor:"yellow",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: "black" }}>{dataObj.email
                }</p>  
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
