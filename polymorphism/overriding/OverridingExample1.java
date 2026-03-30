class Bank {
    int getRateOfInterest() {
        return 0;
    }
}

class SBI extends Bank {
    int getRateOfInterest() {
        return 6;
    }
}

class HDFC extends Bank {
    int getRateOfInterest() {
        return 7;
    }
}

public class OverridingExample1 {
    public static void main(String[] args) {
        Bank b;

        b = new SBI();
        System.out.println("SBI Interest: " + b.getRateOfInterest());

        b = new HDFC();
        System.out.println("HDFC Interest: " + b.getRateOfInterest());
    }
}