class Shape{
  void area(){
   System.out.println("enter the shape");
   }
 }
 class Circle extends Shape{
   int r=5;
   void area(){
    double result= 3.14*r*r;
    System.out.println("result:"+ result);
   
    }
 }
 class Rectangle extends Shape{
   int length=2;
   int breadth=3;
   void area(){
   double result = length*breadth;
    System.out.println("enter the area of rectangle:"+ result);
   }
 }
class Triangle extends Shape{
   int b = 4, h =5;
    void area(){
     double result = 0.5*b*h;
     System.out.println("area of triangle:"+ result);
    }
 }
 public class Geometry{ 
   public static void main(String args []){
    Shape s;
     s= new Circle();
     s.area();
     s= new Rectangle();
     s.area();
     s=new Triangle();
     s.area();
   }
}