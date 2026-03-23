public class Bill{
 public static void main(String args []){
  int category= 5;
  int quantity= 4;
  int price =0;
   switch(category){
     case 1: price =100;break;
     case 2: price =200;break;
     case 3: price =400;break;
     case 4: price =150;break;
     case 5: price =600;break;
      default:
        System.out.println("invalid category");
        return;
    }
      double total = price * quantity;
      double discount = 0;
      if (total>2000)
      	discount =total*0.20;
      else if(total >1000)
 	discount = total*0.10;
      double finalbill = total - discount;
  	
 	System.out.println("total:" + total);
        System.out.println("discount:" + discount); 
        System.out.println("final bill:" + finalbill);
     
 }
}