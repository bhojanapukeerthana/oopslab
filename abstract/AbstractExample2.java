abstract class Vehicle {

    // abstract method
    abstract void start();

    // normal method
    void fuelType() {
        System.out.println("Vehicles need fuel");
    }
}

// Child class 1
class Car extends Vehicle {
    void start() {
        System.out.println("Car starts with key");
    }
}

// Child class 2
class Bike extends Vehicle {
    void start() {
        System.out.println("Bike starts with kick or button");
    }
}

public class AbstractExample2 {
    public static void main(String[] args) {

        Vehicle v;

        v = new Car();
        v.start();

        v = new Bike();
        v.start();

        v.fuelType();
    }
}