window.onload = function () {
    const rotate = document.getElementById('load').querySelector('span');

    rotate.animate(
        [
            { transform: 'rotate(0deg)'},
            { transform: 'rotate(180deg)'},
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(360deg)'}
        ],
        {
            duration: 5000,
            iterations: 4
        }
    );
};
