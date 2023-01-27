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
}
currencyInit();
