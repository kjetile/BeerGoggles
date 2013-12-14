import 'dart:html';
import 'package:google_maps/google_maps.dart';

void main() {
      
  final mapOptions = new MapOptions()
    ..zoom = 8
    ..center = new LatLng(-34.397, 150.644)
    ..mapTypeId = MapTypeId.ROADMAP
    ;
  
  Element mapElement = query("#map_canvas");
  final map = new GMap(mapElement, mapOptions);
}
