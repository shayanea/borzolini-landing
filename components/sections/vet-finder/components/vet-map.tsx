"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { renderToStaticMarkup } from "react-dom/server";

// Icons components
const UserPinIcon = () => (
  <div className="relative flex h-10 w-10 items-center justify-center">
    <div className="absolute inset-0 animate-ping rounded-full bg-[#9c5cf6] opacity-75"></div>
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#9c5cf6] shadow-lg shadow-[#9c5cf6]/30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-white"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </div>
    <div className="absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium whitespace-nowrap text-[#17171c] shadow-lg">
      You are here
    </div>
  </div>
);

const ClinicPinIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700 transition-transform hover:scale-110">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-slate-400"
    >
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  </div>
);

const clinics = [
  { position: [40.715, -74.002], name: "City Veterinary Center" },
  { position: [40.71, -74.009], name: "Pet Emergency 24/7" },
  { position: [40.718, -74.005], name: "Dental Pet Clinic" },
];

export default function VetMap() {
  const userIcon = L.divIcon({
    html: renderToStaticMarkup(<UserPinIcon />),
    className: "bg-transparent",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const clinicIcon = L.divIcon({
    html: renderToStaticMarkup(<ClinicPinIcon />),
    className: "bg-transparent",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={14}
      scrollWheelZoom={false}
      className="z-0 h-full w-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="dark-map-tiles"
      />

      {/* User Location */}
      <Marker position={[40.7128, -74.006]} icon={userIcon} />

      {/* Clinics */}
      {clinics.map((clinic, index) => (
        <Marker
          key={index}
          position={clinic.position as [number, number]}
          icon={clinicIcon}
        >
          <Popup className="clinic-popup">
            <div className="font-medium text-slate-900">{clinic.name}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
