//package seleniumCucumber;
//
//import demo.IsItFriday;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//public class StepDef {
//    //    Implement the feature file from the 10 minute tutorial which had two working scenarios to check if today is Friday, make sure it works. https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java#add-another-failing-test
////    Refactor it to use Scenario outline and examples.
////    Practice the different ways to run your code (feature file, test runner class, mvn test)
//WebDriver driver;
//    private String today;
//    private String actualAnswer;
//
//    @Given("today is Friday")
//    public void today_is_Friday() {
//       driver=new ChromeDriver();
//    }
//
//    @When("I ask whether it's Friday yet")
//    public void i_ask_whether_it_s_Friday_yet() {
//
//    }
//
//    @Then("I should be told {string}")
//    public void i_should_be_told(String expectedAnswer) {
//        assertEquals(expectedAnswer, actualAnswer);
//    }
//
//}
