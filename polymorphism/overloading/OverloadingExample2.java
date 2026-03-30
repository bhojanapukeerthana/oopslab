class AreaCalculator {

    // Area of square
    public int area(int side) {
        return side * side;
    }

    // Area of rectangle
    public int area(int length, int breadth) {
        return length * breadth;
    }

    // Area of circle
    public double area(double radius) {
        return 3.14 * radius * radius;
    }
}

public class OverloadingExample2 {
    public static void main(String[] args) {

        AreaCalculator obj = new AreaCalculator();

        int squareArea = obj.area(5);
        int rectangleArea = obj.area(4, 6);
        double circleArea = obj.area(3.5);

        System.out.println("Area of square: " + squareArea);
        System.out.println("Area of rectangle: " + rectangleArea);
        System.out.println("Area of circle: " + circleArea);
    }
}