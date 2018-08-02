import React from "react"

import {connect} from "react-redux";

const {compose, withProps} = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoBOLr9rMuocICrT1L8gurqiak2Rpx9-s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)(({ testStore, setCoordinate, setCoord }) => {
    const lat = testStore.length ? testStore[0].coord.lat : undefined;
    const ln = testStore.length ? testStore[0].coord.lon : undefined;
    return <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: 49.440563935076376, lng: 32.0641728985338}}
      onClick={setCoordinate}
    >
      <Marker/>
    </GoogleMap>
  }
);

export default connect(
  state => {
    console.log('state Input city', state);
    return ({
      testStore: state
    })
  },
  dispatch => {
    return ({
      // setCoordinate: (value) => {
      //   console.log(value);
      //   let lat = value.latLng.lat();
      //   let lng = value.latLng.lng();
      //
      //
      //   return AddCoord(dispatch, lat, lng)
      // },
      // setCityFromLS: (city) => {
      //
      //   city.map((item) => {
      //     return AddCity(dispatch, item)
      //   });
      // },
      setCoord: (lat = 49.440563935076376, lng = 32.0641728985338) => {
        return {
          lat: lat,
          lng: lng
        }
      }
    })
  }
)(MapWithAFusionTablesLayer);