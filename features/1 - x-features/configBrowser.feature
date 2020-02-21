Feature: ConfigBrowser

Scenario Outline: Access Perfil Browser

    Given I am open Google Account
    When I inform email "<email>"
    Then I put password "<password>"

Examples:
 | email          | password |
 | afranio.junior@gympass.com | 000*Sirilo83*000 |