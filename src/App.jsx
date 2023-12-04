import "./App.css";
import johnPhoto from "./assets/jhon.avif";

function App() {
  const persons = [
    {
      name: "Jane",
      age: 30,
      city: "New York",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jhon",
      age: 25,
      city: "Chicago",
      img: johnPhoto,
    },
    {
      name: "Susan",
      age: 28,
      city: "Boston",
      img: "https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  console.log("persons:", persons);
  return (
    <>
      <div>
        {/* "key" is needed to prevent performance issues, if we update just an array-item, only this item will be rendered and not all (if we don't have a unique key) */}
        {persons.map((person) => (
          // "crypto.randomUUID()" is a unique key generator, we can also use other generators or the object id (if we have one)
          <div key={crypto.randomUUID()}>
            <h2>{person.name}</h2>
            <p>{person.age}</p>
            <p>{person.city}</p>
            <img src={person.img} alt="person" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
