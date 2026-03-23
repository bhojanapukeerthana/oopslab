class Animal {
    String name;
    int age;
    String diet;

    public void set_name(String nm) {
        name = nm;
    }

    public String getname() {
        return name;
    }

    public void set_age(int ag) {
        age = ag;
    }

    public int getage() {
        return age;
    }

    public void set_diet(String dt) {
        diet = dt;
    }

    public String getdiet() {
        return diet;
    }

    public void common() {
        System.out.println("It can eat");
        System.out.println("It can sleep");
    }
}

// Inheritance
class Mammal extends Animal {
    String fur_color;

    public void set_fur_color(String c) {
        fur_color = c;
    }

    public String get_fur_color() {
        return fur_color;
    }

    public void mam_fun() {
        System.out.println("It can run");
    }
}

// Main class
public class Zoo {
    public static void main(String args[]) {
        Mammal dog = new Mammal();

        dog.set_name("Tommy");
        dog.set_age(2);
        dog.set_diet("Non-veg");
        dog.set_fur_color("Gold");

        System.out.println("Name: " + dog.getname());
        System.out.println("Age: " + dog.getage());
        System.out.println("Diet: " + dog.getdiet());
        System.out.println("Fur: " + dog.get_fur_color());

        dog.common();
        dog.mam_fun();
    }
}