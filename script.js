// console.log(1);


// setTimeout(() => {
//     console.log('УРААААААААААААААА');

// }, 5000);

// console.log(2);

// setTimeout(fan,5000)

// function fan() {
//     console.log(123);


// }

// let a = 6000
// setTimeout(fan,a)


// let interval = setInterval(() => {
//     console.log("ererererererere");

// }, 2000);
// setTimeout(() => {
//     clearInterval(interval)
// }, 9000);


const vvod = document.getElementById('vvod')
const btn = document.getElementById('btn')
const vyvod = document.getElementById('vyvod')


// function timer() {
//     for (let index = Number(vvod); index > 0; index--) {
//         vyvod.textContent = index

//     }
// }


function timer() {

    let time = Number(vvod.value)
    let interval = setInterval(() => {

        vyvod.textContent = time;
        time -= 1
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
        vyvod.textContent = "всё";
    }, Number(vvod.value * 1000));
}


btn.addEventListener("click", timer)