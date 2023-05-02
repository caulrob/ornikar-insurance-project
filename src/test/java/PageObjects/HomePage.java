package PageObjects;

import Utilities.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends BaseClass {

    public HomePage(WebDriver driver, WebDriverWait wait) {

        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//span[contains(text(),'Continuer sans accepter')]")
    private WebElement Continuer_sans_accepter_cookies;

    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[2]/div[1]")
    private WebElement je_prendre_mon_devis;

    @FindBy(xpath = "//body/div[@id='__next']/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]")
    private WebElement j_obtiens_mon_tarif;


    public boolean homePageIsDisplayed() {

        WaitUntilElementVisible(Continuer_sans_accepter_cookies);
        continuerSansAccepterCookies() ;
        WaitUntilElementVisible(j_obtiens_mon_tarif);

        return true;
    }

    public void continuerSansAccepterCookies() {

        Continuer_sans_accepter_cookies.click();
    }

    public void jePrendreMonDevis() {

        WaitUntilElementVisible(je_prendre_mon_devis);
        je_prendre_mon_devis.click();

    }

    public void jObtiensMonTarif() throws InterruptedException{


        Thread.sleep(1000);

//        WaitUntilElementVisible(Continuer_sans_accepter_cookies);
//        continuerSansAccepterCookies() ;
        Thread.sleep(500);
        WaitUntilElementVisible(j_obtiens_mon_tarif);
        j_obtiens_mon_tarif.click();

    }
}