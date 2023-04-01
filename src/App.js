import logo from './logo.svg'
import './App.css'

function App() {
  const appName = process.env.REACT_APP_NAME
  console.log(`appName: ${ appName }`)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello Chingu World</h2>
        <h3>Have fun deploying me!</h3>
        <p>This app will be used in the Chingu Roundtable to demonstrate app deployments.</p>
      </header>
    </div>
  );
}

export default App
