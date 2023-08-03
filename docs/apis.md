# APIs


## Technician

- Endpoint path: `GET`, `POST`, `PUT`, `DELETE`
- Endpoint method: `/api/technicians`, `/api/account/<int:pk>`,

- Request shape (JSON):

````json
{
  "first_name": string,
  "id": int,
  "last_name": string,
  "employee_id": string,
}
    ```

* Response: The Accounts API will create, get, update and delete a technician for a user on the Auto Hub website. Users will need to enter in all of the information listed to create a technician.

* Response shape (JSON):
```json
{
  "first_name": string,
  "id": int,
  "last_name": string,
  "employee_id": string,
}
````

## Appointments

* Endpoint path: `GET`, `POST`, `PUT`,
* Endpoint method: `/api/appointments`, `/api/appointments/<int:pk>`, `/api/appointments/<int:pk>/cancel`, `/api/appointments/<int:pk>/finish`

- Request shape (JSON):

```json
{

	"date": DateField,
	"time": string,
	"id": int,
	"reason": string,
	"vin": string,
	"customer": string,
	"status": string,
	"technician": string,

}
```

- Response: The appointments API will allow user to schedule and view and change status of appointments.  "Service Appointments" tab will allow user to see open service appointments.  "Service History" will allow user to view "cancelled" or "finished" service appointments.
- Response shape (JSON):

```json
{
	"date": DateField,
	"time": string,
	"id": int,
	"reason": string,
	"vin": string,
	"customer": string,
	"status": string,
	"technician": {
		"first_name": string,
		"last_name": string,
		"employee_id": string,
		"id": int
	}
}
```

## Sales

* Endpoint path: `GET`, `POST`
* Endpoint method: `/api/sales`, `/api/sales/<int:pk>`

* Request shape (JSON):
```json
{
  "id": int,
  "vin": string,
  "customer": string,
  "price": string,
}
```

* Response: A specific endpoint for sales information per VIN.  Enter a new sale by completing form and listing salesperson, customer, sale price, and VIN.
* Response shape (JSON):
```json
{
  "id": int,
  "vin": string,
  "customer": string,
  "price": string,
}
```

## Salespeople

* Endpoint path: `GET`, `POST`
* Endpoint method: `/api/salespeople`, `/api/salespeople/<int:pk>`

* Request shape (JSON):
```json
{
  "first_name": string,
  "last_name": string,
  "employee_id": string,
}
```

* Response: A specific endpoint for the salespeople API.
* Response shape (JSON):
```json
{
  "id": int,
  "first_name": string,
  "last_name": string,
  "employee_id": string,
}
```

## Customers

- Endpoint path: `GET`, `POST`
- Endpoint method: `/api/customers`, `/api/customers/<int:pk>`

- Request shape (JSON):

```json
{
  "first_name": string,
  "last_name": string,
  "phone_number": string,
  "address": string,
}
```

- Response: Endpoint for creating and getting data for customers.
- Response shape (JSON):

```json
{
  "id": int,
  "first_name": string,
  "last_name": string,
  "phone_number": string,
  "address": string,
}
```
