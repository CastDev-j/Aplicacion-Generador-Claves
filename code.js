var range = document.getElementById('character-range');
var rangeNumber = document.querySelector('.password-characters');
const passwordCase = document.querySelector('.password-generated');
const copyPassword = document.querySelector('.img-copy-pw')
var passwordCopied = document.querySelector('.copy-password-text')


copyPassword.addEventListener('click', function () {
    if (passwordCase.textContent == 'P4$5W0rD!') {

    } else {
        var range = document.createRange();
        range.selectNode(passwordCase);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');


        window.getSelection().removeAllRanges();

        passwordCopied.style.display = 'inline-block';
        setTimeout(() => {
            passwordCopied.style.opacity = 1;
        }, 100);
    }
})

range.addEventListener('input', function () {
    var currentValue = parseInt(range.value);
    rangeNumber.innerHTML = currentValue;
});

var difficult = 0;
const textLevel = document.querySelector('.level-text')
const levelOne = document.querySelector('#level-1')
const levelTwo = document.querySelector('#level-2')
const levelThree = document.querySelector('#level-3')
const levelFour = document.querySelector('#level-4')


function handleCheckboxChange(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    var checkedbox = document.getElementById('box-' + checkboxId);
    var checkedArrow = document.getElementById('arrow-' + checkboxId);

    if (checkbox.checked == true) {
        checkedbox.style.border = '2px solid var(--color-green)';
        checkedbox.style.backgroundColor = 'var(--color-green)';
        checkedArrow.style.opacity = '1';
        difficult++
    } else {
        checkedbox.style.border = '2px solid var(--color-text-primary)';
        checkedbox.style.backgroundColor = 'var(--color-bg-secondary)';
        checkedArrow.style.opacity = '0';
        difficult--
    }

    console.log(difficult);

    if (difficult == 0) {
        textLevel.textContent = '';

        levelOne.style.backgroundColor = 'var(--color-bg-th)';
        levelOne.style.border = '2px solid var(--color-text-primary)';

        levelTwo.style.backgroundColor = 'var(--color-bg-th)';
        levelTwo.style.border = '2px solid var(--color-text-primary)';

        levelThree.style.backgroundColor = 'var(--color-bg-th)';
        levelThree.style.border = '2px solid var(--color-text-primary)';

        levelFour.style.backgroundColor = 'var(--color-bg-th)';
        levelFour.style.border = '2px solid var(--color-text-primary)';
    }
    if (difficult == 1) {
        textLevel.textContent = 'TOO WEAK!';

        levelOne.style.backgroundColor = 'var(--color-red)';

        levelTwo.style.backgroundColor = 'var(--color-bg-th)';
        levelTwo.style.border = '2px solid var(--color-text-primary)';

        levelThree.style.backgroundColor = 'var(--color-bg-th)';
        levelThree.style.border = '2px solid var(--color-text-primary)';

        levelFour.style.backgroundColor = 'var(--color-bg-th)';
        levelFour.style.border = '2px solid var(--color-text-primary)';
    }
    if (difficult == 2) {
        textLevel.textContent = 'WEAK';

        levelOne.style.backgroundColor = 'var(--color-orange)';
        levelOne.style.border = '2px solid var(--color-orange)';

        levelTwo.style.backgroundColor = 'var(--color-orange)';
        levelTwo.style.border = '2px solid var(--color-orange)';

        levelThree.style.backgroundColor = 'var(--color-bg-th)';
        levelThree.style.border = '2px solid var(--color-text-primary)';

        levelFour.style.backgroundColor = 'var(--color-bg-th)';
        levelFour.style.border = '2px solid var(--color-text-primary)';
    }
    if (difficult == 3) {
        textLevel.textContent = 'MEDIUM';

        levelOne.style.backgroundColor = 'var(--color-yellow)';
        levelOne.style.border = '2px solid var(--color-yellow)';

        levelTwo.style.backgroundColor = 'var(--color-yellow)';
        levelTwo.style.border = '2px solid var(--color-yellow)';

        levelThree.style.backgroundColor = 'var(--color-yellow)';
        levelThree.style.border = '2px solid var(--color-yellow)';

        levelFour.style.backgroundColor = 'var(--color-bg-th)';
        levelFour.style.border = '2px solid var(--color-text-primary)';
    }
    if (difficult == 4) {
        textLevel.textContent = 'STRONG';

        levelOne.style.backgroundColor = 'var(--color-green)';
        levelOne.style.border = '2px solid var(--color-green)';

        levelTwo.style.backgroundColor = 'var(--color-green)';
        levelTwo.style.border = '2px solid var(--color-green)';

        levelThree.style.backgroundColor = 'var(--color-green)';
        levelThree.style.border = '2px solid var(--color-green)';

        levelFour.style.backgroundColor = 'var(--color-green)';
        levelFour.style.border = '2px solid var(--color-green)';
    }

}

document.getElementById('uppercase').addEventListener('change', function () {
    handleCheckboxChange('uppercase');
});

document.getElementById('lowercase').addEventListener('change', function () {
    handleCheckboxChange('lowercase');
});

document.getElementById('numbers').addEventListener('change', function () {
    handleCheckboxChange('numbers');
});

document.getElementById('symbols').addEventListener('change', function () {
    handleCheckboxChange('symbols');
});










var broma = '';
const generate = document.querySelector('.generate-password')

generate.addEventListener('click', function () {
    passwordCopied.style.opacity = 0;
    passwordCase.style.opacity = 1;
    passwordCase.style.color = 'var(--color-text-primary)';
    setTimeout(() => {
        passwordCopied.style.display = 'none';
    }, 300);
    var longValue = parseInt(range.value);
    passwordCase.textContent = '';

    if (difficult == 0) {
        for (let i = 1; i <= longValue; i++) {
            broma += i;
        }
        passwordCase.textContent = broma;
        broma = '';
    } else {
        var arraySimbols = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            arraySimbols.push(checkbox.id)
        });
        passwordCase.textContent = generateRandomPassword(longValue, arraySimbols);
    }
})


function generateRandomPassword(length, charTypes) {
    const charSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    let allChars = '';

    charTypes.forEach(type => {
        if (charSets[type]) {
            allChars += charSets[type];
        }
    });

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}