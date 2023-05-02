Feature: As a user, I want to confirm that my car is found

  Scenario Outline: Successful confirmation that my car was found
    Given Im in the home page
    When i want to estimate my insurance
    And i enter my plate number "AA291AA"
    Then the right "<Car model>" "<Immatriculation>" "<Carburant>" "<Puissance>" "<Mise en circulation>" should be shown
    Examples:
      | Car model          | Immatriculation  | Carburant | Puissance | Mise en circulation |
      | VOLKSWAGEN PASSAT  | AA291AA          | GASOIL    | 8CV       | avril 2009          |
