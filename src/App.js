import './App.css';

function App() {

  const name = "Breno"

  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }
  
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(12, 54)}</p>
    </div>
  );
}

export default App;
