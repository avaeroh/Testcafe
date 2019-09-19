import { Selector, t } from "testcafe";

export default class ResultsPage {
    constructor(){
       this.title = Selector("title");
       this.trainLineTitle = 'Trainline';
    }
    
}