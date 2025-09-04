let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let ans = document.getElementById('ans');

const sum = () => {
    val1 = parseInt(value1.value);
    val2 = parseInt(value2.value);

    ans.value = val1 + val2;
    value1.value = '';
    value2.value = '';
}
const sub = () => {
    val1 = parseInt(value1.value);
    val2 = parseInt(value2.value);

    ans.value = val1 - val2;
    value1.value = '';
    value2.value = '';
}
const mul = () => {
    val1 = parseInt(value1.value);
    val2 = parseInt(value2.value);

    ans.value = val1 * val2;
    value1.value = '';
    value2.value = '';
}
const division = () => {
    val1 = parseInt(value1.value);
    val2 = parseInt(value2.value);

    ans.value = val1 / val2;
    value1.value = '';
    value2.value = '';
}