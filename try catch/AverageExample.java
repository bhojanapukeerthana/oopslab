import java.util.Scanner;

public class AverageExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int sum = 0;
        int count = 0;

        System.out.println("Enter numbers (enter -1 to stop):");

        while (true) {

            try {
                int num = sc.nextInt();

                if (num == -1) {
                    break;
                }

                sum = sum + num;
                count++;

            } catch (Exception e) {
                System.out.println("Invalid input! Enter number only.");
                sc.next(); // remove wrong input
            }
        }

        System.out.println("Average = " + (sum / (double) count));

        sc.close();
    }
}