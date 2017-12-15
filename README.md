# README

TripBGreat is a Project Management SPA specifically designed for trips.
Functionality includes itinerary planning using location coordinates
automatically generated with Google Maps API.

## TECHNOLOGIES USED:

* Ruby on Rails
* React.js
* JWT User Authentication
* Google Maps API

## GETTING STARTED:

1.) Clone this repository:

```
git clone git@github.com:conorhalloran/TripBGreat.git
```

2.) Navigate to API, Bundle It and Setup Database:

* `cd TripBGreat/api`
* `rails bundle`
* `db:create`
* `db:migrate`

  3.) Start API Server

```
rails s
```

4.) Navigate to Client, Install Dependencies, Start React.js Client:

* `cd ../client`
* `npm bundle`
* `npm run start`

  5.) Using the App

* Navigate to http://localhost:3001/
* To use the App and start creating trips, please create a user first.
