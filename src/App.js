import "./App.css";
import React from "react";
import Header from "./component/ContactPage/Header";
import Content from "./component/ContactPage/Content";
import Footer from "./component/ContactPage/Footer";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <React.Fragment>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </React.Fragment>
      </div>
    </Provider>
  );
}

export default App;
