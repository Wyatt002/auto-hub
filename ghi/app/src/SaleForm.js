import React, { useEffect, useState, useRef } from 'react';

function SaleForm() {
  const formRef = useRef(null);
  const [autos, setAutos] = useState([])
  const [salespeople, setSalespeople] = useState([])
  const [customers, setCustomers] = useState([])
  const [formData, setFormData] = useState({
    automobile_id: '',
    salesperson_id: '',
    customer_id: '',
    price: '',
  })

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
    }
    const salespeople_url = 'http://localhost:8090/api/salespeople/';
    const salespeople_response = await fetch(salespeople_url);
    if (salespeople_response.ok) {
      const data = await salespeople_response.json();
      setSalespeople(data.salespeople);
    }
    const customers_url = 'http://localhost:8090/api/customers/';
    const customers_response = await fetch(customers_url);
    if (customers_response.ok) {
      const data = await customers_response.json();
      setCustomers(data.customers);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8090/api/sales/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(fetchConfig);
    console.log(formData);
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
          <h1>Record a new sale</h1>
          <form ref={formRef} onSubmit={handleSubmit} id="create-sale-form">
            <div className="mb-3">
              <select onChange={handleFormChange} required name="automobile_id" id="automobile_id" className="form-select">
                <option value="">Choose an automobile VIN</option>
                {autos.map(auto => {
                  return (
                    <option key={auto.id} value={auto.vin}>{auto.vin}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} required name="salesperson_id" id="salesperson_id" className="form-select">
                <option value="">Choose a salesperson</option>
                {salespeople.map(salesperson => {
                  return (
                    <option key={salesperson.id} value={salesperson.id}>{salesperson.first_name + " " + salesperson.last_name}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} required name="customer_id" id="customer_id" className="form-select">
                <option value="">Choose a customer</option>
                {customers.map(customer => {
                  return (
                    <option key={customer.id} value={customer.id}>{customer.first_name + " " + customer.last_name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="0" required type="text" name="price" id="price" className="form-control" />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SaleForm;
