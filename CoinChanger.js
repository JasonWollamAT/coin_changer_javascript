/**
 * Created by stephen.villot on 6/24/2016.
 */
var coinChangerMain = function(cents)
{
    var change = { "quarters": 0, "dimes": 0, "nickels": 0, "pennies": 0};

    while (cents != 0)
    {
        if (cents >= 25)
        {
            change["quarters"] += 1;
            cents -= 25;
        }
        else if (cents >= 10)
        {
            change["dimes"] += 1;
            cents -= 10;
        }
        else if (cents >= 5)
        {
            change["nickels"] += 1;
            cents -= 5;
        }
        else
        {
            change["pennies"] += 1;
            cents -= 1;
        }
    }

    return change;
};

module.exports = {
    CoinChangerMain : coinChangerMain
};