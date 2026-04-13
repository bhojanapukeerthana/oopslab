class Bankaccount{
  private String accountholder;
  private int accountnumber;
  private double balance;
  
  public void setaccountholder(String accountholder){
    this.accountholder=accountholder;
  }
   public void setaccountnumber(int accountnumber){
    this.accountnumber=accountnumber;
  }
  public void setbalance(int balance){
    this.balance=balance;
  }
  public String getaccountholder(){
    return accountholder;
  }
   public int getaccountnumber(){
    return accountnumber;
  }
   public double getbalance(){
    return balance;
  }
  void deposit(int amount){
   balance+=amount;
  }
  void withdraw(double amount){
    if(amount<= balance){
     balance-=amount;
      System.out.println("your amount:"+amount);
    } 
    else{
      System.out.println("you cant withdraw amount");
    }
  }
}
public class Bankamount{
  public static void main(String args []){
   Bankaccount b = new Bankaccount();
   b.setaccountholder("dona");
   b.setaccountnumber(122332);
   b.setbalance(25457);
   
   System.out.println("Account holder:"+ b.getaccountholder());
   System.out.println("accountnumber:"+ b.getaccountnumber());
   System.out.println("balance:"+ b.getbalance());
}}