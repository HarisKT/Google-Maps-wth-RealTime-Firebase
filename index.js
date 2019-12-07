var firebaseConfig = {
    apiKey: "AIzaSyCH96BKQmc8Ug_SRNJmBgXdI_HI23jpeDA",
    authDomain: "alltestbase.firebaseapp.com",
    databaseURL: "https://alltestbase.firebaseio.com",
    projectId: "alltestbase",
    storageBucket: "alltestbase.appspot.com",
    messagingSenderId: "868872181139",
    appId: "1:868872181139:web:041b8029f0c2d4dcde4466"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  database5=firebase.database();

   /* for(i=0;i<firedata.length;i++){
          console.log(firedata[i]); 
          temp1=JSON.parse(firedata[i]);
          console.log(temp1.temp)
          strData = "&label=" + label +
         "&value=" +(temp1.temp); 
    }*/
    
    function initMap() {
        firedata5=new Array();
        //temp=new Array();
        i=0;  
           var leadsRef5 =database5.ref("bus/");
           leadsRef5.limitToLast(1).on('value', function(snapshot) {
           snapshot.forEach(function(childSnapshot) {
           var childData5 = childSnapshot.val();
           firedata5.push(childData5);
           data000001=firedata5[firedata5.length- 1];
           data000002=JSON.stringify(data000001);
           data000003=JSON.parse(data000002);
           console.log(data000003.lat);
           var lati=data000003.lat;
           console.log(data000003.lon);
           var long=data000003.lon;
           var uluru = {lat: lati  , lng: long};
          
           // The map, centered at Uluru
           var map = new google.maps.Map(
               document.getElementById('map'), {zoom: 12, center: uluru});
           // The marker, positioned at Uluru
           var marker = new google.maps.Marker({position: uluru});
           marker.setMap(map);
           marker.setAnimation(google.maps.Animation.BOUNCE);
           function redraw(){
           map.setCenter({lat: lati, lng : long, alt: 0})
           map_marker.setPosition({lat: lati, lng : long, alt: 0});
        }
        redraw()
        });

            });

            function redraw() {
            
        }
            
        // The location of Uluru
                   
         
     }
    
         