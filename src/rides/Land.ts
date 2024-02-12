import { Ride } from './Ride';

export class Land {
  id!: number;
  name!: string;
  rides: Ride[] = [];

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
  }
}
