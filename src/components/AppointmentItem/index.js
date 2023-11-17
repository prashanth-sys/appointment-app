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
    <li>
      <div className="list-card-container">
        <h1>{input}</h1>
        <button
          className="favorite-buttons"
          type="button"
          onClick={onClickFavorites}
        >
          <img src={favorites} alt="star" />
        </button>
        <p>{date}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
