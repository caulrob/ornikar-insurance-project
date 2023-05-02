package StepDefinitions;

import PageObjects.HomePage;
import PageObjects.SouscriptionPage;
import Utilities.PropertiesReader;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TrouverMaVoitureSteps {

    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;
    HomePage home;
    public TrouverMaVoitureSteps() throws Exception {

        PropertiesReader propertiesReader = new PropertiesReader();
        this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
        home = new HomePage(driver, wait);
    }


    @Given("i'm in the home page")
    public void inHomePage() {

        home.homePageIsDisplayed();
    }

    SouscriptionPage  souscription = new SouscriptionPage(driver, wait);
    @Given("^Im in the home page$")
    public void im_in_the_home_page() throws Throwable {


        home.homePageIsDisplayed();
    }

    @When("^i want to estimate my insurance$")
    public void i_want_to_estimate_my_insurance() throws Throwable {
        home.jObtiensMonTarif();
    }

    @When("^i enter my plate number \"([^\"]*)\"$")
    public void i_enter_my_plate_number(String plate) {
        //souscription.continuerSansAccepterCookies();
        souscription.rechercheParPlaque();
        souscription.searchVehiculeImmatriculation(plate);
    }

    @Then("^the right \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" should be shown$")
    public void the_right_should_be_shown(String carModel , String immatriculation, String carburant, String puissance, String miseEnCirculation) throws Throwable {
        Assert.assertTrue(souscription.paqueIsDiplayed());
    }
}