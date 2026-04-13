package banking;

public class Account {

    public void showPublic() {
        System.out.println("Public Method");
    }

    protected void showProtected() {
        System.out.println("Protected Method");
    }

    private void showPrivate() {
        System.out.println("Private Method");
    }
}