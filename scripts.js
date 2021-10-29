/*1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в городе %Город% и работаю в компании %Компания%. Мои контактные данные: %Телефон%, %Почта%.».*/

console.log('Task number 1');

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш Город'),
    phone = prompt(' Ваш телефон'),
    email = prompt('Ваш email'),
    company = prompt('Компания в которой вы работаете');

console.log(`Меня зовут: ` + name + `Мне ` + age + `лет. ` + `Я проживаю в городе ` + city + ` и работаю в компании ` + company + ` Мои контактные данные: телефон ` + phone + ` Email ` + email);


/*2. Определите по введенному возрасту (исп. значение из задания 1) год рождения. Выведите на экран «%Имя% родился в %Год% году.».*/

console.log('Task number 2');

YearOfBirth = 2021 - age;

console.log(name + ` родился в ` + YearOfBirth + `году.`);


/*3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

console.log('Task number 3');

{let numStr = 345325;

let sum1 =+numStr[0] + +numStr[1] + +numStr[2];
let sum2 =+numStr[3] + +numStr[4] + +numStr[5];

console.log(sum1 == sum2 ? 'Да' : 'Нет');}


/*4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/

console.log('Task number 4');

{let a = -8;

switch (true) {
    case ( a > 0 ): result = 'Верно';
    break;
    case ( a == 0 ): result = 'Равно';
    break;
    case ( a < 0 ): result = 'Неверно';
    break;}

    console.log(result);}


/*5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.*/

console.log('Task number 5');

let a = 10;
 let b = 2;

 sum = a + b;
 raz = a - b;
 pro = a * b;
 chast = a / b;

 console.log('Сумма: ' + sum);
 console.log('Разность: ' + raz);
 console.log('Произведение: ' + pro);
 console.log('Частное: ' + chast);

if(a > 1) console.log(sum * sum);


/*6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.*/

console.log('Task number 6');

if ( a > 2 && a < 11) {console.log('Верно');}
else {console.log('Неверно');}

if ( b >= 6 && b < 14) {console.log('Верно');}
else {console.log('Неверно');}


/*7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/

console.log('Task number 7');

{let day = 35;

switch (true) {
    case (day > 0 && day <= 15): result = 'Первая четверть часа';
    break;
    case (day > 15 && day <= 30): result = 'Вторая четверть часа';
    break;
    case (day > 30 && day <= 45): result = 'Третья четверть часа';
    break;
    case (day > 45 && day <= 59): result = 'Четвёртая четверть часа';
    break;
}
console.log(result);}


/*8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

console.log('Task number 8');

{let day = 7;

switch (true) {
    case (day > 0 && day <= 10): result = 'Первая декада';
    break;
    case (day > 10 && day <= 20): result = 'Вторая декада';
    break;
    case (day > 20 && day <= 31): result = 'Третья декада';
    break;
}
console.log(result);}


/*9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно.*/

console.log('Task number 9');

   let day = 259;
    let years = day / 365 ;
    let month = years * 12;
    let weeks = month * 31 / 7 ;
    let hours = day * 24;
    let mins =  hours *60 ;
    let seconds = mins * 60;   
    
    console.log(`
        day: ${day}
        years: ${years}
        month: ${month}
        weeks: ${weeks}
        hours: ${hours}
        mins: ${mins}
        seconds: ${seconds}`);

if (day < 365) console.log('Меньше года');
if (month < 1) console.log('Меньше месяца');
if (weeks < 1) console.log('Меньше недели');


/*10. Напишите скрипт, который по введенному дню (исп. значение переменной из 9 задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch.*/

console.log('Task number 10');

{let day = 256;

switch (true) {
    case (day > 0 && day <= 30): result = 'Зима';
    break;
    case (day > 30 && day <= 120): result = 'Весна';
    break;
    case (day > 120 && day <= 210): result = 'лето';
    break;
    case (day > 210 && day <= 300): result = 'Весна';
    break;
    case (day > 300 && day <= 356 ): result = 'Зима';
    break;}

console.log(result);}