import { Routes, Route } from 'react-router-dom';
import HomeList from './components/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomeList />} />
      </Routes>
    </div>
  );
}

export default App;
