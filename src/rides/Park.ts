import { Land } from './Land';

export class Park {
  id: number | undefined;
  name: string = '';
  lands: Land[] = [];

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
  }
}
