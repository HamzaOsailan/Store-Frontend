#Breakout for 30 minutes:
#create a feature file with one scenario -> google "Selenium WebDriver" and check result stats is not empty
#create the step definitions file and the test runner class
#optional: parameterize the search query

#Breakout Task: 45 minutes
#Optimize your feature file (background, scenario outline, examples, tags) to search for multiple queries
#Optimize your step def file to use hooks
#Optimize your test runner to show the cucumber.html report
#EXTRA: upgrade your code to implement the Page Object Model


#Breakout Assignment (45 minutes)
#refactor your project to implement the POM pattern
#Extra 1: refactor to implement fluent POM
#Extra 2: implement Allure Reporting

Feature: This is a Selenium Demo using Cucumber

  Background:
    Given my browser is open

  Scenario: Google Search - Standard
    When I navigate to google
    And I search for selenium webdriver
    Then result stats would not be empty

  Scenario: Google Search - Params
    When I navigate to google
    And I search for "Selenium WebDriver"
    Then result stats would not be empty

  @Regression
  Scenario: Google Search - Data Table
    When I navigate to google
    And I search for the following text:
      | selenium
      | webdriver
      | automation
    Then result stats would not be empty


  Scenario Outline: Google Search - Examples
    When I navigate to google
    And I search for "<query>"
    Then result stats would not be empty

    Examples:
      | query                     |
      |    Saudi Digital Academy  |
      |    Test Automation        |

  @BetterGherkin
  Scenario: Google Search - Better Gherkin
    When I search for something
    Then result stats would not be empty