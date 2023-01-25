import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    name: yup
        .string("Name should be a string")
        .required("Name and Surname is required"),
    surname: yup
        .string("Surname should be a string")
        .required("Surname is required"),
    email: yup
        .string("email is a string")
        .required("Email is required"),
    subject: yup
        .string("Subject must be a string")
        .required("Subject is required"),
    message: yup
        .string()
        .required("Message is required")

});