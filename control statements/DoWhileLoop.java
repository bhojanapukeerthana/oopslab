import java.util.Scanner;

public class DoWhileLoop {
 public static void main(String args[]) {
  Scanner sc = new Scanner(System.in);
  System.out.print("Enter a number: ");
  int n = sc.nextInt();
  int i = 2;
  do {
   System.out.println(i);
   i = i + 2;
  } while (i <= n);

 }
}