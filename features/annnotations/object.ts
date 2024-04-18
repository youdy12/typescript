const profile = {
  nameAr: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, nameAr }: { age: number; nameAr: string} = profile;

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
