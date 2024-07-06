import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'

const MyForm = () =>{

 

   const schema =yup.object().shape({
    fullName: yup.string().required("Your name is required!"),
    email:yup.string().email().required("Your mail must be correct!"),
    age: yup.number().positive().integer().min(18).required("Your age must be greater that 18"),
    password: yup.string().min(4).max(20).required('Password required'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must be match!").required(),
   })

     const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
   });

   const onSubmit =(data)=>{
    console.log(data)
   }
    return (
    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='full  name..' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder='email..' {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="number" placeholder='age...'  {...register("age")} />
        <p>{errors.age?.message}</p>
        <input type="password" placeholder='password' {...register("password")}/>
        <p>{errors.password?.message}</p>
         <input type="password" placeholder="confirm pwd"  {...register("confirmPassword")}/>
         <p>{errors.confirmPassword?.message}</p>
        <input type="submit" placeholder="confirm pwd"/>
    </form>
    ) 
}

export {MyForm}