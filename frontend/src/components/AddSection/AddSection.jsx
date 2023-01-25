import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import "./style.scss"
function AddSection() {
    const [users, setUsers] = useState([]);
    const [state, setState] = useState({
        name: "",
        image: "",
        price: ""
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginFormSchema),
    });


    const getData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
        console.log(res.data)
    };

    useEffect(() => {
        getData();
    }, []);


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, [e.target.image]: e.target.value, [e.target.price]: e.target.value });

    };


    const formSubmit = (data) => {
        console.log(data);
        data.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", state);
        getData();
        setState(
            {
                name: "",
                age: "",
                hobbies: ""
            }
        )
    };

    return (
        <>
            <div className='form_wrapper'>

                <form className='form' onSubmit={handleSubmit(formSubmit)}>
                    <input {...register("name")}
                        value={state.name}
                        type="text"
                        onChange={handleChange}
                        name="name"
                        placeholder="Name of flower"
                        id="name" />
                    {errors.name ? (
                        <span style={{ color: "red" }}>{errors.name.message}</span>
                    ) : (
                        <></>
                    )}
                    <input {...register("image")}
                        type="text"
                        value={state.image}
                        name="image"
                        placeholder='Link of flower image'
                        onChange={handleChange}
                        id="image" />

                    {errors.image ? (
                        <span style={{ color: "red" }}>{errors.image.message}</span>
                    ) : (
                        <></>
                    )}
                    <input
                        {...register("price")}
                        type="price"
                        name="price"
                        value={state.price}
                        id="price"
                        onChange={handleChange}
                        placeholder="Price"

                    />
                    {errors.price ? (
                        <span style={{ color: "red" }}>{errors.price.message}</span>
                    ) : (
                        <></>
                    )}
                    <button>Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddSection