export class Ride {
  id: number | undefined;
  name: string = '';
  imageUrl: string = '';
  wait_time: number = 0;
  is_open: boolean = false;
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.wait_time) this.wait_time = initializer.wait_time;
    if (initializer.is_open) this.is_open = initializer.isActive;
  }
}
