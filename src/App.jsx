import "./App.css";

function App() {
  const person = {
    name: "Max",
    age: 30,
    address: {
      street: "Musterstraße 1",
      city: "Musterstadt",
    },
  };

  // zwischen function definition und return können wir normal js schreiben
  return (
    <>
      <div>
        {/* hier um js zu schreiben, brauchen wir die "{}", weil JSX ist */}
        <p>name: {person.name}</p>
        <p>age: {person.age}</p>
        <p>street: {person.address.street}</p>
        <p>city: {person.address.city}</p>
      </div>
    </>
  );
}

export default App;
