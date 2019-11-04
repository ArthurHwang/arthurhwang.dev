import Head from "next/head";
import styled from "styled-components";
import * as Yup from "yup";
import { Fragment } from "react";
import { NextPage } from "next";
import { Formik } from "formik";
import { Error } from "../components/Error";
import { useState } from "react";
import { Button } from "../components/Button";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

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

const Contact: NextPage<any> = () => {
  const [alert, setAlert] = useState("");
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Contact</title>
        <meta
          name="description"
          content="If you would like to contact me regarding a job or project or even if you just want to say hi, fill out the contact form and I'll get back to you ASAP"
        />
      </Head>
      <ContentWrap>
        <StyledContact>
          <h2>
            Let's Chat!<span>_</span>
          </h2>
          <p style={{ textAlign: "left" }}>
            Feel free to use this form or directly email me at{" "}
            <a className="link" href="mailto:mail@arthurhwang.dev">
              mail@arthurhwang.dev
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
            onSubmit={async (
              values,
              { setSubmitting, resetForm, setStatus }
            ) => {
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
                        placeholder="Enter your first name"
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
                        id="lastNname"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        // @ts-ignore
                        className={
                          touched.lastName && errors.lastName
                            ? "has-error"
                            : null
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
                        placeholder="Enter your email"
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
                      aria-label="message"
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      // @ts-ignore
                      className={
                        touched.message && errors.message ? "has-error" : null
                      }
                    />
                    <div className="textarea-fix">
                      <Error
                        touched={touched.message}
                        message={errors.message}
                      />
                    </div>
                  </div>
                </div>
                <div className="submit">
                  <Button color="green" disabled={isSubmitting} type="submit">
                    Submit
                  </Button>
                  {alert && (
                    <div className="alert">Message Sent! Thank you</div>
                  )}
                </div>
              </form>
            )}
          </Formik>

          <h2
            style={{
              borderTop: "1px solid #ebeaeb",
              marginTop: "4rem",
              paddingTop: "2rem"
            }}
          >
            Let's Get Social<span>_</span>
          </h2>

          <p>Connect with me on GitHub, LinkedIn, Facebook, or Twitter</p>
          <div className="button-wrap">
            <a
              href="https://github.com/ArthurHwang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="blue">
                GitHub <FaGithub />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/arthur-hwang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                LinkedIn <FaLinkedin />
              </Button>
            </a>

            <a
              href="https://www.facebook.com/arthur.hwang.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="yellow">
                FaceBook <FaFacebook />
              </Button>
            </a>

            <a
              href="https://twitter.com/ArthurHwang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="red">
                Twitter <FaTwitter />
              </Button>
            </a>
          </div>
        </StyledContact>
      </ContentWrap>
    </Fragment>
  );
};

export default Contact;

const StyledContact = styled("div")`
  max-width: 800px;
  margin: 0 auto;

  .button-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    button {
      width: 190px;
      padding: 1rem 3rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    @media (max-width: 490px) {
      justify-content: center;
    }
  }

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
    }

    textarea {
      width: 100%;
      height: 206px;
      resize: none;
      padding: 1.5rem;

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

const ContentWrap = styled("div")`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.lightgrey};

  @media (max-width: 490px) {
    padding: 2rem 2rem;
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
