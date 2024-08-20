import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

const AddPost = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        onSubmit: (values: { title: string, body: string }) => {
            formik.resetForm();
            console.log(values)
            navigate('/blog')
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit} className='flex flex-col w-1/2 mx-auto mt-5 gap-5'>
                <input
                    type="text" name='title' className='p-2 border-2 border-solid border-teal-700'
                    value={formik.values.title} onChange={formik.handleChange}
                />
                <textarea
                    name="body" className='p-2 border-2 border-solid border-teal-700' cols={30} rows={3}
                    style={{resize: 'none'}}
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                <button className='py-2 px-3 bg-teal-700 text-white rounded' type="submit">Добавить пост</button>
            </form>
        </>
    );
};
export default AddPost