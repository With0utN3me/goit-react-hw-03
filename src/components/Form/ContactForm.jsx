import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
    user: "",
    number: ""
}
const addContactSchema = Yup.object().shape({
    user: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string()
        .matches(/^[0-9+ -]*$/, "Invalid number format") // Регулярний вираз для перевірки допустимих символів
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

const ContactForm = ({ onAdd }) => {
    const userFieldId = nanoid();
    const numberFieldId = nanoid();

    const handleSubmit = (values, actions) => {
        console.log(values)
        onAdd({
            id: nanoid(),
            name: values.user,
            number: values.number
        })
        actions.resetForm();
    }

    return (
        <Formik 
        initialValues={initialValues} 
        onSubmit={handleSubmit}
        validationSchema={addContactSchema}>
            <Form>
                <label htmlFor={userFieldId}>User</label>
                <Field type="text" name="user" id={userFieldId}></Field>
                <ErrorMessage name="user" as="span" />

                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" pattern="[0-9+ -]*" name="number" id={numberFieldId}></Field>
                <ErrorMessage name="number" as="span" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}
export default ContactForm;