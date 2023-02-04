import {MapContainer , Marker ,Popup, TileLayer} from "react-leaflet";
import './App.css';

function App() {
  const position = [45.508888, -73.561668]
  return (
    <div className="App">
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
}

export default App;
