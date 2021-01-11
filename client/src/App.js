import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='/auth/google'
          target='_blank'
          rel='noopener noreferrer'
        >
          Sign in With Google
        </a>
        <a href='/api/currentUser'>Current User</a>
        <a href='/api/logout'>Log Out</a>
      </header>
    </div>
  );
}

export default App;
