$("#formValidation").validate({
    rules: {
        fullName: {
            minlength: 5,
        },
        email: {
            email: true,
        },
        tel: {
            number: true,
        },
        message: {
            minlength: 50,
            maxlength: 350,
        },
    },
    messages: {
        fullName: {
            required: "Required",
            minlength: "Name at least 5 characters",
        },
        email: {
            required: "Required",
        },
        tel: {
            required: "Required",
        },
        subject: "Required",
        address: "Required",
        message: "Required",
    },

    submitHandler: function (form) {
        $(form).submit((window.location = "./successful-registration.html"));
    },
});
