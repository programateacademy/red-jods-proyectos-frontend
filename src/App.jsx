import './App.css';
import { AuthProvider } from './components/AuthContext/AuthContext';
import Router from './Router'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
