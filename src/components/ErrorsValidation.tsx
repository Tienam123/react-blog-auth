import {useSelector} from "react-redux";
import {selectErrors} from "../store/auth/selectors.ts";
import {useEffect, useState} from "react";
import {FiAlertTriangle} from "react-icons/fi";
import {AuthError} from "../store/Contracts/AuthError.ts";

type ErrorsValidationState = string[];


const ErrorsValidation = () => {
    const [errors, setErrors] = useState<ErrorsValidationState>([]);
    const errorsValidation = useSelector(selectErrors);

    useEffect(() => {
        const newError: AuthError = errorsValidation?.errors ?? {};
        Object.keys(newError).forEach(key => {
            setErrors([...newError[key]])
        })
    }, [errorsValidation]);


    return (
        <>
            {
                errors.length > 0 && (
                    <ul className='w-1/3 bg-red-100 mt-10 rounded flex items-center justify-center flex-col mx-auto'>
                        {errors.map((el, index) => (
                            <li key={index} className='flex items-center gap-3'><FiAlertTriangle
                                className='text-red-600'/><span className='text-red-600'>{el}</span></li>))}
                    </ul>
                )
            }
        </>
    );
};
export default ErrorsValidation