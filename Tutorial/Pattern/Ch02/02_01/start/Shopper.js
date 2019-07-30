var Logger = require('./Logger');

var logger = new Logger();

class Shopper {
    constructor(name, money = 0){
        this.name = name;
        this.money = money;
        logger.log(`New Shpper: ${name} has ${money} in their account`);
    }
}
module.exports = Shopper;