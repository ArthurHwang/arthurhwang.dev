import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { Error } from "../Error";

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
    .required("Must enter an email")
});
export const Contact: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledContact>
        <h2>
          Lets Chat!<span>_</span>
        </h2>
        {/* 
        //@ts-ignore */}
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={validationSchema}
          //@ts-ignore
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const response = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });

            const json = await response.json();
            console.log(json);

            resetForm();
            setSubmitting(false);

            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   resetForm();
            //   setSubmitting(false);
            // }, 500);
          }}
        >
          {/* 
        //@ts-ignore */}
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
              {/* {JSON.stringify(values)} */}
              <div className="input-row">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  // @ts-ignore
                  className={
                    touched.firstName && errors.firstName ? "has-error" : null
                  }
                />
                <Error touched={touched.firstName} message={errors.firstName} />
              </div>
              <div className="input-row">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastNname"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  // @ts-ignore
                  className={
                    touched.lastName && errors.lastName ? "has-error" : null
                  }
                />
                <Error touched={touched.lastName} message={errors.lastName} />
              </div>
              <div className="input-row">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  // @ts-ignore
                  className={touched.email && errors.email ? "has-error" : null}
                />
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className="input-row">
                <button disabled={isSubmitting} type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </StyledContact>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  padding: 4rem;
  background-color: ${({ theme }) => theme.lightgrey};

  .valid {
    color: green;
  }

  .invalid {
    color: red;
  }

  .has-error {
    border: 1px solid red;
  }

  h2 {
    margin-top: 0;

    /* text-align: center; */
  }
  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;

const StyledContact = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  .flex-wrap {
    display: flex;

    justify-content: space-evenly;

    img {
      width: 50px;
    }
  }
`;
