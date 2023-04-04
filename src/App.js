// import {requestLodging} from "./api/fetchData.js";

function App() {
  
  // fetch('./data/logements.json').then(
  //   r => r.json()
  // ).then(
  //   d => console.log(d)
  // )

  // fetch('./data/logements.json').then(
  //   r => r.json()
  // ).then(
  //   d => {
  //     const dataFetched = d; // assigner la valeur de d à la variable dataFetched
  //     console.log(dataFetched); // afficher la valeur de dataFetched
  // })

  const dataFetched = fetch('./data/logements.json').then(
  r => r.json()
  ).then(
  d => {
  return d
  })

  console.log(
    dataFetched.then(d => {return d})
    );
  

  return (
    <div className="App">
      <p>Kasa</p>
    </div>
  );
}

export default App;
