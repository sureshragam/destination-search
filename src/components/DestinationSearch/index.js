// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {inputValue: ''}

  filterDestinations = event => {
    this.setState(() => {
      const {value} = event.target
      return {inputValue: value}
    })
  }

  render() {
    const {destinationsList} = this.props
    const {inputValue} = this.state
    const filteredList = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(inputValue),
    )
    return (
      <div className="main-container">
        <h1>Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search"
            onChange={this.filterDestinations}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="cards-container">
          {filteredList.map(element => (
            <DestinationItem
              name={element.name}
              image={element.imgUrl}
              key={element.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
