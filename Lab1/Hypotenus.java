import java.util.Scanner;
public class Hypotenus{
 public static void main(String args []){
 Scanner sc=new Scanner(System.in);
  double a;
  double b;
  double c;
  System.out.println("Enter the length of side A:");
  a = sc.nextDouble();
  System.out.println("Enter the length of side B:");
  b = sc.nextDouble();
  
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  System.out.println("the hypotense of the triangle is:"+ c +"cm");
 }
}