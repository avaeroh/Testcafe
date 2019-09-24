import { Selector, t } from "testcafe";
import HomePage  from './homepage.js';
import ResultsPage from "./resultspage.js";

const homePage = new HomePage;
const resultsPage = new ResultsPage;

fixture `Tests!`
    .page(homePage.baseUrl)
    .beforeEach( async t => {
        await t.maximizeWindow();
    })

    test('Search for train time, check search page title', async t => {
        await homePage.enterBothLocations(homePage.fromText, homePage.toText);
        await t
            .click(homePage.submitButton)
            .expect(resultsPage.title.innerText)
                .contains(resultsPage.trainLineTitle);
    })