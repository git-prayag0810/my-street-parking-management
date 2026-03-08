import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons not showing in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const center: [number, number] = [18.5204, 73.8567]; // Pune, India

export interface ParkingMarker {
  id: string;
  name: string;
  location: [number, number];
  available: number;
  pricePerHour: number;
}


// Helper to create custom circular markers for spots
const createCustomIcon = (availableSpots: number) => {
  const colorClass = availableSpots > 0 ? 'bg-emerald-500' : 'bg-red-500';
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div class="w-4 h-4 rounded-full border-2 border-white shadow-lg ${colorClass}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

interface MapComponentProps {
  searchTerm?: string;
  spots: ParkingMarker[];
  onBook: (id: string, name: string) => void;
}

export default function MapComponent({ searchTerm = '', spots, onBook }: MapComponentProps) {
  const filteredMarkers = spots.filter(marker =>
    marker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // We are using OpenStreetMap, so no loader wait is needed like with Google Maps
  return (
    <div className="w-full h-full min-h-[400px] relative rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 z-0">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={true}
        className="w-full h-full min-h-[400px] z-0"
      >
        {/* CartoDB Dark Matter tiles to maintain the dark theme */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {filteredMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            icon={createCustomIcon(marker.available)}
          >
            <Popup className="custom-popup">
              <div className="p-1 text-gray-900 min-w-[200px]">
                <h3 className="font-bold text-lg mb-2 border-b pb-1 !m-0">{marker.name}</h3>

                <div className="flex items-center justify-between mb-2 mt-2">
                  <span className="text-sm text-gray-600">Available Spots:</span>
                  <span className={`font-semibold px-2 py-1 rounded-full text-xs ${marker.available > 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                    }`}>
                    {marker.available > 0 ? marker.available : 'Full'}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Price:</span>
                  <span className="font-semibold text-blue-600 !m-0">₹{marker.pricePerHour}/hr</span>
                </div>

                <button
                  disabled={marker.available === 0}
                  className={`w-full py-2 rounded-lg font-medium text-white transition-all duration-200 transform ${marker.available > 0
                    ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg'
                    : 'bg-gray-400 cursor-not-allowed opacity-70'
                    }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onBook(marker.id, marker.name);
                  }}
                >
                  {marker.available > 0 ? 'Book Now' : 'Full'}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
