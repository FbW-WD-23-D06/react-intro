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
        {/* image1 was saved locally and imported, image 2 is taken from the web normally as in html */}
        <img
          src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sea diving"
        />
        {/* if the image is saved locally, we need to import it and use the import name (image imported) as "src value" or start the path from src like in the example below*/}
        {/* <img src="src/assets/sea-diving.avif" alt="sea diving" /> */}
        <img src={seaDiving} />
      </div>
    </>
  );
}

export default App;
