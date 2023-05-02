package PageObjects;

import Utilities.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SouscriptionPage extends BaseClass {


    public SouscriptionPage(WebDriver driver, WebDriverWait wait) {

        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//span[contains(text(),'Continuer sans accepter')]")
    private WebElement Continuer_sans_accepter_cookies;

    @FindBy(xpath = "//body/div[@id='__next']/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]")
    private WebElement recherche_par_plaque;

    @FindBy(xpath = "//input[@id='vehiculeImmatriculation']")
    private WebElement quelle_est_votre_plaque_d_immatriculation;

    @FindBy(xpath = "//input[@id='vehiculeImmatriculation']")
    private WebElement vehicule_immatriculation;

    @FindBy(xpath = "//body/div[@id='__next']/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[2]/button[1]/div[1]")
    private WebElement confirmer;

    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/h5[1]")
    private WebElement plaque;


    public boolean SouscriptionPageIsDisplayed() {

        WaitUntilElementVisible(Continuer_sans_accepter_cookies);
        Continuer_sans_accepter_cookies.click();
        WaitUntilElementVisible(recherche_par_plaque);
        recherche_par_plaque.click();
        return true;
    }

    public void continuerSansAccepterCookies() {

        Continuer_sans_accepter_cookies.click();
    }

    public void rechercheParPlaque() {

        WaitUntilElementVisible(recherche_par_plaque);
        recherche_par_plaque.click();

    }

    public void searchVehiculeImmatriculation(String plate) {

        WaitUntilElementVisible(vehicule_immatriculation);
        recherche_par_plaque.sendKeys("plate");

    }

    public void confirmer() {

        WaitUntilElementVisible(confirmer);
        confirmer.click();

    }

    public boolean paqueIsDiplayed() {

        WaitUntilElementVisible(plaque);

        return plaque.isDisplayed();
    }
}