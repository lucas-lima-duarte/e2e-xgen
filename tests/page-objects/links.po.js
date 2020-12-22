var GLOBAL = require('../helper/globals.po.js')

var Link = function() {
    /* Labels */
    this.lblWord = $('[translate="form_edit_word"]'); //Padronizar
    this.lblMeaning = $('[translate="form_edit_meaning"]'); //Padronizar
    this.lblOption = null; //Não esta conseguindo localizar pelo locator atual
    this.lblDisplayInHome = $('[class="form-label-box ng-binding"]'); //Padronizar
    
    /* Buttons */
    var btnNew = $('[data-e2e="btnNew"]');
    var btnSave = $('[data-e2e="btnSave"]');
    var btnActive = $('[data-e2e="btnInactive"]');
    var btnSaveAndReturn = $('[data-e2e="btnSaveReturn"]');

    /* Inputs */
    var inputUrl = element(by.name('url'));
    var inputTitle = element(by.name('title'));
    var inputTags = element(by.model('newTag.text'));
    var inputHasFeatured = element(by.name('hasFeatured'));
    
    /* URLS */
    this.url = {
        list: GLOBAL.BASE_URL + 'admin/cms/usefullinks/',
        create: GLOBAL.BASE_URL + 'admin/cms/usefullinks/create/general'
    }

    /* Inputs */
    this.fillRequiredFields = (url) => {
        inputUrl.sendKeys(url);
    }

    this.fillAllFields = (title, tags, url) => {
        inputTitle.sendKeys(title);
        inputUrl.sendKeys(url);
        inputTags.sendKeys(tags);
        inputTags.sendKeys(protractor.Key.ESCAPE);
        inputTags.sendKeys(protractor.Key.TAB);
    }

    this.checkHasFeatured = () => {
        inputHasFeatured.click();
    }
    /* Buttons */
    this.new = () => {
        btnNew.click();
    }

    this.save = () => {
        btnSave.click()
    }

    this.saveAndReturn = () => {
        btnSaveAndReturn.click()
    }

    this.activate = () => {
        btnActive.click()
    }
}

module.exports = new Link();