function currencyInit() {
    const amountElement = document.getElementById('amount');
    const currencyElement = document.getElementById('currency');
    const convertButtonElement = document.getElementById('convert');
    const resultElement = document.getElementById('result');
    
    convertButtonElement.addEventListener('click', renderResult);
    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            action();
        };
    });

    function renderResult() {
        resultElement.textContent = conversion();
    };

    function conversion() {
        if(amountElement.value === '') {
            return 'Please write an amount';
        };
        if(currencyElement.value === '') {
            return 'Please choose a currency';
        };
        return Math.floor(amountElement.value * currencyElement.value);
    };

    async function valueOption() {
        const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nok.json';
        const response = await fetch(url);
        const result = await response.json();

        renderSeelect(result);
    }

    valueOption();

    function renderSeelect(result) {
        const optionEurElement = document.createElement('option');
        const optionUsdElement = document.createElement('option');

        optionEurElement.setAttribute('value', result.nok.eur);
        optionUsdElement.setAttribute('value', result.nok.usd);

        optionEurElement.textContent = 'Euro';
        optionUsdElement.textContent = 'Dollar';

        currencyElement.appendChild(optionEurElement);
        currencyElement.appendChild(optionUsdElement);
    }
}
currencyInit();
