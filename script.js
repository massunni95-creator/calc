const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        if (value === '=') {
            if (screenValue) {
                try {
                    screenValue = eval(screenValue);
                } catch (error) {
                    screenValue = 'Error';
                }
            }
        } else if (value === 'C') {
            screenValue = '';
        } else {
            screenValue += value;
        }

        screen.textContent = screenValue;
    });
});
