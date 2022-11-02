import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    console.log(id)
  }

  render() {
    const {historyList} = this.props

    const {searchInput} = this.state

    const filteredHistoryList = historyList.filter(eachHistory =>
      eachHistory.domainUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <nav className="navbar-container">
          <div className="search-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app-logo"
            />
          </div>
          <div className="search-input-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
            />
            <input
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search history"
              className="search-input"
              type="search"
            />
          </div>
        </nav>
        <ul className="history-list-container">
          {filteredHistoryList.map(eachHistory => (
            <HistoryItem
              onDeleteHistory={this.onDeleteHistory}
              eachHistory={eachHistory}
              key={eachHistory.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
