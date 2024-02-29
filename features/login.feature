Feature: Swag Labs - Login
background: User on the login page
    Given Teguh is on the login page

  Scenario : As a standard_user, i want to login in successfully
    When Teguh login with "standard_user" credential
    Then Teguh should see home page

  Scenario : As a standard_user, i want to login in successfully
    When Teguh login with "locked_out_user" credential
    Then Teguh should see error "Epic sadface: Sorry, this user has been locked out."
