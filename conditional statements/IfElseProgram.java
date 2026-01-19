import java.util.Scanner;

public class IfElseProgram {
 public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  System.out.print("Enter value of X: ");
  int X = sc.nextInt();
  System.out.print("Enter value of Y: ");
  int Y = sc.nextInt();
  if (X > Y) {
    System.out.println("X is greater than Y");
  } 
  else {
   System.out.println("X is lesser than Y");
  }

 }
}