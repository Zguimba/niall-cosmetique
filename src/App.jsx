import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import Categories from "./pages/categories";
import Soins from "./pages/Soins";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import GelDouchePage from "./pages/GelDouche";
import SoinsVisagePage from "./pages/SoinsVisage";
import ProductPage from "./pages/ProductPage";
import CheveuxPage from "./pages/CheveuxPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categorie/:category" element={<Categories />} />
          <Route path="soins" element={<Soins />} />
          <Route path="apropos" element={<APropos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="categorie/cheveux" element={<CheveuxPage />} />
          <Route path="produit/gel-douche" element={<GelDouchePage />} />
          <Route path="produit/soins-visage" element={<SoinsVisagePage />} />
          <Route path="produit/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
