$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TrouverMaVoitureSteps.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to confirm that my car is found",
  "description": "",
  "id": "as-a-user,-i-want-to-confirm-that-my-car-is-found",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful confirmation that my car was found",
  "description": "",
  "id": "as-a-user,-i-want-to-confirm-that-my-car-is-found;successful-confirmation-that-my-car-was-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Im in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i want to estimate my insurance",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i enter my plate number \"AA291AA\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the right \"\u003cCar model\u003e\" \"\u003cImmatriculation\u003e\" \"\u003cCarburant\u003e\" \"\u003cPuissance\u003e\" \"\u003cMise en circulation\u003e\" should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-confirm-that-my-car-is-found;successful-confirmation-that-my-car-was-found;",
  "rows": [
    {
      "cells": [
        "Car model",
        "Immatriculation",
        "Carburant",
        "Puissance",
        "Mise en circulation"
      ],
      "line": 9,
      "id": "as-a-user,-i-want-to-confirm-that-my-car-is-found;successful-confirmation-that-my-car-was-found;;1"
    },
    {
      "cells": [
        "VOLKSWAGEN PASSAT",
        "AA291AA",
        "GASOIL",
        "8CV",
        "avril 2009"
      ],
      "line": 10,
      "id": "as-a-user,-i-want-to-confirm-that-my-car-is-found;successful-confirmation-that-my-car-was-found;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5980753300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successful confirmation that my car was found",
  "description": "",
  "id": "as-a-user,-i-want-to-confirm-that-my-car-is-found;successful-confirmation-that-my-car-was-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Im in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i want to estimate my insurance",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i enter my plate number \"AA291AA\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the right \"VOLKSWAGEN PASSAT\" \"AA291AA\" \"GASOIL\" \"8CV\" \"avril 2009\" should be shown",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TrouverMaVoitureSteps.im_in_the_home_page()"
});
formatter.result({
  "duration": 786233900,
  "status": "passed"
});
formatter.match({
  "location": "TrouverMaVoitureSteps.i_want_to_estimate_my_insurance()"
});
formatter.result({
  "duration": 2952227400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AA291AA",
      "offset": 25
    }
  ],
  "location": "TrouverMaVoitureSteps.i_enter_my_plate_number(String)"
});
formatter.result({
  "duration": 60635276700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027__next\u0027]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]\"}\n  (Session info: chrome\u003d112.0.5615.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RDK6M0N\u0027, ip: \u0027192.168.1.158\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 112.0.5615.138, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: C:\\Users\\bob\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:64438}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5a77b72bf5eef3c382e5182b2a9dfe62\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027__next\u0027]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat PageObjects.SouscriptionPage.searchVehiculeImmatriculation(SouscriptionPage.java:62)\r\n\tat StepDefinitions.TrouverMaVoitureSteps.i_enter_my_plate_number(TrouverMaVoitureSteps.java:49)\r\n\tat ✽.And i enter my plate number \"AA291AA\"(TrouverMaVoitureSteps.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "VOLKSWAGEN PASSAT",
      "offset": 11
    },
    {
      "val": "AA291AA",
      "offset": 31
    },
    {
      "val": "GASOIL",
      "offset": 41
    },
    {
      "val": "8CV",
      "offset": 50
    },
    {
      "val": "avril 2009",
      "offset": 56
    }
  ],
  "location": "TrouverMaVoitureSteps.the_right_should_be_shown(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1071766700,
  "status": "passed"
});
});