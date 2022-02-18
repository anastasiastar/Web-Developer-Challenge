import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import ResultsTable from './components/ResultsTable'
import React, { useState,initialState } from 'react';

function App() {
  const [results,setResults] = useState([])
  function showResults(r){
    setResults(r)
  }
  return (
    <div className="App">
      <Header />
      <SearchForm  onEnteredSearch={showResults}/>
      { results.length > 0 &&
        <ResultsTable searchData={results}/>
      }
    </div>
  );
}

export default App;
