import './index.css'

const HistoryItem = props => {
  const {eachHistory, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="history-item">
      <div className="list-item">
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        testid="delete"
        onClick={onDelete}
        className="button"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
