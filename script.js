const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const button = document.querySelector('button');
const ageContainer = document.querySelector('.age_num');
const emptyPopup = document.querySelector('.empty-popup');
const date = new Date();

let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

//here we'll add how many days does each month has............
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//..............1....2..3...4...5...6...7...8...9...10..11..12.


button.addEventListener('click', () => {

    const inputDay = dayInput.value;
    const inputMonth = monthInput.value;
    const inputYear = yearInput.value;

    if (!inputDay || !inputMonth || !inputYear) {
        document.body.classList.add('active-empty-popup');
        return;
    } else {
        emptyPopup.style.display = 'none';
    }

    let day = date.getDate();
    let month = 1 + date.getMonth();
    let year = date.getFullYear();

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        months[1] = 29; // February has 29 days in a leap year
    } else {
        months[1] = 28;
    }
    if (dayInput.value > day) {
        day = day + months[month - 1];
        month = month - 1;
    }
    if (monthInput.value > month) {
        month = month + 12;
        year = year - 1;
    }


    const birthDay = day - dayInput.value;
    const birthMonth = month - monthInput.value;
    const birthYear = year - yearInput.value;
    console.log(birthDay, birthMonth, birthYear);
    console.log(day, month, year);

    ageContainer.innerHTML = `
    <div>
                <span>${birthYear}</span>
                <p>Years</p>
            </div>
            <div>
                <span>${birthMonth}</span>
                <p>Months</p>
            </div>
            <div>
                <span>${birthDay}</span>
                <p>Days Old</p>
            </div> 
    `;

})

document.querySelector("#open-popup").addEventListener('click', function () {
    document.body.classList.add('active-popup');
});


document.querySelectorAll(".popup .close-btn").forEach(btn => {
    btn.addEventListener('click', function () {
        document.body.classList.remove('active-popup');
        document.body.classList.remove('active-empty-popup');
    });
});