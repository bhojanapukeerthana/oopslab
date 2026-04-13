import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        try {
            File file = new File("students.txt");
            Scanner sc = new Scanner(file);

            ArrayList<String> names = new ArrayList<>();

            // Read file (loop needed here, file reading requires it)
            while (sc.hasNextLine()) {
                names.add(sc.nextLine());
            }
            sc.close();

            // Sort names
            Collections.sort(names);

            // WITHOUT LOOP (direct printing)
            System.out.println("Sorted Student Names:");

            System.out.println(names.get(0));
            System.out.println(names.get(1));
            System.out.println(names.get(2));
            System.out.println(names.get(3));
            System.out.println(names.get(4));

        } catch (Exception e) {
            System.out.println("Error reading file!");
        }
    }
}