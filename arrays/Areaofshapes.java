abstract class Shape{
 abstract void area();
}
class Circle extends Shape{
  double radius;
  Circle(double radius){
   this.radius=radius;
  }
 void area(){
  double result=3.14*radius*radius;
  System.out.println("area of circle:"+result);
 }
}
class Rectangle extends Shape{
  double length;
  double breadth;
   Rectangle( double length,double breadth){
   this.length=length;
   this.breadth=breadth;
   }
   
   void area(){
    double result = length*breadth;
    System.out.println("area of rectangle:"+result);
   }
 }

public class Areaofshapes{
  public static void main(String args []){
   Shape shapes[] = new Shape[2];
    shapes[0] = new Circle(5);
    shapes[1] = new Rectangle(2,5);
     shapes[0].area();
     shapes[1].area();
   }
}