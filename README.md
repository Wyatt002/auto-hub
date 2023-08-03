# Auto Hub

We cover all sales, inventory, and service aspects needed to manage your automobile dealership!

Inventory:
- Enhance the system by incorporating advanced features to include detailed information such as make, model, and manufacturer for each vehicle in the inventory. This enriched data will provide users with comprehensive insights into the available vehicles, ensuring a more personalized and informed customer experience.
- Efficiently organize and manage vehicle records using VIN numbers, enabling seamless tracking and easy access to essential vehicle details, thus optimizing the inventory management process.

Sales:
- Elevate the Sales module to new heights by capturing and analyzing not only sales data but also salespeople and customer information. This comprehensive approach will empower the sales team to gain valuable insights into customer preferences, leading to more targeted and successful sales strategies.
- Introduce a dynamic sales history visualization tool that enables salespeople to explore their individual sales records, empowering them with data-driven feedback to enhance their performance and exceed their targets.

Service:
- Amplify the Service module's capabilities by incorporating comprehensive technician information, fostering a cohesive and proficient workforce. Empower service managers with real-time data on technicians' expertise and workloads, streamlining service operations for enhanced efficiency.
- Revolutionize the appointment scheduling process by introducing an intelligent scheduling system that optimizes service appointments based on technician availability and customer preferences. This feature will result in a seamless and customer-centric service experience.
- Enable users to search for service history using VIN numbers, ensuring quick and accurate access to a vehicle's past service records. Additionally, enhance customer satisfaction by displaying whether a customer purchased their vehicle from your lot, allowing service personnel to provide personalized service based on the customer's relationship with the dealership.

Team:

* Alex Levero-Sales
* Brian Johnson-Service

## Design

- [API design](docs/apis.md)
- [Data model](docs/data-model.md)
- [GHI](docs/ghi.md)


## Service microservice

The sales microservice relies on the following models for its API:
AutomobileVO
Technician
Appointment

AutomobileVO model was created with fields "vin" and "sold".  Poller was set up to poll every minute to inventory end point.  Poller was coded to update and/or create data and populate the AutomobileVO model.

Additionally, models "Appointment" and "Technician" were created.  Technician and Appointment models were created so CRUD could be performed via view functions created.  Data was then used to populate forms and list.


## Sales microservice

The sales microservice relies on the following models for its API:
AutomobileVO
Salesperson
Customer
Sale

Those models, alongside their associated API view functions, handle GET, POST, and DELETE requests to add, remove, and view data within the API.

A poller receives "vin" and "sold" data through the AutomobileVO from the Automobile model within the inventory microservice.

React is used as a front-end framework along with Bootstrap for basic CSS implementation to display various client-side webpages that allow the user to interact with the APIs.


## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create beta-data`
4. Run `docker compose build`
5. Run `docker compose up`
