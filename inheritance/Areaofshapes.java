abstract class Shape{
  abstract void area();
   }
class Circle extends Shape{
  int r = 4;
   void area(){
     double result = 3.14*r*r;
     System.out.println("area of circle"+ result);
   }
 }
class Rectangle extends Shape{
  int length = 4;
  int breadth = 5;
  void area(){
   double result = length*breadth;
   System.out.println("area of rectangle:"+ result);
  }
}
class Areaofshapes{
  public static void main(String args[]){
   Shape[] s = new Shape[2];
   s[0] = new Circle();
   s[0].area();
   s[1] = new Rectangle();
   s[1].area();
  }
}