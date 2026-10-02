import React from "react";
import { useDispatch } from "react-redux";
import { toggleAddBook, addBook, updateBook } from "../slice/bookSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function BookDetailsForm({ book, onComplete }) {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleAddBook());
    onComplete?.();
  };

  const validationSchema = Yup.object({
    bookname: Yup.string().required("Book name is required"),
    isbn: Yup.string().required("ISBN is required"),
    pubdate: Yup.date().required("Publication date is required"),
    authorname: Yup.string().required("Author name is required"),
    dob: Yup.date().required("Author DOB is required"),
    bio: Yup.string().required("Short bio is required"),
  });

  return (
    <div className="overlay">
      <Formik
        initialValues={{
          bookname: book?.bookname ?? "",
          isbn: book?.isbn ?? "",
          pubdate: book?.pubdate ?? "",
          authorname: book?.authorname ?? "",
          dob: book?.dob ?? "",
          bio: book?.bio ?? "",
        }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const savedBook = { ...values, id: book?.id ?? crypto.randomUUID() };
          dispatch(book ? updateBook(savedBook) : addBook(savedBook));
          dispatch(toggleAddBook());
          resetForm();
          onComplete?.();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <h3>Book Details</h3>
            <div className="bookform">
              <label>
                Book Name: <Field name="bookname" type="text" />
              </label>
              {touched.bookname && errors.bookname && <span>{errors.bookname}</span>}

              <label>
                ISBN Number: <Field name="isbn" type="text" />
              </label>
              {touched.isbn && errors.isbn && <span>{errors.isbn}</span>}

              <label>
                Pub. Date: <Field name="pubdate" type="date" />
              </label>
              {touched.pubdate && errors.pubdate && <span>{errors.pubdate}</span>}
            </div>

            <h3>Author Details</h3>
            <div className="authorform">
              <label>
                Author Name: <Field name="authorname" type="text" />
              </label>
              {touched.authorname && errors.authorname && <span>{errors.authorname}</span>}

              <label>
                DOB: <Field name="dob" type="date" />
              </label>
              {touched.dob && errors.dob && <span>{errors.dob}</span>}

              <label>
                Short Bio: <Field name="bio" as="textarea" />
              </label>
              {touched.bio && errors.bio && <span>{errors.bio}</span>}
            </div>

						<div className="formbtn">
							<button type="submit">{book ? "Save Changes" : "Add Book"}</button>
            	<button type="button" onClick={handleCancel}>Cancel</button>
						</div>	
            
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookDetailsForm;
