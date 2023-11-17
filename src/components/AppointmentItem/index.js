// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isToggeled} = props
  const {input, date, id, appointment} = appointmentDetails
  const onClickFavorites = () => {
    isToggeled(id)
  }
  const favorites = appointment
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-items">
      <div className="list-card-container">
        <p>{input}</p>
        <button
          className="favorite-buttons"
          type="button"
          onClick={onClickFavorites}
          data-testid="star"
        >
          <img src={favorites} alt="star" />
        </button>
        <p>{date}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
