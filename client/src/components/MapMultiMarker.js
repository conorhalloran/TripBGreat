import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
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
	withStateHandlers(
		() => ({
			isOpen: false
		}),
		{
			onToggleOpen: ({ isOpen }) => () => ({
				isOpen: !isOpen
			})
		}
	),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: props.lat, lng: props.long }}
	>
		{props.isMarkerShown &&
			props.days.map(day => {
				return (
					<Marker
						key={day.id}
						position={{ lat: day.end_latitude, lng: day.end_longitude }}
						onClick={props.onToggleOpen}
					>
						{props.isOpen && (
							<InfoWindow onCloseClick={props.onToggleOpen}>
								<div>
									<p>{day.title}</p>
								</div>
							</InfoWindow>
						)}
					</Marker>
				)
			})}
	</GoogleMap>
))

class MapMultiMarker extends React.PureComponent {
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
		console.log('lat', this.props.lat)
		console.log('long', this.props.long)
		console.log('days', this.props.days)
		return (
			<MyMapComponent
				lat={this.props.trip.latitude}
				long={this.props.trip.longitude}
				days={this.props.days}
				isMarkerShown={true}
				onMarkerClick={this.handleMarkerClick}
			/>
		)
	}
}
export default MapMultiMarker
