import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css";
import LeafletGeocoder from "./LeafletGeocoder ";
 import LeafletRoutingMachine from "./LeafletRoutingMachine ";

function App() {
  const position = [45.508888, -73.561668];
  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {/* <LeafletGeocoder /> */}
        <LeafletRoutingMachine />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776063.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;