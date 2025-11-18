const Name = document.getElementById("name__input");
const enroll = document.getElementById("enrollment__input");
const course = document.getElementById("CourseCode__input");
const mobile = document.getElementById("mobile__input");
const email = document.getElementById("email__input");
const submitDate = document.getElementById("dateDiv__submitDate");
const printForm = document.getElementById("printForm");
const signInput = document.getElementById("sign__input");
const signImg = document.getElementById("sign__img");

signInput.onchange = () => {
    signImg.src = URL.createObjectURL(signInput.files[0]);
    signInput.style.display = "none";
}

printForm.addEventListener("click", () => {
    PrintForm();
    printForm.style.display = "none";
    document.title = `${course.value}_${enroll.value}`;
    submitDate.innerText = `${date()}`;

    print();
    setTimeout(() => {
        window.location.reload();
    }, 3000);
})

function PrintForm() {
    Name.outerHTML = `<p class="textBlue">${Name.value}</p>`;
    enroll.outerHTML = `<p class="textBlue  plainText">${enroll.value}</p>`;
    course.outerHTML = `<p class="textBlue plainText">${course.value}</p>`;
    mobile.outerHTML = `<p class="textBlue plainText">${mobile.value}</p>`;
    email.outerHTML = `<p class="textBlue plainText">${email.value}</p>`;
}

const date = () => {
    let d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    return `${day}-${month + 1}-${year}`;
}