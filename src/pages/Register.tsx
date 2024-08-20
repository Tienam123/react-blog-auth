import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../store/auth/operation.ts";
import ErrorsValidation from "../components/ErrorsValidation.tsx";
import * as yup from "yup";
import {useAuth} from "../hooks/useAuth.ts";
import {AppDispatch} from "../store/store.ts";

const Register = () => {
    const {user} = useAuth();
    const dispatch = useDispatch<AppDispatch>();
    const schema = yup.object()
        .shape({
            email: yup.string()
                .email('Invalid mail format')
                .required('Это поле обязательно')
                .min(3, 'Это поле не может быть короче 3 символов')
                .max(255, 'Это поле не может превышать 255 символов'),
            name: yup.string()
                .min(3, 'Это поле не может быть короче 3 символов')
                .max(50, 'Это поле не может превышать 50 символов')
                .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Имя может содержать только буквы')
                .required('Это поле обязательно'),
            surname: yup.string()
                .min(3, 'Это поле не может быть короче 3 символов')
                .max(50, 'Это поле не может превышать 50 символов')
                .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Имя может содержать только буквы')
                .required('Это поле обязательно'),
            password: yup.string()
                .required('Это поле обязательно') // Поле обязательно для заполнения
                .min(3, 'Это поле не может быть короче 3 символов') // Минимальная длина пароля - 8 символов
                .max(20, 'Это поле не может превышать 20 символов') // Максимальная длина пароля - 20 символов
                .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву') // Должен содержать хотя бы одну строчную букву
                .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву') // Должен содержать хотя бы одну заглавную букву
                .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру'), // Должен содержать хотя бы одну цифру
            password_confirmation: yup.string()
                .test('password-match', 'Пароли не совпадают', function (value) {
                    return value === this.parent.password;
                })
                .required('Это поле обязательно'),

        })
    const formik = useFormik({
        initialValues: {
            'email': "",
            'name': "",
            'surname': "",
            'password': "",
            'password_confirmation': ""
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(register(values))
            if (user.email !== null) {
                formik.resetForm();
            }
        }
    });
    return (
        <>
            <ErrorsValidation/>
            <form onSubmit={formik.handleSubmit} className='mx-auto w-1/3 flex flex-col mt-20'>
                <label htmlFor="email">E-mail<sup className='text-red-600 text-[16px]'>*</sup></label>
                <input type="text" id='email' name='email' placeholder='Введите Email'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.email}
                />
                {formik.errors.email ?
                    <div className='text-red-600 font-semibold text-sm'>{formik.errors.email}</div> : null}

                <label htmlFor="name" className='mt-3'>Имя<sup className='text-red-600 text-[16px]'>*</sup></label>
                <input type="text" name='name' id='name' placeholder='Введите Имя'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.name}
                />
                {formik.errors.name ?
                    <div className='text-red-600 font-semibold text-sm'>{formik.errors.name}</div> : null}

                <label htmlFor="surname" className='mt-3'>Фамилия<sup
                    className='text-red-600 text-[16px]'>*</sup></label>
                <input type="text" id='surname' name='surname' placeholder='Введите Фамилию'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.surname}
                />
                {formik.errors.surname ?
                    <div className='text-red-600 font-semibold text-sm'>{formik.errors.surname}</div> : null}

                <label htmlFor="password" className='mt-3'>Пароль<sup
                    className='text-red-600 text-[16px]'>*</sup></label>
                <input type="password" id='password' name='password' placeholder='Введите пароль'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.password}
                />
                {formik.errors.password ?
                    <div className='text-red-600 font-semibold text-sm'>{formik.errors.password}</div> : null}


                <label htmlFor="password_confirmation" className='mt-3'>Подтвердите пароль<sup
                    className='text-red-600 text-[16px]'>*</sup> </label>
                <input type="password" id='password_confirmation' name='password_confirmation'
                       placeholder='Подтвердите пароль'
                       className='border-2 p-2 border-slate-700 rounded mt-1 focus-within:ring-blue-300'
                       onChange={formik.handleChange} value={formik.values.password_confirmation}
                />
                {formik.errors.password_confirmation ? <div
                    className='text-red-600 font-semibold text-sm'>{formik.errors.password_confirmation}</div> : null}

                <button
                    className='bg-slate-700 text-white py-2 px-3 rounded mt-5 hover:bg-slate-600 transition-all'>Войти
                </button>
            </form>
        </>
    );
};
export default Register;