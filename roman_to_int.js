var romanToInt = function(s) {
    const romanEquivalents = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    
    // Transforma a string em um array e pega seu comprimento.
    s = s.split('');
    strLength = s.length;

    let integerValue = 0;
    
    // Varre o array e verifica se existem combinações do tipo 2-símbolos-1-número e então soma o valor
    // de acordo com o cadastrado no objeto!
    for (let i=0; i<strLength; i++) {   
        let symbol = s[i] + s[i+1];

        if (symbol in romanEquivalents) {
            i++;
        } else {
            symbol = s[i];
        }

        integerValue += romanEquivalents[symbol];
    }

    return integerValue;
};

console.log(`III -> ${romanToInt('III')}`);
console.log(`LVIII -> ${romanToInt('LVIII')}`);
console.log(`MCMXCIV -> ${romanToInt('MCMXCIV')}\n`);
console.log(`IV -> ${romanToInt('IV')}`);
console.log(`IX -> ${romanToInt('IX')}`);

// 4 IV 5
// 9 IX 10
// 14 XIX 15
// 19 XIV 20
// 24 XXIV 25
// ...

// XL - 40;
// XC - 90;

// CD - 400;
// CM - 900;

