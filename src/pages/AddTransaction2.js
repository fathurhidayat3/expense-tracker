import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import HeadingText from "../components/HeadingText";
import DataContext from "../contexts/DataContext";
import DateContext from "../contexts/DateContext";

const TransactionSchema = Yup.object().shape({
  type: Yup.string(),
  info: Yup.string().required("Required"),
  category: Yup.string(),
  date: Yup.date().required("Required"),
  amount: Yup.number().required("Required")
});

const AddTransaction2 = () => {
  return (
    <DataContext.Consumer>
      {({ data, setData }) => (
        <DateContext.Consumer>
          {({ etDate }) => (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "24px",
                overflowY: "scroll",
                zIndex: 1
              }}
            >
              {/* <HeadingText type={"h2"}>Add income transaction</HeadingText> */}

              <Formik
                initialValues={{
                  type: "income",
                  name: "Fathur Hidayat",
                  info: "",
                  category: "salary",
                  date: etDate,
                  amount: ""
                }}
                validationSchema={TransactionSchema}
                onSubmit={values => {
                  let newData = Object.assign(data);
                  newData.push(values);

                  localStorage.setItem("data", JSON.stringify(newData));
                  setData(newData);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "4px 0",
                        padding: "4px 0"
                      }}
                    >
                      <HeadingText type={"h5"}>Select type</HeadingText>
                      <Field name="type" component="select">
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                      </Field>
                      <div style={{ margin: "4px 0 0 0" }}>
                        {errors.type && touched.type ? (
                          <div>{errors.type}</div>
                        ) : null}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "4px 0",
                        padding: "4px 0"
                      }}
                    >
                      <HeadingText type={"h5"}>Fill in your name</HeadingText>
                      <Field name="name" />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "4px 0",
                        padding: "4px 0"
                      }}
                    >
                      <HeadingText type={"h5"}>Add info</HeadingText>
                      <Field name="info" />
                      {errors.info && touched.info ? (
                        <div>{errors.info}</div>
                      ) : null}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "4px 0",
                        padding: "4px 0"
                      }}
                    >
                      <HeadingText type={"h5"}>Choose category</HeadingText>
                      <Field name="category" component="select">
                        <option value="salary">Salary</option>
                        <option value="bank">Bank</option>
                      </Field>
                      {errors.category && touched.category ? (
                        <div>{errors.category}</div>
                      ) : null}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "4px 0",
                        padding: "4px 0"
                      }}
                    >
                      <HeadingText type={"h5"}>Choose date</HeadingText>
                      <Field name="date" />
                      {errors.date && touched.date ? (
                        <div>{errors.date}</div>
                      ) : null}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "4px 0",
                        padding: "4px 0"
                      }}
                    >
                      <HeadingText type={"h5"}>Fill in amount</HeadingText>
                      <Field name="amount" />
                      {errors.amount && touched.amount ? (
                        <div>{errors.amount}</div>
                      ) : null}
                    </div>

                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </DateContext.Consumer>
      )}
    </DataContext.Consumer>
  );
};

export default AddTransaction2;
