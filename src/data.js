import mtFujiImg from './images/travel_images/fuji.png';
import sydneyImg from './images/travel_images/sydney.png';
import norwayImg from './images/travel_images/norway.png';

const data = [
  {
    id: 1,
    country: 'JAPAN',
    mapLink:
      'https://www.google.com/maps/d/viewer?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&hl=en&ll=35.36479441415821%2C138.763048&z=13',
    locationImg: mtFujiImg,
    location: 'Mount Fuji',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
  },
  {
    id: 2,
    country: 'AUSTRALIA',
    mapLink:
      'https://www.google.com/maps/d/viewer?mid=1NYBTZlF3StQEf65_sVbpMlskCoo&hl=en&ll=-33.85691%2C151.215262&z=17',
    locationImg: sydneyImg,
    location: 'Sydney Opera House',
    startDate: '27 May, 2021',
    endDate: '8 Jun, 2021',
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
  },
  {
    id: 3,
    country: 'NORWAY',
    mapLink:
      'https://www.google.com/maps/d/viewer?hl=en_US&mid=1zi9bW9Zkl8ExIwx-ZNbeChUSK38&ll=62.0860509464467%2C7.088046986968988&z=13',
    locationImg: norwayImg,
    location: 'Geirangerfjord',
    startDate: '01 Oct, 2021',
    endDate: '18 Nov, 2021',
    description:
      'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
  },
];

export default data;
