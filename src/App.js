import React from 'react';
import Graph from './Graph';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nextArrayItem: "",
      arrayToSort: [],
      sortMethod: ""
   }
   this.handleInput = this.handleInput.bind(this);
   this.handleAdd = this.handleAdd.bind(this);
   this.handleReset = this.handleReset.bind(this);
   this.handleSort = this.handleSort.bind(this);
   this.handleSelect = this.handleSelect.bind(this);
   this.handleRandomize = this.handleRandomize.bind(this);
  }
  componentDidMount() {

  }
  componentDidUpdate() {
    console.log(this.state.arrayToSort);
  }
  handleInput(event) {
    this.setState({
      nextArrayItem: event.target.value
    })
  }
  handleAdd() {
    if(this.state.arrayToSort.length < 9 && this.state.nextArrayItem !== null && this.state.nextArrayItem !== "" && this.state.nextArrayItem !== [] && parseInt(this.state.nextArrayItem , 10) <= 500 && parseInt(this.state.nextArrayItem , 10) >= 0) {
    this.setState({
      arrayToSort: [...this.state.arrayToSort, parseInt(this.state.nextArrayItem , 10)],
      nextArrayItem: null
    })
    this.refs.arrayInput.value = "";
  } else if(parseInt(this.state.nextArrayItem , 10) > 500 || parseInt(this.state.nextArrayItem , 10) < 0) {
    alert("Please stay within the range 0-500.")
    this.refs.arrayInput.value = "";
  } else if(this.state.nextArrayItem === "") {
    alert("Please input a number")
  } else if(this.state.arrayToSort.length === 9) {
    alert("Max array size reached")
  }
  }
  handleReset() {
    this.setState({
      arrayToSort: []
    })
  }
  handleSort() {
    if (this.state.sortMethod === "") {
      alert("Please select a sorting algorithm.")
    } else if (this.state.sortMethod === "Bubble Sort") {
      this.setState({arrayToSort: this.state.arrayToSort.sort((a, b) => a - b)})
    }
  }
  handleSelect(event) {
    this.setState({
      sortMethod: event.target.value,
    })
  }
  handleRandomize() {
    let array = this.state.arrayToSort;
    for (let i = 0; i < 9; i++) {
      array[i] = Math.floor(Math.random() * 500)
    }
    this.setState({
      arrayToSort: array
    })
  }
  render() {
    const graphStyles = {
      border: "1px solid black",
      height: "80vh",
      position: "relative",
      display: "grid",
      gridTemplateRows: "auto",
      gridTemplateColumns: "auto"
    }
    const controlStyles = {
      background: "#696969",
      height: "1fr",
    }
    const inputStyles = {
      width: "190px"
    }
    return (
      <div className="App">
        <div id="graph" style={graphStyles}>
        <Graph arrayToSort={this.state.arrayToSort}/>
        </div>
        <div id="controlpanel" style={controlStyles}>
        <select onChange={this.handleSelect}>
          <option disabled selected>Select a Sorting Algorithm</option>
          <option>Bubble Sort</option>
          <option>Quick Sort</option>
          <option>Heap Sort</option>
        </select> <br></br>
        <input style={inputStyles} placeholder="Input a number from 0 to 500" ref="arrayInput" type="number" onChange={this.handleInput} value={this.state.nextArrayItem}></input>
        <button onClick={this.handleAdd}>Add To Array</button>
        <button onClick={this.handleSort}>Sort</button>
        <button onClick={this.handleRandomize}>Randomize Array</button>
        <button onClick={this.handleReset}>Clear Array</button>
        <h3>This is a handy dandy tool for visualizing sorting algorithms. Use the input field to build your own array or just randomize if you're feeling lazy. Then select a sorting algorithm, hit sort, and watch the magic happen.</h3>
        </div>
      </div>
    );
  }
}

export default App;
