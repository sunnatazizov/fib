let n = parseInt(prompt('Введите число: '));
let fibonacci = [0, 1];
let sum = 1;
for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
for (let i = 0; i < fibonacci.length; i++) {
    sum += fibonacci[i];
}
console.log(`Сумма первых ${n + 1} чисел Фибоначчи: ${sum}`);
