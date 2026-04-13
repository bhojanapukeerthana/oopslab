package result;

import student.Student;
public class Result{
 public void calculateresult(Student s){
  if(s.marks>=90){
   System.out.println("grade A");
  }
  else {
   System.out.println("grade B");
  }
 }
}