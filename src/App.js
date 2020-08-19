import React from 'react';
import Graph from './Graph';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      arrayToSort: [],
      sortMethod: "",
      maxArraySize: 100,
      selectedIndex: [],
   }
   this.handleReset = this.handleReset.bind(this);
   this.handleSort = this.handleSort.bind(this);
   this.handleSelect = this.handleSelect.bind(this);
   this.handleRandomize = this.handleRandomize.bind(this);
  }
  handleReset() {
    this.setState({arrayToSort: []})
    for (let i=0; i<100000; i++) {
      window.clearInterval(i);
      }  
  }
  handleSort() {
    if (this.state.sortMethod === "" || this.state.arrayToSort.length <= 1) {
      alert("Please select a sorting algorithm")
    } else if (this.state.sortMethod === "Bubble Sort") {
      let array = this.state.arrayToSort
      var run = setInterval(() => {
        let i  = 0;
        // eslint-disable-next-line no-loop-func
        setInterval(() => {
          if (array[i] > array[i + 1]) {
            let tmp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp;
            this.setState({arrayToSort: array, selectedIndex: [ i, i + 1]})
        }
        i++;
        }, 10)
      } , 200 ) 
    } else if (this.state.sortMethod === "Insertion Sort") {
      let array = this.state.arrayToSort;
      let i = 0;
      setInterval(() => {
        let tmpind = array[i]
        let j = 0;
        setInterval(() => {
          
        }, 10)
        i++;
      }, 10)
    } else if (this.state.sortMethod === "Bogo Sort (The slow kid)") {
      let array = this.state.arrayToSort
        var bogo = setInterval (() => {
          for (let i = 0; i < this.state.maxArraySize; i++) {
            let tmp = array[i]
            let rnd = Math.floor(Math.random() * this.state.maxArraySize)
            array[i] = array[rnd];
            array[rnd] = tmp;
          }
          this.setState({
              arrayToSort: array
          })
          if (array === array.slice().sort((a, b) => a - b)) {
            clearInterval(bogo)
          }
        }, 50)
    }
  }
  handleSelect(event) {
    this.setState({
      sortMethod: event.target.value,
    })
    for (let i=0; i<100000; i++) {
      window.clearInterval(i);
      }  
  }
  handleRandomize() {
    for (let i=0; i<100000; i++) {
      window.clearInterval(i);
      }  
    let array = this.state.arrayToSort;
    this.setState({arrayToSort:[], selectedIndex: []})
    for (let i = 0; i < this.state.maxArraySize; i++) {
      array[i] = Math.floor(Math.random() * 500)
    }
    this.setState({arrayToSort: array})
  }
  render() {
    const graphStyles = {
      maxHeight: "80vh",
      position: "relative",
      bottom: "0",
      display: "flex",
      justifyContent: "center"
    }
    const controlStyles = {
      background: "#696969",
      height: "auto",
      position: "absolute",
      bottom: "0px",
      width: "100vw"
    }
    const textStyles = {
      fontSize: "15px",
      padding: "0px",
      margin: "0px"
    }
    return (
      <div className="App">
        <div  id="graph" style={graphStyles}>
        <Graph selectedIndex={this.state.selectedIndex} arrayToSort={this.state.arrayToSort}/>
        </div>
        <div id="controlpanel" style={controlStyles}>
        <select onChange={this.handleSelect} defaultValue="Select a Sorting Algorithm">
          <option disabled>Select a Sorting Algorithm</option>
          <option>Bubble Sort</option>
          <option>Bogo Sort (The slow kid)</option>
        </select>
        <button onClick={this.handleSort}>Sort</button>
        <button onClick={this.handleRandomize}>Randomize Array</button>
        <button onClick={this.handleReset}>Clear Array</button>
        <p style={textStyles}>Create a random array. Then select a sorting algorithm, hit sort, and watch the magic happen. Tell me about any bugs you encounter by sending a message on <a rel="noopener noreferrer" target="_blank" href="http://adoibori.com/#contact">my website</a>, and just reload the page as a temporary fix. I'll add more algorithms when I understand them better.</p>
        </div>
      </div>
    );
  }
}

export default App;
