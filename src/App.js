import { Routes, Route } from 'react-router-dom';
import PhoneList from './components/top_phones/top_phones';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<PhoneList />} />
        </Routes>
    </div>
  );
}

export default App;
