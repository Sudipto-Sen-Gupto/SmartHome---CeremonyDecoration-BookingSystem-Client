import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import UseAxios from '../../customHook/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Timer } from 'lucide-react';
const Map = () => {
       
      const mapRef=useRef(null)
      const axiosInstance=UseAxios();

      const {data:locations=[]}=useQuery({
         queryKey:['coverage'],
         queryFn:async()=>{
            const res= await axiosInstance.get('/maplocation');
            // console.log(res.data);
            return res.data
         }
      })

     const bangladeshPosition=[23.6850,90.3563]

     const handleSearch=(e)=>{
              
         e.preventDefault();
         const searchLocation=e.target.search.value;

         const districtLocation= locations.filter(loc=>loc.district.toLowerCase().includes(searchLocation.toLowerCase()));

        //  console.log(districtLocation);

         if(districtLocation){
             
           const { latitude, longitude } = districtLocation[0];
              const cord = [latitude, longitude];

            mapRef.current.flyTo(cord,14)
         }
        
     }

    return (
        <div >

            <div>
                {/* location={locations.length} */}
            </div>

            <div>
                <label className="input">
      <form onSubmit={handleSearch} className='flex items-center'>
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='search' required placeholder="Search" />
      </form>
</label>
            </div>
           
          <div className=' w-100 md:w-full h-200  border'>
             <MapContainer ref={mapRef} className='w-full h-[800px]'  center={bangladeshPosition} zoom={7} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {
    locations.map((location,index)=>{
        return  <Marker key={index} position={[location.latitude,location.longitude]}>
    <Popup>
     {location.covered_area.join(',')}
    </Popup>
  </Marker>
    })
  }
  
</MapContainer>
          </div>

        </div>
    );
};

export default Map;