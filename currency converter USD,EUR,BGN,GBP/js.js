//Напишете програма за конвертиране на парична сума от една валута в друга.Трябва да се поддържат
//следните валути: BGN, USD, EUR, GBP. Използвайте фиксирани валутни курсове.
//Входът e сума за конвертиране, входна валута и изходна валута, въведени от потребителя. Изходът е едно
//число – преобразуваната сума по посочените по-горе курсове, закръглен до 2 цифри след десетичната точка.
function currencyConverter([arg1, arg2, arg3]) {
    let bgnExRate = 1;
    let usdExRate = 1.79549;
    let euroExRate = 1.95583;
    let gbpExRate = 2.53405;

    let amount = Number(arg1);
    let currencyToConvertFrom = arg2.toUpperCase();
    let currencyToConvertTo = arg3.toUpperCase();

    if (currencyToConvertTo == 'BGN') {
        if (currencyToConvertFrom == 'USD') {
            console.log((amount * usdExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'EUR') {
            console.log((amount * euroExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'GBP') {
            console.log((amount * gbpExRate).toFixed(2));
        }
    }

    if (currencyToConvertTo == 'EUR') {
        if (currencyToConvertFrom == 'BGN') {
            console.log((amount / euroExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'USD') {
            console.log((amount * usdExRate / euroExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'GBP') {
            console.log((amount * gbpExRate / euroExRate).toFixed(2));
        }
    }

    if (currencyToConvertTo == 'GBP') {
        if (currencyToConvertFrom == 'BGN') {
            console.log((amount / gbpExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'USD') {
            console.log((amount * usdExRate / gbpExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'EUR') {
            console.log((amount * euroExRate / gbpExRate).toFixed(2));
        }
    }

    if (currencyToConvertTo == 'USD') {
        if (currencyToConvertFrom == 'BGN') {
            console.log((amount / usdExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'GBP') {
            console.log((amount * gbpExRate / usdExRate).toFixed(2));
        } else if (currencyToConvertFrom == 'EUR') {
            console.log((amount * euroExRate / usdExRate).toFixed(2));
        }
    }
}

currencyConverter(['12', 'USD', 'GBP']);