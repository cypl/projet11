// import {requestLodging} from "./api/fetchData.js";

function App() {
  
  fetch('./data/logements.json').then(
    r => r.json()
  ).then(
    d => console.log(d)
  )

  // requestLodging().then(
  //   lodging => {console.log(lodging)}
  // )

  return (
    <div className="App">
      <p>Kasa</p>
    </div>
  );
}

export default App;
