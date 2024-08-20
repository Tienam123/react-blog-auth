import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../store/auth/operation.ts";
import ErrorsValidation from "../components/ErrorsValidation.tsx";
import * as yup from "yup";
import {AppDispatch} from "../store/store.ts";


const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const schema = yup.object()
        .shape({
            email: yup.string()
                .email('Invalid mail format')
                .required('Это поле обязательно')
                .min(3, 'Это поле не может быть короче 3 символов')
                .max(255, 'Это поле не может превышать 255 символов'),
            password: yup.string()
                .required('Это поле обязательно') // Поле обязательно для заполнения
                .min(3, 'Это поле не может быть короче 3 символов') // Минимальная длина пароля - 8 символов
                .max(20, 'Это поле не может превышать 20 символов') // Максимальная длина пароля - 20 символов
                .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву') // Должен содержать хотя бы одну строчную букву
                .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву') // Должен содержать хотя бы одну заглавную букву
                .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру'), // Должен содержать хотя бы одну цифру

        })
    const formik = useFormik({
        initialValues: {
            'email': "",
            'password': ""
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm();
        }
    });
    return (
        <>
            <ErrorsValidation/>
            <form onSubmit={formik.handleSubmit} className='mx-auto w-1/3 flex flex-col mt-5'>
                <label htmlFor="email">E-mail</label>
                <input type="text" id='email' name='email' placeholder='Введите Email'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.email}
                />
                {formik.errors.email ?
                    <div className='text-red-600 font-semibold text-sm'>{formik.errors.email}</div> : null}

                <label htmlFor="password" className='mt-3'>Пароль</label>
                <input type="password" id='password' name='password' placeholder='Введите пароль'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.password}
                />
                {formik.errors.password ?
                    <div className='text-red-600 font-semibold text-sm'>{formik.errors.password}</div> : null}

                <button className='bg-slate-700 text-white py-2 px-3 rounded mt-5'>Войти</button>
            </form>
        </>
    );
};
export default Login