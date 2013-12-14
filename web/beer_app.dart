import 'package:polymer/polymer.dart';
import 'dart:html';

@CustomTag('beer-app')
class BeerAppElement extends PolymerElement {

  get applyAuthorStyles => true;
  
  BeerAppElement.created() : super.created() {
   
    Element e = $['addBarButton'];
    e.onClick.listen(addBar);
  }
  
  void addBar(event) {
    var modal = $['addBarPanel'];
    modal.show();
  }
}

