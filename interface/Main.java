interface Payment {
    void processPayment(double amount);
}

class PaymentImpl implements Payment {

    public void processPayment(double amount) {
        System.out.println("Payment processed: " + amount);
    }
}

public class Main {
    public static void main(String[] args) {

        double amounts[] = {500, 1200, 750};

        Payment p = new PaymentImpl();

        for (int i = 0; i < amounts.length; i++) {
            p.processPayment(amounts[i]);
        }
    }
}