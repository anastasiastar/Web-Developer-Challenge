import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import ResultsTable from './components/ResultsTable'
import React, { useState,initialState } from 'react';

function App() {
  const [results,setResults] = useState([])
  const [loading ,setLoading] = useState(false)
  const [searchtext,setSearchText] = useState("")
  
  function showResults(r){
    setLoading(false)
    setResults(r)
  }

  function updateLoading(status){
    setLoading(status)
  }

  function updateSearchText(text){
    setSearchText(text)
  }

  
  return (
    <div className="App">
      
      <Header />

      <SearchForm 
          onEnteredSearch={showResults} 
          loadingStatus={updateLoading}
          updateSearch={updateSearchText}
        />

      {/* Display results */}
      { results.length > 0 && loading == false &&<ResultsTable searchData={results}/>}

      {/* Display no Results */}
      { results.length == 0 && loading == false && searchtext !== "" && <h2> No Results </h2>}

      {/* loading */}
      { loading == true && <h2> Loading...</h2>}
      
    </div>
    
  );
}

export default App;
