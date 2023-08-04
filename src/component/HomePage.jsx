import { useState } from "react";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import movile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import { useFormik } from "formik";
import { Success } from "./Success";


export const HomePage=()=> {
  const [benefits] = useState([
    "Product discover and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ]);

  const [success, setSuccess] = useState(false);

  const validate = (values)=>{
    const errors = {}

    if(!values.Emailaddress){
      errors.Emailaddress = 'Valid email required';
    }else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(values.Emailaddress)){
      errors.Emailaddress = 'Valid email required';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: { Emailaddress: "" },
   validate,
    onSubmit: (formData,{resetForm}) => {
    //   console.log("data enviada: ",formData)
    //   resetForm();
    setSuccess(true)
    },
  });

  console.log( formik.values.Emailaddress)
  return (
    <>{!success && <div className="card">
    <div className="section1">
      <h1 className="title">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        {benefits.map((item, index) => (
          <div className="ContainerItems" key={index}>
            <li>
              <img src={iconList} alt="iconList" />
            </li>
            <li>{item}</li>
          </div>
        ))}
      </ul>

      <form action="" onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="containerForm">
          <article>
          <label htmlFor="Emailaddress">Email address</label>
          {formik.errors.Emailaddress ? <p className="error">{formik.errors.Emailaddress}</p>: null}
          </article>
          <input
          className={formik.errors.Emailaddress ? 'inputError' : null}
            type="email"
            name="Emailaddress"
            placeholder="email@company.com"
            onChange={formik.handleChange}
            value={formik.values.Emailaddress}
          />
          <button onClick={formik.handleSubmit}>Subscribe to monthly newsletter </button>
        </div>
      </form>
    </div>
    <div className="section2">
      <img id="desktop" src={desktop} alt="img1" />
      <img id="movile" src={movile} alt="img1" />
    </div>
  </div>}

  {success && <Success email={formik.values.Emailaddress}/>}
      
    </>
  );
}

