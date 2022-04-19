import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Products";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ShowSlideshow from "./Components/SlideShow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      Data: {}
    };
  }

  Data() {
    $.ajax({
      url: "./Data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ Data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.Data();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.Data.main} />
        <ShowSlideshow/>
        <About data={this.state.Data.main} />
        
        <Portfolio data={this.state.Data.portfolio} />
        <Contact data={this.state.Data.main} />
        <Footer data={this.state.Data.main} />
      </div>
    );
  }
}

export default App;
