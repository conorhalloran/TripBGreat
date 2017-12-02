import React from 'react'
import ApiRoutes from '../lib/apiRoutes'

const { compose, withProps, lifecycle } = require('recompose')
const { withScriptjs } = require('react-google-maps')
const { StandaloneSearchBox } = require('react-google-maps/lib/components/places/StandaloneSearchBox')

const LocationSearch = compose(
	withProps({
		googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBlu8Q6t2H35YrdXo8j7233c4p1sAZjuU0&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />
	}),
	lifecycle({
		componentWillMount() {
			const refs = {}

			this.setState({
				places: [],
				onSearchBoxMounted: ref => {
					refs.searchBox = ref
				},
				onPlacesChanged: () => {
					const places = refs.searchBox.getPlaces()
					this.setState({ places })
					this.props.onPlacesChanged(places[0])
				}
			})
		}
	}),
	withScriptjs
)(props => (
	<div data-standalone-searchbox="">
		<StandaloneSearchBox ref={props.onSearchBoxMounted} bounds={props.bounds} onPlacesChanged={props.onPlacesChanged}>
			<input
				type="text"
				placeholder="Search for Location"
				style={{
					boxSizing: `border-box`,
					border: `1px solid transparent`,
					width: `240px`,
					height: `32px`,
					padding: `0 12px`,
					borderRadius: `3px`,
					//   boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
					fontSize: `14px`,
					outline: `none`,
					textOverflow: `ellipses`
				}}
			/>
		</StandaloneSearchBox>
		{/* <ol>
      {props.places.map(({ place_id, formatted_address, geometry: { location } }) => (
        <li key={place_id}>
          {formatted_address}
          {" at "}
          ({location.lat()}, {location.lng()})
        </li>
      ))}
    </ol> */}
	</div>
))

export default LocationSearch
