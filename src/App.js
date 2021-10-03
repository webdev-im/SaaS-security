import "./App.css";
import Footer from "./components/UI/organisms/Footer";
import Header from "./components/UI/organisms/Header";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <CheckoutPage />
      <Footer />
    </div>
  );
}

export default App;
