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
  
  Element addButtonElement = query("#add_button");
  Element adderElement = query("#adder");
  
  mapElement.hidden = false;
  adderElement.hidden = true;
  
  addButtonElement.onClick.listen((e) => toggleMap(mapElement, adderElement));
}

void toggleMap(Element mapElement, Element adderElement) {
  bool isMapVisible = !mapElement.hidden;
  mapElement.hidden = !isMapVisible;
  adderElement.hidden = !isMapVisible;
}
