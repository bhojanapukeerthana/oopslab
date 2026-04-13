 class Studentmarks{
   private int marks[]= { 34,90,34,56,67 };
  
  void displaymarks(){
   for(int i =0; i<marks.length;i++){
     System.out.println("marks of students:"+marks[i]);
    }
  }
   void displayaverage(){
    int sum=0;
    for(int i=0;i<marks.length;i++){
      sum+=marks[i];
    } 
    System.out.println("average marks:"+(sum/5.0));
   }
 }
public class Main{
   public static void main(String args[]){
    Studentmarks obj = new Studentmarks();
     obj.displaymarks();
     obj.displayaverage();

   }
}