// src/config/venues.ts
import type { VenueProps } from './venue';

export const churchVenue: VenueProps = {
  type: 'church',
  title: 'CEREMONIA RELIGIOSA',
  venueName: 'PARROQUIA EL SEÑOR DE LA MISERICORDIA',
  time: '17:00 hrs',
  images: [
    '/images/church-1.jpg',
    '/images/church-2.jpg',
    '/images/church-3.jpg'
  ],
  googleMapsUrl: 'https://maps.google.com'
};

export const receptionVenue: VenueProps = {
  type: 'reception',
  title: 'RECEPCIÓN',
  venueName: 'SALÓN JARDÍN LAS ROSAS',
  time: '19:00 hrs',
  images: [
    '/images/reception-1.jpg',
    '/images/reception-2.jpg',
    '/images/reception-3.jpg'
  ],
  googleMapsUrl: 'https://maps.google.com'
};

// También podemos agregar una función helper para crear configuraciones personalizadas
export const createVenueConfig = (
  type: VenueProps['type'],
  {
    title,
    venueName,
    time,
    images,
    googleMapsUrl
  }: Omit<VenueProps, 'type'>
): VenueProps => ({
  type,
  title,
  venueName,
  time,
  images,
  googleMapsUrl
});