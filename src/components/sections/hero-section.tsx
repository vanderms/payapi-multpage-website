import data from "@/data/content/home.json";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const HeroSection: React.FC = () => {
  return (
    <section className="container grid grid-cols-1 pt-8 gap-6">
      <div className="w-32 mx-auto">
        <img src={data.hero.image} alt="" className="mx-auto" />
      </div>
      <header>
        <h2 className="heading-xl text-center text-neutral-800">
          {data.hero.title}
        </h2>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={{
            email: Yup.string()
              .email("Invalid email")
              .required("Email required"),
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
        >
          <Form>
            <div>
              <label>
                <span className="sr-only">{data.hero.cta.textfield}</span>
                <Field
                  name="email"
                  type="email"
                  placeholder={data.hero.cta.textfield}
                ></Field>
                <span>
                  <ErrorMessage name="email" />
                </span>
              </label>
              <button type="submit">{data.hero.cta.submit}</button>
            </div>
          </Form>
        </Formik>
        <p>
          {data.hero.cta.text.normal}{" "}
          <strong>{data.hero.cta.text.strong}</strong>
        </p>
      </header>
    </section>
  );
};
