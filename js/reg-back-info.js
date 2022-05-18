//
//
//
//
// getting user data and storing in local storage function
const formValidation = document.querySelector(".formBackend");
const fullName = document.querySelector("input[name=fullName]");
const email = document.querySelector("input[name=email]");
const tel = document.querySelector("input[name=tel]");
const address = document.querySelector("input[name=address]");
const gender = document.querySelector("#gender");
const eduLevel = document.querySelector("#edulevel");
const selectedCourse = document.querySelector("#selectedCourses");
const selectedBatch = document.querySelector("#selectedBatch");
const message = document.querySelector("textarea[name=message]");

formValidation.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        fullName.value === "" ||
        email.value === "" ||
        tel.value === "" ||
        address.value === "" ||
        message.value === ""
    ) {
        window.location = "#!";
    } else {
        let userData = localStorage.getItem("formData");

        let formData = JSON.parse(userData) || [];

        let alreadyExist =
            formData.length &&
            JSON.parse(userData).some(
                (data) =>
                    (data.name.toLowerCase() == fullName.value.toLowerCase() &&
                        data.email.toLowerCase() == email.value.toLowerCase() &&
                        data.tel == tel.value) ||
                    data.email.toLowerCase() == email.value.toLowerCase() ||
                    data.tel == tel.value
            );

        if (!alreadyExist) {
            let userData = localStorage.getItem("formData");
            if (userData == null) {
                userDataObj = [];
            } else {
                userDataObj = JSON.parse(userData);
            }

            let dataObj = {
                name: fullName.value,
                email: email.value,
                tel: tel.value,
                address: address.value,
                gender: gender.value,
                eduLevel: eduLevel.value,
                selectedCourse: selectedCourse.value,
                selectedBatch: selectedBatch.value,
                message: message.value,
            };

            userDataObj.push(dataObj);
            localStorage.setItem("formData", JSON.stringify(userDataObj));

            formValidation.reset();

            showUserData();
        } else {
            alert("Oops...Duplicate found...You've already signed up");
            window.location = "./courses.html";
        }
    }
});
