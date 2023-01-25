import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { postFormSchema } from "../../schema/postFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import "./style.scss"
function AddSection() {
    const [state, setState] = useState({
        image: "",
        name: "",
        price: null
    });


    //addProducts
    const addProducts = () => {

        if (!state.image || !state.name || !state.price ) return;

        axios.post("http://www.localhost:3050/flowers", state);
    };

    //yup
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(postFormSchema) });

    const onSubmit = (data) => {
        console.log(data);
        addProducts()
    };
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className='form_wrapper'>

                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add image</h1>
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
                        type="number"
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