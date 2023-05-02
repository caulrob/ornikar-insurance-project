package Utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;

public abstract class BaseClass {

    private static WebDriver driver;
    private static WebDriverWait wait;

    public BaseClass(WebDriver driver, WebDriverWait wait) {

        BaseClass.driver = driver;
        BaseClass.wait = wait;
    }

    protected void WaitUntilElementVisible(WebElement element) {

        wait.until(ExpectedConditions.visibilityOf(element));
    }

    protected void scrollToElement(WebElement element) {

        JavascriptExecutor js = (JavascriptExecutor) driver;

        //driver.executeScript("arguments[0].scrollIntoView(true);", element);
        js.executeScript("arguments[0].scrollIntoView(true);", element);

    }

}