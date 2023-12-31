import React, { useState, useRef } from 'react';

function ManufacturerForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8100/api/manufacturers/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      formRef.current.reset();
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a Manufacturer</h1>
          <form ref={formRef} onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Manufacturer name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="manufacturer_name">Manufacturer Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManufacturerForm;
