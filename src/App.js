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
      sortedIndex: [],
   }
   this.handleReset = this.handleReset.bind(this);
   this.handleSort = this.handleSort.bind(this);
   this.handleSelect = this.handleSelect.bind(this);
   this.handleRandomize = this.handleRandomize.bind(this);
  }
  componentDidMount() {
    this.handleRandomize()
  }
  handleReset() {
    this.setState({arrayToSort: [], sortedIndex: []})
    for (let i=0; i<100000; i++) {
      window.clearInterval(i);
      }
  }
  handleSort() {
    if (this.state.sortMethod === "" || this.state.arrayToSort.length <= 1) {
      alert("Please select a sorting algorithm/randomize the array")
    } else if (this.state.sortMethod === "Bubble Sort") {
      let array = this.state.arrayToSort
      let arraySorted = array.slice().sort((a,b) => a-b)
      let i = 0
      let j = 0
      var swapped = true
      setInterval(() => {
        if (i === array.length - j) {
          i = 0
          if (swapped === false) {
            for (let i=0; i<100000; i++) {
              window.clearInterval(i)
            }
          }
          j++
          swapped = false
        }
        if (array[i] > array[i + 1]) {
          swapped = true;
          [array[i], array[i + 1]] = [array[i + 1], array[i]]
          this.setState(state => ({
            arrayToSort: array, selectedIndex: [i, i+1], sortedIndex: array[i] === arraySorted[i] ? [...state.sortedIndex, i] : state.sortedIndex
          }))
          this.setState(state => ({
            sortedIndex: array[i + 1] === arraySorted[i + 1] ? [...state.sortedIndex, i + 1] : state.sortedIndex
          }))
        }
        i++
      }, 5)
    } else if (this.state.sortMethod === "Insertion Sort") {
      let array = this.state.arrayToSort;
      let arraySorted = array.slice().sort((a,b) => a-b)
      let n = 2
      let i = n
      setInterval(() => {
        if (n === array.length) {
          for (let i = 0; i < 100000; i++) {
            window.clearInterval(i)
          }
        }
        if (i === 0) {
          n++
          i = n
        }
        if (array[i] < array[i - 1]) {
          [array[i], array[i - 1]] = [array[i-1], array[i]]
          this.setState(state => ({
            arrayToSort: array, selectedIndex: [i, i - 1], sortedIndex: array[i] === arraySorted[i] ? [...state.sortedIndex, i] : state.sortedIndex
          }))
          this.setState(state => ({
            sortedIndex: array[i - 1] === arraySorted[i - 1] ? [...state.sortedIndex, i - 1] : state.sortedIndex
          }))
        }
        i--
      }, 5)
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
    } else if (this.state.sortMethod === "Gnome Sort") {
      let array = this.state.arrayToSort
      let sortedArray = array.slice().sort((a,b) => a - b)
      let returnpos = 0
      let back = false
      let gnomeSort = (arr) => {
        let pos = 0
        let gnome = setInterval(() => {
          if(array[pos] > array[pos + 1]) {
            [array[pos], array[pos + 1]] = [array[pos + 1], array[pos]]
            this.setState({arrayToSort: array, selectedIndex: [pos, pos + 1], sortedIndex: array[pos] === sortedArray[pos] ? [...this.state.sortedIndex, pos] : this.state.sortedIndex})
            this.setState({sortedIndex: array[pos + 1] === sortedArray[pos + 1] ? [...this.state.sortedIndex, pos + 1] : this.state.sortedIndex})
            if (back === false) {
              returnpos = pos
              back = true
            }
            pos --
          } else {
            if (back === false) {
              pos++
            } else {
              pos = returnpos
              back = false
            }
          }
        }, 5)
      }
      gnomeSort(array)
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
    for(let i = array.length; i > this.state.maxArraySize; i--) {
      array.pop()
    }
    this.setState({arrayToSort: array, sortedIndex: []})
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
      background: "lightblue",
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
        <Graph sortedIndex={this.state.sortedIndex} selectedIndex={this.state.selectedIndex} arrayToSort={this.state.arrayToSort}/>
        </div>
        <div id="controlpanel" style={controlStyles}>
        <select onChange={this.handleSelect} defaultValue="Select a Sorting Algorithm">
          <option disabled>Select a Sorting Algorithm</option>
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          <option>Gnome Sort</option>
          <option>Bogo Sort (The slow kid)</option>
        </select>
        <button onClick={this.handleSort}>Sort</button>
        <button onClick={this.handleRandomize}>Randomize Array</button>
        <button onClick={this.handleReset}>Clear Array</button>
        <p style={textStyles}>Randomize the array. Then select a sorting algorithm, hit sort, and watch the magic happen. <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Sorting_algorithm">More info on sorting algorithms here.</a> </p>
        </div>
      </div>
    );
  }
}

export default App;
