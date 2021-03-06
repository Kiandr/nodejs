var Shopper = require('./Shopper');

class ShopperCloned{
    constructor(name){
        this.name = name;
        this.shopper;
        
    }
    clone(){
        this.shopper =  new Shopper(this.name).clone();
        this.shopper.add('camping knife');
        this.shopper.add('tent');
        this.shopper.add('backpack');
        this.shopper.add('map');
        return this.shopper;
    }
    deepClone(){
        this.shopper =  new Shopper(this.name).deepClone();
        this.shopper.add('camping knife');
        this.shopper.add('tent');
        this.shopper.add('backpack');
        this.shopper.add('map');
        return this.shopper;
    }
    
}

module.exports = ShopperCloned;
