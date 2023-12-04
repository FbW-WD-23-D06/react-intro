// Crated to explain how to render an object without React

// Using it we can see the difference between React and normal JS
// We can see that React is more simple and easy to read udn use
// Because, we use React.StrictMode (in src/main.jsx), rendering rendering without react is not the beste, because double rendering

export default function renderObj() {
  const obj = {
    name: "Max",
    age: 30,
    address: {
      street: "Musterstraße 1",
      city: "Musterstadt",
    },
  };

  const container = document.createElement("div");
  container.id = "objContainer";

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${obj.name}`;

  const ageElement = document.createElement("p");
  ageElement.textContent = `Age: ${obj.age}`;

  const addressElement = document.createElement("p");
  addressElement.textContent = `Address: ${obj.address.street}, ${obj.address.city}`;

  container.appendChild(nameElement);
  container.appendChild(ageElement);
  container.appendChild(addressElement);

  document.body.appendChild(container);
}
