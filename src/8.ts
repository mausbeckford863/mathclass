import java.util.*;

public class MathClass {
  public static void main(String[] args) {
    // Generate a random number between 1 and 10
    int randNum = (int)(Math.random() * 10 + 1);
    System.out.println("Random number: " + randNum);

    // Generate a random equation using the random number
    int num1 = randNum;
    int num2 = randNum;
    String operator = "+-*/";
    int answer = (int)(Math.random() * 4) + 1;
    switch (operator) {
      case "+":
        System.out.println(num1 + " + " + num2 + " = ");
        break;
      case "-":
        System.out.println(num1 + " - " + num2 + " = ");
        break;
      case "*":
        System.out.println(num1 + " * " + num2 + " = ");
        break;
      case "/":
        if (num2 != 0) {
          System.out.println(num1 + " / " + num2 + " = ");
        } else {
          System.out.println("Cannot divide by zero!");
        }
        break;
    }

    // Ask the user for their answer
    Scanner scanner = new Scanner(System.in);
    int userAnswer = scanner.nextInt();

    // Check if the user's answer is correct
    if (userAnswer == answer) {
      System.out.println("Correct!");
    } else {
      System.out.println("Incorrect, the answer was " + answer);
    }
  }
}
