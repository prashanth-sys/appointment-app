// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {input, date} = appointmentDetails

  return (
    <li>
      <div>
        <h1>{input}</h1>
        <p>{date}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
