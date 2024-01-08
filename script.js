const userInput = document.getElementById('text-input');
const palindromeBtn = document.getElementById('check-btn');
const userResult = document.getElementById('result');

const palindromeCheck = input => {
    const palindromeInput = input;

    if(input === ''){
        alert('Please input a value');
        return;
    }

    userResult.replaceChildren();

    const lowerCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let rerultMsg = `<strong>${palindromeInput}</strong> ${
        lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = rerultMsg;
    userResult.appendChild(pTag);

    userResult.classList.remove('hidden');
}

palindromeBtn.addEventListener("click", () => {
    palindromeCheck(userInput.value);
    userInput.value = '';
})

userInput.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        palindromeCheck(userInput.value);
        userInput.value = '';
    }
})