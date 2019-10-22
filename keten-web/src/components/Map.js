import React, { Component } from 'react';
import _ from 'lodash';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class ContactMap extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 24.7947253, lng: 120.9932316 }}
            >
                <Marker position={{ lat: 24.7947253, lng: 120.9932316 }} />
            </Map>

        );
    }
}
const mapStyles = {
    width: 500,
    height: 400
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAlQuGXqY6c0Ul2fYQlg2tn7CRNRRI_UJY'
})(ContactMap);