import "./App.css";
import Accessories from "./component/accessories/Accessories";
import Category from "./component/category/Category";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Home from "./component/home/Home";
import Info from "./component/info/Info";
import LookFor from "./component/look-for/Look-for";
import Performance from "./component/performance/Performance";
import AccessoriesData from "./data/AccessoriesData";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Category />
        <LookFor />
        <Performance />
        <Info />
        <Accessories AccessoriesData = {AccessoriesData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
