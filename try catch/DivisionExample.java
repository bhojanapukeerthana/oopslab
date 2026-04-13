import java.util.Scanner;
public class DivisionExample{
  public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
     System.out.println("enter the first number:");
     int a = sc.nextInt();
     System.out.println("enter the second number:");
     int b = sc.nextInt();
     
     try{
       int result = a/b;
       System.out.println("result="+result);
     }
     catch(ArithmeticException e){
       System.out.println("error:caannot divide by zero");
      }
 
   }
}