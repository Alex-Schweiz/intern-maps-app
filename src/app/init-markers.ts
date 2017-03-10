export class Init {
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            let markers = [
                {
                    name: 'Opera House',
                    lat: 46.485556,
                    lng: 30.741667,
                    draggable: true
                },{
                    name: 'Arcadia',
                    lat: 46.431384,
                    lng: 30.761655,
                    draggable: true
                },{
                    name: 'Railway Station',
                    lat: 46.467708,
                    lng: 30.740766,
                    draggable: true
                }
            ];

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {

        }
    }
}