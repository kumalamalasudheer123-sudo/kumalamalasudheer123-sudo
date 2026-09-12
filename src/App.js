// function App() {
//   return (
//     <div>
//       <h1>Welcome to React.js</h1>
//       <p>This is my first React application.</p>
//       <p>my name is sudheer</p>
//       <button>Click Me</button>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const students = ["Sudheer", "Rahul", "Ravi", "Suresh", "mohan"];

//   return (
//     <div>
//       <h1>Students</h1>

//       <ul>
//         {students.map((student, index) => (
//           <li key={index}>{student}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// function Student(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Student name="Sudheer" age={25} />
//       <Student name="Ravi" age={23} />
//     </div>
//   );
// }

// export default App;

// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <h1>Welcome to React.js</h1>
//       <p>This is my React application.</p>

//       <button>Click Me</button>
//     </div>
//   );
// }

// export default App;
// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <h1>My React Website</h1>
//       <b />

//       <p>
//         {" "}
//         Welcome to my React.js application. <b />
//       </p>

//       <input type="text" placeholder="Enter your name" />

//       <input type="time" placeholder="Entetr time" />
//       <input type="range" placeholder="range" />

//       <br />

//       <button>Submit</button>
//     </div>
//   );
// }

// export default App;
// function App() {
//   return (
//     <div>
//       <h1>I Love JSX!</h1>
//       <p>Welcome to React.js</p>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {218 * 1.36} horsepower</p>
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <h1>HTML</h1>
//       <p>A HyperText Markup Language</p>

//       <h1>CSS</h1>
//       <p>Used to style HTML documents.</p>
//     </>
//   );
// }

// export default App;
// function App() {
//   return (
//     <>
//       <h1>School Time Table</h1>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Phone Number</th>
//             <th>Signature</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Sudheer</td>
//             <td>9160043029</td>
//             <td>K. Sudheer Kumar</td>
//           </tr>
//         </tbody>
//             <td>2</td>
//             <td>ravi</td>
//             <td>91603029</td>
//             <td>K. Sudheer Kumar</td>
//       </table>
//     </>
//   );
// }

// export default App;

// function App(props) {
//   return (
//     <>
//       <input type="text" placeholder="Enter name" />

//       <input type="email" placeholder="Enter email" />

//       <input type="password" placeholder="Enter password" />

//       <input type="number" placeholder="Enter age" />

//       <input type="click on button" placeholder="click on button" />
//     </>
//   );
// }

// export default App;
// function App() {
//   function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Data fetched");
//         resolve();
//       }, 2000);
//     });
//   }

//   return (
//     <>
//       <h1>Promise Example</h1>
//       <button onClick={fetchData}>Fetch Data</button>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     console.log("count----", count);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//     console.log("count----", count);
//   };

//   return (
//     <>
//       <h1>Count: {count}</h1>

//       <button onClick={handleIncrement}>Increment</button>

//       <button onClick={handleDecrement}>Decrement</button>
//     </>
//   );
// }

// export default Counter;

// function User({ user }) {
//   return (
//     <>
//       <h1>Name: {user.name}</h1>
//       <h2>Age: {user.age}</h2>
//       <h3>number:{user.number}</h3>
//       <p>Email: {user.email}</p>
//     </>
//   );
// }

// function App() {
//   const user = {
//     name: "Sudheer",
//     age: 25,

//     email: "sudheer@gmail.com",
//     number: "9160043029",
//   };

//   return <User user={user} />;
// }

// export default App;

// function User({ user }) {
//   return (
//     <>
//       <h1>Brand: {user.brand}</h1>
//       <h2>Model: {user.model}</h2>
//       <p>Year: {user.year}</p>
//     </>
//   );
// }

// function App() {
//   const user = {
//     brand: "Toyota",
//     model: "Camry",
//     year: "2022",
//   };

//   return <User user={user} />;
// }

// export default App;

// function App() {
//   const personPrototype = {
//     greet() {
//       console.log("Hello, I am " + this.name);
//     },
//   };

//   const person = Object.create(personPrototype);

//   person.name = "Sudheer";

//   person.greet();

//   return (
//     <>
//       <h1>Prototype </h1>
//       <p>Name: {person.name}</p>
//     </>
//   );
// }

// export default App;

function App() {
  const user = {
    name: "Sudheer",
    age: 25,
    city: "Anantapur",
  };

  console.log(user);

  return (
    <>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>City: {user.city}</h1>
    </>
  );
}

export default App;
