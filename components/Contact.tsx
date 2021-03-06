import styled from "styled-components";
import * as Yup from "yup";
import { Formik } from "formik";
import { Error } from "./Error";
import { useState } from "react";
import { Button } from "./Button";
import { ReactElement } from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a first name"),
  lastName: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a last name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email"),
  message: Yup.string()
    .min(2, "Must have a character")
    .required("Must enter a message")
});

export const Contact: React.FC = (): ReactElement => {
  const [alert, setAlert] = useState("");
  return (
    <ContentWrap id="contact">
      <StyledContact>
        <h2>
          Let's Chat!<span>_</span>
        </h2>
        <p style={{ textAlign: "left", margin: "0" }}>
          Feel free to use this form or directly email / call me :{" "}
        </p>
        <p style={{ margin: "0" }}>
          <a className="link" href="mailto:mail@arthurhwang.dev">
            <IoMdMail style={{ position: "relative", top: "2px" }} />{" "}
            mail@arthurhwang.dev
          </a>
          <br />
          <a className="link" href="tel:714-280-6188">
            <FaPhone style={{ position: "relative", top: "2px" }} /> (714)
            280-6188{" "}
          </a>
        </p>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
            setSubmitting(true);
            setStatus(undefined);
            const response = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });

            const json = await response.json();

            if (response.status === 200) {
              setStatus(json);
              setAlert("Message sent, thank you");
              resetForm();
              setSubmitting(false);
            } else {
              setStatus(json);
              setAlert("Message failed to send, please try again");
              console.log("serverError");
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="input-grid">
                <div>
                  <div className="input-row">
                    <input
                      aria-label="First Name"
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Jon"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      // @ts-ignore
                      className={
                        touched.firstName && errors.firstName
                          ? "has-error"
                          : null
                      }
                    />
                    <Error
                      touched={touched.firstName}
                      message={errors.firstName}
                    />
                  </div>
                  <div className="input-row">
                    <input
                      aria-label="Last Name"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Snow"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      // @ts-ignore
                      className={
                        touched.lastName && errors.lastName ? "has-error" : null
                      }
                    />
                    <Error
                      touched={touched.lastName}
                      message={errors.lastName}
                    />
                  </div>
                  <div className="input-row">
                    <input
                      aria-label="email"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="youknownothin@jonsnow.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      // @ts-ignore
                      className={
                        touched.email && errors.email ? "has-error" : null
                      }
                    />
                    <Error touched={touched.email} message={errors.email} />
                  </div>
                </div>
                <div className="input-row">
                  <textarea
                    aria-label="Message"
                    name="message"
                    id="message"
                    placeholder="Ygritte: Is that a palace? Jon Snow: It's a windmill."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    // @ts-ignore
                    className={
                      touched.message && errors.message ? "has-error" : null
                    }
                  />
                  <div className="textarea-fix">
                    <Error touched={touched.message} message={errors.message} />
                  </div>
                </div>
              </div>
              <div className="submit">
                <Button color="green" disabled={isSubmitting} type="submit">
                  Submit
                </Button>
                {alert && <div className="alert">Message Sent! Thank you</div>}
              </div>
            </form>
          )}
        </Formik>
      </StyledContact>
    </ContentWrap>
  );
};

const StyledContact = styled("div")`
  max-width: 1200px;
  margin: 0 auto;

  .textarea-fix {
    position: relative;
    bottom: 7px;
    padding-right: 0.5rem;

    @media (max-width: 650px) {
      bottom: 16px;
      padding-right: 0;
    }
  }

  .input-grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-gap: 0;
      grid-template-rows: 1fr 1fr;
    }

    input {
      width: 100%;
      height: 50px;
      padding-left: 2rem;
      border: 1px solid grey;

      ::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      ::-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    textarea {
      width: 100%;
      height: 206px;
      resize: none;
      padding: 1.5rem;
      border: 1px solid grey;

      ::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      ::-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }

      @media (max-width: 650px) {
        position: relative;
        bottom: 8px;
      }
    }
  }

  .submit {
    text-align: center;
  }
`;

const ContentWrap = styled("section")`
  padding: 10rem 2rem 10rem;
  background-color: ${({ theme }) => theme.bg.grey};

  form {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  .valid {
    color: green;
    text-align: right;
    font-size: 1.2rem;
    height: 28px;
  }

  .invalid {
    color: red;
    text-align: right;
    font-size: 1.2rem;
    height: 28px;
  }

  .has-error {
    border: 1px solid red;
  }

  h2 {
    margin-top: 0;
  }

  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;
