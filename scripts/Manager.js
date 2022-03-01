
function beerQuantity() {
    // Using a local variable to collect the items.

    var collector = [];

//
    for (i = 0; i < DBstock.stock.length; i++) {
        if (DBstock.stock[i].visible==true) {
            collector.push([
                articleID = DBstock.stock[i].articleid,
                quantity = DBstock.stock[i].quantity
            ]);
        }
    }


    //
    return collector;
}



