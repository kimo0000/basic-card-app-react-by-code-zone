import "./App.css";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Content name="karim" age="39"/>
      <Footer />
    </div>
  );
}

export default App;
