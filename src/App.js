import React from "react";
import './App.css';
import Head from './Components/Head';
import Heading from './Components/Heading';
import Filter from './Components/filtering/Filtering';
import DataCover from './Components/Data';
import Footer from './Components/Footer';

function App() {

  const [proType,setProType]=React.useState("all");

  return (
    <div className="App">
      <Head />
      <Heading />
      <Filter setProType={setProType} />
      <DataCover type={proType} />
      <Footer />
    </div>
  );
}

export default App;
