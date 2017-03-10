import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable()
export class MarkerService extends Init {
    constructor(){
        super();
        this.load();
    }

    getMarkers(){
        let markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

    addMarker(newMarker){
        // fetch markers already there
        let markers = JSON.parse(localStorage.getItem('markers'));
        //Push to array
        markers.push(newMarker);
        //Set local storage again
        localStorage.setItem('markers', JSON.stringify(markers));
    }

    updateMarker(marker, newLat, newLng){
      let markers = JSON.parse(localStorage.getItem('markers'));

      for(let i = 0; i < markers.length; i++){
        if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
          markers[i].lat = newLat;
          markers[i].lng = newLng;
        }
      }
      localStorage.setItem('markers', JSON.stringify(markers));
    }

    removeMarker(marker){
      let markers = JSON.parse(localStorage.getItem('markers'));

      for(let i = 0; i < markers.length; i++){
        if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
          markers.splice(i, 1);
        }
      }

      localStorage.setItem('markers', JSON.stringify(markers));
    }


}




