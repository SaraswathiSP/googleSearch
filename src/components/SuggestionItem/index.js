// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, inputTextChange} = props
  const {suggestion} = details

  const textAdd = () => {
    inputTextChange(suggestion)
  }

  return (
    <li className="text-search">
      <p>{suggestion}</p>
      <button type="button">
        onClick={textAdd}
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
