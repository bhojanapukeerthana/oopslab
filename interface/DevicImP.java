interface smartdevice{
   void turnon();
   void turnoff();
}
class Light implements smartdevice{
  public void turnon(){
   System.out.println("turned on");
  }
  public void turnoff(){
   System.out.println("turned off");
  }
}
class Fan implements smartdevice {

    public void turnon() {
        System.out.println("Fan is ON");
    }

    public void turnoff() {
        System.out.println("Fan is OFF");
    }
}
public class DevicImP{
 public static void main(String args[]){
   Light l = new Light();
   Fan f = new Fan();
   l.turnon();
   l.turnoff();
   f.turnon();
   f.turnoff();
 }
}