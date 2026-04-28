let Name = document.getElementById("name__input");
let enroll = document.getElementById("enrollment__input");
let course = document.getElementById("CourseCode__input");
let mobile = document.getElementById("mobile__input");
let email = document.getElementById("email__input");
let submitDate = document.getElementById("dateDiv__submitDate");
let printForm = document.getElementById("printForm");
let signInput = document.getElementById("sign__input");
let signImg = document.getElementById("sign__img");

signInput.onchange = () => {
    signImg.src = URL.createObjectURL(signInput.files[0]);
    signInput.style.display = "none";
};

printForm.addEventListener("click", () => {
    PrintForm();

    printForm.style.display = "none";
    document.title = `${course.value}_${enroll.value}`;
    submitDate.innerText = getDate();

    window.print();

    setTimeout(() => {
        resetPage();
    }, 2000);
});

function PrintForm() {
    if (Name.parentNode) Name.outerHTML = `<p class="textBlue">${Name.value}</p>`;

    if (enroll.parentNode) enroll.outerHTML = `<p class="textBlue plainText">${enroll.value}</p>`;

    if (course.parentNode) course.outerHTML = `<p class="textBlue plainText" id="CourseCode__input">${course.value}</p>`;

    if (mobile.parentNode) mobile.outerHTML = `<p class="textBlue plainText">${mobile.value}</p>`;

    if (email.parentNode) email.outerHTML = `<p class="textBlue plainText">${email.value}</p>`;
}

function resetPage() {
    let courseEl = document.getElementById("CourseCode__input");
    courseEl.outerHTML = `<input type="text" id="CourseCode__input">`;
    course = document.getElementById("CourseCode__input");
    printForm.style.display = "";
}

function getDate() {
    return new Date().toLocaleDateString("en-GB");
}