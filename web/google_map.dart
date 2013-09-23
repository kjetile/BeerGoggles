import 'package:polymer/polymer.dart';
import 'package:google_maps/google_maps.dart';
import 'dart:html';

@CustomTag('google-map')
class GoogleMapElement extends PolymerElement {
  
  created() {
    super.created();
    
    final mapOptions = new MapOptions()
    ..zoom = 8
    ..center = new LatLng(-34.397, 150.644)
    ..mapTypeId = MapTypeId.ROADMAP
    ;
    
    final map = new GMap(query("#map_canvas"), mapOptions);
    
  }
}