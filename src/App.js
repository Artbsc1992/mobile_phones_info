import { Routes, Route } from 'react-router-dom';
import HomeList from './components/home/home';
import Category from './components/category/category';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomeList />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
