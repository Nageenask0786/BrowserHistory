import './index.css'

const HistoryItem = props => {
  const {HistoryDetails} = props
  const {
    timeAccessed,
    logoUrl,
    title,
    domainUrl,
    deleteHistoryItems,
    id,
  } = HistoryDetails

  const deleteItem = () => {
    deleteHistoryItems(id)
  }

  return (
    <li className="history-items">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="img" />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        className="button"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-btn"
        />
      </button>
    </li>
  )
}

export default HistoryItem
