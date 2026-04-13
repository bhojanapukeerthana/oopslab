import java.util.Arrays;
public class Arraysorted{
 public static void main(String args[]){
  int arr[]={23,56,22,46};
  Arrays.sort(arr);
  System.out.println("accending order:");
  for (int i = 0;i<arr.length;i++){
   System.out.println(arr[i] + " ");
  }
 }
}