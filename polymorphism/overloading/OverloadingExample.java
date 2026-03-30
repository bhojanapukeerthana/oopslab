class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b) {
        return a + b;
    }
}

public class OverloadingExample {
    public static void main(String args[]) {
        Calculator obj = new Calculator();

        int result1 = obj.add(2, 4);
        int result2 = obj.add(3, 6, 7);
        double result = obj.add(3.4, 56.4);

        System.out.println("the sum of two integers: " + result1);
        System.out.println("the sum of three integers: " + result2);
        System.out.println("the sum of two double nums: " + result);
    }
}