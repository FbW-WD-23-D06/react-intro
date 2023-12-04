import "./App.css";

function App() {
  const grannies = [
    { id: 1, name: "Adelheid", age: 70 },
    { id: 2, name: "Bertha", age: 69 },
    { id: 3, name: "Constanze", age: 78 },
  ];

  return (
    <div className="App">
      <h1>Grannies</h1>
      <ul style={{ listStyle: "none" }}>
        {grannies.map((granny) => {
          return (
            <li key={granny.id}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Name: {granny.name} </h2>
                {/* give dynamic styles using jsx*/}
                {/* <h2 style={{ color: granny.age >= 70 ? "red" : "black" }}> */}
                {/* give dynamic className using jsx*/}
                <h2 className={granny.age >= 70 ? "over70" : "under70"}>
                  Age: {granny.age}
                </h2>
              </div>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
