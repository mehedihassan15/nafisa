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
        alert("Required fields are empty");
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
            alert(
                "This user information is already in the User Information Table"
            );
        }
    }
});

//
//
//
//
// showing the user data in the table
function showUserData() {
    let userData = localStorage.getItem("formData");
    if (userData == null) {
        userDataObj = [];
    } else {
        userDataObj = JSON.parse(userData);
    }

    let html = "";
    userDataObj.forEach(function (element, index) {
        html += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.tel}</td>
                    <td>${element.address}</td>
                    <td>${element.gender}</td>
                    <td>${element.eduLevel}</td>
                    <td>${element.selectedCourse}</td>
                    <td>${element.selectedBatch}</td>
                    <td>${element.message}</td>
                    <td>
                        <div id="ap-btn">
                            <button id="${index}" onclick="dltData(this.id)" class="btnJS btnDlt">Delete</button>
                                <br>
                            <button id="${index}" onclick="editData(this.id)" class="btnJS btnEdit">Edit</button>
                        </div>
                    </td>
                </tr>
        `;
    });

    let users = document.querySelector("tbody");
    if (userDataObj.length != 0) {
        users.innerHTML = html;
    } else {
        users.innerHTML = "No user data yet!!!";
    }
}
showUserData();

//
//
//
//
// function for deleting the stored user information
function dltData(index) {
    let confirDel = confirm("You're about to delete this user data!!!!");

    if (confirDel == true) {
        let userData = localStorage.getItem("formData");
        if (userData == null) {
            userDataObj = [];
        } else {
            userDataObj = JSON.parse(userData);
        }

        userDataObj.splice(index, 1);
        localStorage.setItem("formData", JSON.stringify(userDataObj));
        showUserData();
    }
}

//
//
//
//
// function for editiing the stored user information
function editData(index) {
    let userData = localStorage.getItem("formData");
    document.querySelector(".btn-scs").innerHTML = "Update";
    document.querySelector("#addTitle").innerHTML = "Edit Information";

    if (
        fullName.value !== "" ||
        email.value !== "" ||
        tel.value !== "" ||
        address.value !== "" ||
        message.value !== ""
    ) {
        return alert("Please clear the form before editing new data");
    }

    if (userData == null) {
        userDataObj = [];
    } else {
        userDataObj = JSON.parse(userData);
    }

    fullName.value = userDataObj[index].name;
    email.value = userDataObj[index].email;
    tel.value = userDataObj[index].tel;
    address.value = userDataObj[index].address;
    gender.value = userDataObj[index].gender;
    eduLevel.value = userDataObj[index].eduLevel;
    selectedCourse.value = userDataObj[index].selectedCourse;
    selectedBatch.value = userDataObj[index].selectedBatch;
    message.value = userDataObj[index].message;

    userDataObj.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(userDataObj));
    showUserData();
}

//
//
//
//
// clearing the edit panel title and resetting the update button
document.querySelector(".btn-scs").addEventListener("click", () => {
    document.querySelector(".btn-scs").innerHTML = "Add";
    document.querySelector("#addTitle").innerHTML = "Add New User Data";
});
