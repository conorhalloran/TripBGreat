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

4.) Navigate to Client, Install Dependencies:

* `cd ../client`
* `npm install`

  5.) Create Client Side Environment Variables:

* Duplicate the file 'example.env' and rename to just '.env'
* In new file, insert your own Google Places API Key. This can be obtained from the following address: https://developers.google.com/places/web-service/get-api-key

  6.) Start React.js Client:

* `npm start`

  5.) Using the App

* Navigate to http://localhost:3001/
* To use the App and start creating trips, please create a user first.
