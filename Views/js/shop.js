var gEntreeCount = 0;

function calculateTotal(idShop) {
    var fTotal = 0.0;
    var i = 0;

    var oTable = document.getElementById(idShop);

    var aCBTags = oTable.getElementsByTagName('INPUT');
    for (i = 0; i < aCBTags.length; i++) {

        if (aCBTags[i].checked) {

            var oTR = getParentTag(aCBTags[i], 'TR');


            var oTDPrice = oTR.getElementsByTagName('TD')[2];

            fTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };

    return Math.round(fTotal * 100.0) / 100.0;
};

function highlightSales(idTable, bShowSales) {

    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('TBODY')[0];
    var aTRs = oTBODY.getElementsByTagName('TR');

    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('sales') && aTRs[i].getAttribute('sales') == "true") {
            if (bShowSales) {
                aTRs[i].style.backgroundColor = "lightBlue";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};

function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};
window.addEventListener("load", function () {
    document.forms[0].txtAmt.value = calculateTotal('shop');
    document.querySelector("#calcTotal").addEventListener("click", function () {
        document.forms[0].txtAmt.value = calculateTotal('shop');
    });
    document.querySelector("#showSales").addEventListener("click", function () {
        highlightSales('shop', this.checked);
    });
});