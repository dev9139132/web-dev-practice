const display = document.querySelectorAll(".display");
const digits = document.querySelectorAll(".digits");
const operator = document.querySelector("#operators");
const btn = document.querySelector("#submit-btn");

btn.addEventListener('click', () => {
    const digit_1 = Number(digits[0].value);
    const digit_2 = Number(digits[1].value);

    console.log(digit_1);
    console.log(digit_2);
    const opr = operator.value;

    switch (opr) {
        case '+':
            display[0].innerText = (digit_1) + (digit_2);
            break;
        case '-':
            display[0].innerText = (digit_1) - (digit_2);
            break;
        case '/':
            display[0].innerText = (digit_1) / (digit_2);
            break;
        case '*':
            display[0].innerText = (digit_1) * (digit_2);
            break;
        default:
            display[0].innerText = "an error occured";
            break;
    }


    // switch (opr) {
    //     case '+':
    //         display[0].innerText = (digit_1) + (digit_2);
    //     case '-':
    //         display[0].innerText = (digit_1) - (digit_2);
    //     case '/':
    //         display[0].innerText = (digit_1) / (digit_2);
    //     case '*':
    //         display[0].innerText = (digit_1) * (digit_2);
    //     default:
    //         console.log("an error occured");
    // }
});