public class Bonus{
 public static void main(String args []){
  String name = "raju";
  int age = 21;
  String department = "hazardous";
  int experience=7;
  double salary = 20000;
  double bonus;
  
  if (experience < 2){
    bonus =0;
  }
  else if (experience > 2 && experience <= 5){
    bonus = 0.10 * salary ;
  }
  else if (experience >5 && experience <=10){
    bonus = 0.20 *salary;
  }
  else {
   bonus = 0.35 * salary;
  }
   
  if (department.equalsIgnoreCase("hazardous")){
   bonus += 50000;
  }
  System.out.println("name" + name);
  System.out.println("age" + age);
  System.out.println("department" + department);
  System.out.println("salary" + salary);
  System.out.println("final bonus" +bonus);
 }
}