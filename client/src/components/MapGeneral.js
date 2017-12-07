import React from 'react'
import { compose, withProps } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow
} from 'react-google-maps'

const MyMapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyBlu8Q6t2H35YrdXo8j7233c4p1sAZjuU0&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: props.lat, lng: props.long }}
	>
		{props.isMarkerShown && (
			<Marker
				position={{ lat: props.lat, lng: props.long }}
				onClick={props.onMarkerClick}
			/>
		)}
	</GoogleMap>
))

class MapGeneral extends React.PureComponent {
	state = {
		isMarkerShown: false
	}

	componentDidMount() {
		this.delayedShowMarker()
	}

	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({ isMarkerShown: true })
		}, 2000)
	}

	handleMarkerClick = () => {
		this.setState({ isMarkerShown: false })
		this.delayedShowMarker()
	}

	render() {
		console.log('day', this.props)
		return (
			<MyMapComponent
				lat={this.props.day.start_latitude}
				long={this.props.day.start_longitude}
				endLat={this.props.day.end_latitude}
				endLong={this.props.day.end_longitude}
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
			/>
		)
	}
}
export default MapGeneral