// Write your code here
// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {input: '', date: '', appointmentList: []}

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onAppointmentShow = event => {
    event.preventDefault()
    const {input, date} = this.state
    const newAppointment = {
      id: v4(),
      input,
      date,
      appointment: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      input: '',
      date: '',
    }))
  }

  isToggeled = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, appointment: !eachContact.appointment}
        }
        return eachContact
      }),
    }))
  }

  onFilters = () => {
    const {appointmentList} = this.state
    const filteredLists = appointmentList.filter(
      eachList => eachList.appointment === true,
    )
    this.setState({appointmentList: filteredLists})
  }

  render() {
    const {input, date, appointmentList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="appointment-container">
            <div className="input-container">
              <h1 className="main-heading">Add Appointment</h1>
              <form onSubmit={this.onAppointmentShow}>
                <label className="label" htmlFor="Title">
                  TITLE
                </label>
                <input
                  type="search"
                  id="Title"
                  className="input"
                  placeholder="Title"
                  onChange={this.onInputChange}
                  value={input}
                />
                <label className="label" htmlFor="Date">
                  DATE
                </label>
                <input
                  type="date"
                  id="Date"
                  className="input"
                  placeholder="dd/mm/yy"
                  onChange={this.onDateChange}
                  value={date}
                />
                <button className="button" type="submit" data-testid="star">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="hr" />
          <div className="card-heading-container">
            <h1 className="appointment">Appointments</h1>
            <button
              className="cancel-button"
              type="button"
              onClick={this.onFilters}
            >
              Starred
            </button>
          </div>
          <ul className="list-container">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                isToggeled={this.isToggeled}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
