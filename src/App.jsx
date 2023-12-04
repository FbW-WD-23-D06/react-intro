import "./App.css";
import seaDiving from "./assets/sea-diving.avif";

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
        <img
          src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sea diving"
        />
        {/* if the image is saved locally, we need to import it and use the import name (image imported) as "src value" */}
        <img src={seaDiving} alt="sea diving" />
      </div>
    </>
  );
}

export default App;
