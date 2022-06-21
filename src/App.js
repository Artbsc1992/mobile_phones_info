import { Routes, Route } from 'react-router-dom';
import HomeList from './components/home/home';
import Category from './components/category/category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomeList />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
