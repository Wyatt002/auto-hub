# Data models

## Inventory microservice

---

### Manufacturer

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| name             | string | noo    | no       |

The `manufacturer` entity contains the data about a specific car manufacturer.

### Vehicle Model

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| name             | string | no     | no       |
| picture_url      | string | no     | no       |


The `vehicleModel` entity contains the data about a specific car vehicle model.

### Automobile

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| color            | string | no     | no       |
| year             | int    | no     | no       |
| vin              | string | yes    | no       |
| sold             | boolean| no     | no       |

The `automobile` entity contains the data about a specific car manufacturer.

## Sales microservice

---

### AutomobileVO

| name    | type                        | unique | optional |
| ------- | --------------------------- | ------ | -------- |
| vin     | reference to auto entity    | true   | false    |
| sold    | reference to auto entity    | true   | true     |

### Salesperson

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| first_name       | string | no     | no       |
| last_name        | string | no     | no       |
| employee_id      | string | no     | no       |

### Customer

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| first_name       | string | no     | no       |
| last_name        | string | no     | no       |
| address          | string | no     | no       |
| phone_number     | string | no     | no       |

### Sale

| name          | type                           | unique | optional |
| ------------- | ------------------------------ | ------ | -------- |
| price         | string                         | no     | no       |
| automobile    | reference to automobile entity | no     | no       |
| salesperson   | reference to salesperson entity| no     | no       |
| customer      | reference to customer entity   | no     | no       |

## Service microservice
---

### AutomobileVO

| name    | type                        | unique | optional |
| ------- | --------------------------- | ------ | -------- |
| vin     | reference to auto entity    | true   | false    |
| sold    | reference to auto entity    | true   | true     |

### Technician

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| first_name       | string | no     | no       |
| last_name        | string | no     | no       |
| employee_id      | string | no     | no       |

### Appointment

| name             | type                        | unique | optional |
| ---------------- | ------                      | ------ | -------- |
| date             | DateField                   | no     | no       |
| time             | string                      | no     | no       |
| reason           | string                      | no     | no       |
| vin              | string                      | no     | no       |
| customer         | string                      | no     | no       |
| status           | string                      | no     | no       |
| technician       | reference to auto entity    | true   | false    |
