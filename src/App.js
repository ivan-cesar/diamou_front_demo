import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import "./assets/css/styles.css";
import "./assets/css/styles.min.css";
import Dashboard from "./components/Dashboard";
import AddInvoice from "./components/AddInvoice";
import Listing from "./components/Listing";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/ajout-facture" element={<AddInvoice/>} />
              <Route path="/liste-des-factures" element={<Listing/>} />
          </Routes>
      </Router>
  );
}

export default App;
