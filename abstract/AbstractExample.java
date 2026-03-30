abstract class Shape {

    // abstract method (no body)
    abstract void draw();

    // normal method
    void message() {
        System.out.println("This is a shape");
    }
}

// Child class 1
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

// Child class 2
class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing Rectangle");
    }
}

public class AbstractExample {
    public static void main(String[] args) {

        Shape s;

        s = new Circle();
        s.draw();

        s = new Rectangle();
        s.draw();

        s.message();
    }
}