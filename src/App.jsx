import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Listagem from './pages/Listagem';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="listagem" element={<Listagem />} />
        <Route path="item/:id" element={<Detalhes />} />
      </Route>
    </Routes>
  );
}

export default App;