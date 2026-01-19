import java.util.Scanner;

public class SwitchProgram {
  public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  System.out.println("Enter a number from 1 to 3: ");
  int day = sc.nextInt();
  switch (day) {
   case 1:
     System.out.println("Monday");
     break;

   case 2:
     System.out.println("Tuesday");
     break;

   case 3:
     System.out.println("Wednesday");
     break;
   default:
     System.out.println("Invalid input");
  }
 }
}