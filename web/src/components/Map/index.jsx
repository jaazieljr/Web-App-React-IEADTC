import React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './styles.css'


function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC8YQEPAeYBkkFFV8H5gByB9r43cbUTAjk"
    })

    return (
        <div id= "map">{
            isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    center={{lat:-4.161952895554155,
                         lng: -40.748419845403916}}
                    zoom={18}
                >
                    <></>
                </GoogleMap>
            ) : <></>
        }
        </div>
    )

}

export { Map }