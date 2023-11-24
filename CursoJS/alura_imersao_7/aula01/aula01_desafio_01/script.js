var vlCotBTCReal = 182897.44;
var vlCotBTCDolar = 37434.70;
var vlCotETHReal = 10182.09;
var vlCotETHDolar = 2039.49;
var qtdBTC = 1;
var qtdETH = 1;

var valBTCemReal = (vlCotBTCReal * qtdBTC).toFixed(2);
var valBTCemDolar = (vlCotBTCDolar * qtdBTC).toFixed(2);
var valETHemReal = (vlCotETHReal * qtdETH).toFixed(2);
var vaETHemDolar = (vlCotETHDolar * qtdETH).toFixed(2);


alert(`- Valor de ${qtdBTC} Bitcoin é o que em: 
    Real R$ ${valBTCemReal} 
    Dolar $ ${valBTCemDolar}

- Valor de ${qtdETH} Ether é o que vale em:
    Real R$ ${valETHemReal} 
    Dolar $ ${valBTCemDolar}`);


/*

Bitcoin BTC 1 = Real R$ 182.897,44
Bitcoin BTC 1 = Dolar $ 37.343,70

Ether ETH 1 = Real R$ 10.182,09
Ether ETH 1 = Dolar $ 2.039,46

*/