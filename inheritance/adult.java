import java.util.*;

public class adult{
  public static void main(String args []){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the age of the person : ");
    int age = sc.nextInt();
    
   
    if (age > 18){
      System.out.println("Adult");
    }
    else {
      System.out.println("not adult");
    }
  }
}