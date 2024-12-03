// src/types/venue.ts
export interface VenueProps {
    type: 'church' | 'reception';
    title: string;
    venueName: string;
    time: string;
    images: string[];
    googleMapsUrl: string;
  }