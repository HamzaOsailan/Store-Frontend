package hellocucumber;


import demo.IsItFriday;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class StepDefinitions extends IsItFriday {
//    Implement the feature file from the 10 minute tutorial which had two working scenarios to check if today is Friday, make sure it works. https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java#add-another-failing-test
//    Refactor it to use Scenario outline and examples.
//    Practice the different ways to run your code (feature file, test runner class, mvn test)

private String today;
private String actualAnswer;

@Given("today is Friday")
public void today_is_Friday() {
today = "Friday";
}
    @Given("today is Sunday")
    public void today_is_sunday() {
        today="Sunday";
    }

@When("I ask whether it's Friday yet")
public void i_ask_whether_it_s_Friday_yet() {
actualAnswer = IsItFriday.isItFridaym(today);
}

@Then("I should be told {string}")
public void i_should_be_told(String expectedAnswer) {
assertEquals(expectedAnswer, actualAnswer);
}
@Given("today is {string}")
public void today_is(String today) {
this.today=today;
}

}
