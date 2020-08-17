import React from 'react';
import Graph from './Graph';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nextArrayItem: "",
      arrayToSort: [],
      sortMethod: "",
      maxArraySize: 60,
      selectedIndex: []
   }
   this.handleInput = this.handleInput.bind(this);
   this.handleAdd = this.handleAdd.bind(this);
   this.handleReset = this.handleReset.bind(this);
   this.handleSort = this.handleSort.bind(this);
   this.handleSelect = this.handleSelect.bind(this);
   this.handleRandomize = this.handleRandomize.bind(this);
   this.quickSort = this.quickSort.bind(this);
  }
  componentDidMount() {
  }
  quickSort(list) {
    if (list.length <= 1) { 
        return list
    } else {
        const left = []
        const right = []
        const sorted = []
        const pivot = list.pop() // we're picking the last item to act as the pivot
        const length = list.length
        let i = 0
        setInterval(() => {
          if (i === length) {
            for (let i=0; i<100000; i++) {
              window.clearInterval(i);
              }  
          }
          if (list[i] <= pivot) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
          i++;
        }, 100)
        return sorted.concat(this.quickSort(left), pivot, this.quickSort(right))
    }
  }
  handleInput(event) {
    this.setState({
      nextArrayItem: event.target.value
    })
  }
  handleAdd() {
    if(this.state.arrayToSort.length < this.state.maxArraySize && this.state.nextArrayItem !== null && this.state.nextArrayItem !== "" && this.state.nextArrayItem !== [] && parseInt(this.state.nextArrayItem , 10) <= 500 && parseInt(this.state.nextArrayItem , 10) >= 0) {
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
  } else if(this.state.arrayToSort.length === this.state.maxArraySize) {
    alert("Max array size reached")
  }
  }
  handleReset() {
    this.setState({arrayToSort: []})
    for (let i=0; i<100000; i++) {
      window.clearInterval(i);
      }  
  }
  handleSort() {
    if (this.state.sortMethod === "" || this.state.arrayToSort.length <= 1) {
      alert("Please select a sorting algorithm and/or add an array.")
    } else if (this.state.sortMethod === "Bubble Sort") {
      let array = this.state.arrayToSort
      var run = setInterval(() => {
        let i  = 0;
        if (this.state.arrayToSort === this.state.arrayToSort.slice().sort((a,b) => a-b)) {
          clearInterval(run)
        }
        // eslint-disable-next-line no-loop-func
        setInterval(() => {
          if (array[i] > array[i + 1]) {
            let tmp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp;
            this.setState({arrayToSort: array, selectedIndex: [this.state.selectedIndex , i + 1]})
        }
        i++;
        }, 50)
      } , 300 ) 
      } else if (this.state.sortMethod === "Quick Sort") {
          this.setState({
            arrayToSort: this.quickSort(this.state.arrayToSort)
          })
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
      display: "grid",
      gridTemplateRows: "auto",
      gridTemplateColumns: "auto"
    }
    const controlStyles = {
      background: "#696969",
      height: "auto",
      position: "absolute",
      bottom: "0px",
      width: "100vw"
    }
    const inputStyles = {
      width: "190px"
    }
    return (
      <div className="App">
        <div id="graph" style={graphStyles}>
        <Graph selectedIndex={this.state.selectedIndex} arrayToSort={this.state.arrayToSort}/>
        </div>
        <div id="controlpanel" style={controlStyles}>
        <select onChange={this.handleSelect} defaultValue="Select a Sorting Algorithm">
          <option disabled>Select a Sorting Algorithm</option>
          <option>Bubble Sort</option>
          <option>Quick Sort</option>
          <option>Heap Sort</option>
        </select> <br></br>
        <input style={inputStyles} placeholder="Input a number from 0 to 500" ref="arrayInput" type="number" onChange={this.handleInput} value={this.state.nextArrayItem}></input>
        <button onClick={this.handleAdd}>Add To Array</button>
        <button onClick={this.handleSort}>Sort</button>
        <button onClick={this.handleRandomize}>Randomize Array</button>
        <button onClick={this.handleReset}>Clear Array</button>
        <h4>Use the input field to build your own array or just randomize it if you're feeling lazy. Then select a sorting algorithm, hit sort, and watch the magic happen. Tell me about any bugs you encounter by sending a message on <a href="http://adoibori.com">my website</a>, and just reload the page as a temporary fix.</h4>
        </div>
      </div>
    );
  }
}

export default App;
