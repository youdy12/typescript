class Vehicle {
  constructor(public color: string) {
  };

  protected honk(): void {
    console.log('beep');
  }
}


// 부모자식 관계 x
// const vehicle = new Vehicle();
// vehicle.honk();

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// Car as a child class
// Vehicle as the superclass or the parent class
class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
    console.log(vehicle.color);
  };
  
  private drive(): void {
    console.log('vroom');
  }
  
  startDrivingProcess(): void {
    this.drive();
    this.honk();
    
  }
}

const car1 = new Car1(4, 'red');
car1.startDrivingProcess();
