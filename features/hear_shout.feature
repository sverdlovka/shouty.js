Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Background:
    Given Lucy is at 0, 0

  @done
  Scenario Outline: only hear in-range shouts
    And Sean is at <Seans-location>
    When Sean shouts
    Then Lucy should hear <what-Lucy-hears>

    Examples: some simple examples
      | Seans-location | what-Lucy-hears |
      | 0, 900         | Sean            |
      | 800, 800       | nothing         |

  @done @wip
  Scenario: Multiple shouters
    Given people are located at
      | name         | x       | y   |
      | Sean         | 0       | 500 |
      | Oscar        | 1100    | 0   |
    When Sean shouts
    And Oscar shouts
    Then Lucy should not hear Oscar
    But Lucy should hear Sean

  Scenario: Multiple shouts from one person
    And Sean is at 0, 500
    When Sean shouts
    And Sean shouts
    Then Lucy should hear 2 shouts from Sean

  Rule: Shouters should not hear their own shouts
    Scenario: Shouter does not hear himself
      When Lucy shouts
      Then Lucy should not hear Lucy