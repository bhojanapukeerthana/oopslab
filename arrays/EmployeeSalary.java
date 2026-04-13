public class EmployeeSalary{
 private int salary[] = new int[5];
  void entersalaries(){
  salary[0]=30000;
  salary[1]=34234;
  salary[2]=32222;
  salary[3]=40000;
  salary[4]=300000;
  }
 void displaysalaries(){
   System.out.println("employee salary:");
   for(int i =0; i <salary.length;i++){
      System.out.println(salary[i]);
   }
 }
 void highestsalary(){
   int max=salary[0];
   for(int i =1;i<salary.length;i++){
    if(salary[i]>max){
       max = salary[i];
    }
    System.out.println("Highest Salary = " + max);
  }
}
 public static void main(String args[]){
  EmployeeSalary obj=new EmployeeSalary();
  obj.entersalaries();
  obj.displaysalaries();
 }
}
