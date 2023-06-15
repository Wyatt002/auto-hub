import React, { useState, useEffect } from "react";



function ServiceHistoryList() {
  const [appointments, setAppointments] = useState([])
  const [query, setQuery] = useState("")
  const [autos, setAutos] = useState([])
  const filteredAppointments = appointments.filter(appointment => {
    return appointment.vin.toLowerCase().includes(query.toLowerCase())
  })
  useEffect(() => {fetchdata()}, [])
  const fetchdata = async () => {
      const response = await fetch('http://localhost:8080/api/appointments/');
      if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments);
      } else {
          console.error(response);
        }
      const automobiles_url = 'http://localhost:8100/api/automobiles/';
      const automobiles_response = await fetch(automobiles_url);
      if (automobiles_response.ok) {
          const data = await automobiles_response.json();
          setAutos(data.autos);
      }
    }
    function isSold(vin){
      let result = "No"
      for (const auto of autos){
        if(auto["vin"] === vin){
          result = "Yes";
        }
      }
      return result;
    }
    function formatTime(timeString) {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const time = new Date(`2000-01-01T${timeString}`);
      return time.toLocaleTimeString(undefined, options);
    }
    return (
        <>
            <h1>Service History</h1>
            <input
            type="search"
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by VIN..."
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Is VIP?</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Technician</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
                <tbody>
                  {filteredAppointments.map(appointment => {
                    return (
                    <tr key={appointment.id}>
                      <td>{ appointment.vin }</td>
                      <td>{ isSold(appointment.vin)}</td>
                      <td>{ appointment.customer }</td>
                      <td>{ appointment.date }</td>
                      <td>{ formatTime(appointment.time) }</td>
                      <td>{ appointment.technician.first_name }</td>
                      <td>{ appointment.reason }</td>
                      <td>{ appointment.status }</td>
                    </tr>
                    );
                  })}
                </tbody>
            </table>
        </>
        );
}

export default ServiceHistoryList;
