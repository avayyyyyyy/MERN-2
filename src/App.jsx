import { useEffect, useState } from "react";

export default function App() {
  const [test, setTest] = useState([{ name: "abhi" }]);
  const [selectedCardName, setSelectedCardName] = useState("null");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    testfunc();
  }, []);

  async function testfunc() {
    let api = await fetch("https://jsonplaceholder.typicode.com/users");
    let apijson = await api.json();
    setTest(apijson);
  }

  const handleClick = (name) => {
    setSelectedCardName(name);
    sortData();
  };

  const sortData = () => {
    const sortedTest = [...test].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setTest(sortedTest);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <h1>{selectedCardName}</h1>
      {test.map((e, index) => (
        <div
          onClick={() => {
            handleClick(e.name);
          }}
          key={index}
          style={{ width: "300px", border: "1px solid black" }}
        >
          <img src="" alt="" />
          <h1>{e.name}</h1>
          <p>{e.username}</p>
          <p>{e.email}</p>
        </div>
      ))}
    </div>
  );
}
