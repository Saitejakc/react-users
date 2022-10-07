import React, { useState } from "react";
import "../ContactPage/Form.css";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/allAction";

function Form() {
  const dispatch = useDispatch();
  // const details = useSelector((state) => {
  //   return state.user.userData;
  // });
  const [inputField, setInputFeild] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputHandler = (e) => {
    setInputFeild({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    Object.assign(inputField, { id: shortid.generate() });
    // console.log(inputField);
    dispatch(userRegister(inputField));
  };

  console.log();

  // console.log(details);

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h3 className="txt">Get in touch!</h3>
        <br />

        <div className="inputs">
          <div className="hover">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              // value={inputField.name}
              onChange={inputHandler}
            />
            <span id="error"></span>
          </div>

          <div className="email_phone">
            <div className="hover e_pe">
              <input
                type="email"
                placeholder="Your E-Mail"
                name="email"
                // value={inputField.email}
                onChange={inputHandler}
              />
              <span id="emailerror"></span>
            </div>

            <div className="hover e_pn">
              <input
                type="phone"
                placeholder="Mobile"
                name="phone"
                // value={inputField.phone}
                onChange={inputHandler}
              />
              <span id="numerror"></span>
            </div>
          </div>

          <div className="hover">
            <input
              type="text"
              name="fsubj"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <br />

          <div className="hover">
            <textarea
              name="textarea"
              id="area"
              cols="30"
              rows="15"
              placeholder="Message"
            ></textarea>
            <span id="msgerror"></span>
          </div>

          <div>
            <button id="button">Submit </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
