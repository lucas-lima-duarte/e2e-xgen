var GLOBAL = require('../helper/globals.po.js')

var Compliments = function() {
    /* Labels */
    this.lblName = $('[translate="global_name"]'); //Padronizar
    
    /* Buttons */
    var btnNew = $('[data-e2e="btnNew"]');

    /* Methods */
    this.getDatagridUrl = () => {
        browser.get();
    };

    this.getCreateUrl = () => {
        browser.get(GLOBAL.CREATE_COMPLIMENTS);
    };

    this.new = () => {
        btnNew.click();
    }

    /* CREATE FORM */

    
    
    //Create Form
    var inputName = $('[data-e2e="TxtTitle"]'); //Mudar no arquivo a label do atributo
    var inputDepartament = $('[data-e2e="TxtSummary"]'); //Mudar no arquivo a label do atributo
    var inputPraise = element(by.xpath('/html/body/div[2]/div/main/div/div/form/div/div[2]/div/div/div/div/div[2]/div[2]/div[2]/div[1]/div/div/div/p'));
    var buttonSave = $('[data-e2e="BtnSave"]');

    this.fillRequiredFields = (name, departament, praise) => {
        inputName.sendKeys(name);
        inputDepartament.sendKeys(departament);
        inputPraise.sendKeys(praise);
    }

    this.save = () => {
        buttonSave.click()
    }
}

module.exports = new Compliments();