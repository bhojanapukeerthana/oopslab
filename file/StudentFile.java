import java.io.FileWriter;
import java.io.File;
import java.util.Scanner;

public class StudentFile {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            // 🔹 Take input
            System.out.print("Enter name: ");
            String name = sc.nextLine();

            System.out.print("Enter marks: ");
            int marks = sc.nextInt();

            // 🔹 Write to file
            FileWriter fw = new FileWriter("student.txt");
            fw.write("Name: " + name + "\n");
            fw.write("Marks: " + marks);
            fw.close();

            System.out.println("Data saved!\n");

            // 🔹 Read from file
            File file = new File("student.txt");
            Scanner read = new Scanner(file);

            System.out.println("Reading from file:");

            while (read.hasNextLine()) {
                System.out.println(read.nextLine());
            }

            read.close();

        } catch (Exception e) {
            System.out.println("Error!");
        }

        sc.close();
    }
}