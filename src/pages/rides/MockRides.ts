import { Land } from './Land';
import { Ride } from './Ride';

export const mockRides = [
  new Land({
    id: 56,
    name: 'Adventureland',
    Rides: [
      new Ride({
        id: 134,
        name: 'Jungle Cruise',
        is_open: true,
        wait_time: 30,
        last_updated: '2024-02-04T02:25:32.000Z',
      }),
      new Ride({
        id: 137,
        name: 'Pirates of the Caribbean',
        is_open: true,
        wait_time: 25,
        last_updated: '2024-02-04T02:25:32.000Z',
      }),
      new Ride({
        id: 355,
        name: 'Swiss Family Treehouse',
        is_open: true,
        wait_time: 5,
        last_updated: '2024-02-04T02:25:32.000Z',
      }),
      new Ride({
        id: 141,
        name: 'The Magic Carpets of Aladdin',
        is_open: true,
        wait_time: 10,
        last_updated: '2024-02-04T02:25:32.000Z',
      }),
      new Ride({
        id: 334,
        name: "Walt Disney's Enchanted Tiki Room",
        is_open: true,
        wait_time: 10,
        last_updated: '2024-02-04T02:25:32.000Z',
      }),
    ],
  }),
  new Land({
    id: 57,
    name: 'Fantasyland',
  }),
  new Land({
    id: 58,
    name: 'Frontierland',
  }),
  new Land({
    id: 60,
    name: 'Liberty Square',
  }),
  new Land({
    id: 61,
    name: 'Main Street, U.S.A.',
  }),
  new Land({
    id: 62,
    name: 'Tomorrowland',
  }),
];
