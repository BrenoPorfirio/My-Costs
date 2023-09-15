import './App.css';

function App() {

  const name = "Breno"

  const newName = name.toUpperCase()
  
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {19 + 19}</p>
    </div>
  );
}

export default App;
