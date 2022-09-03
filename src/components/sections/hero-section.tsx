import data from "@/data/content/home.json";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const HeroSection: React.FC = () => {
  return (
    <section className="container grid grid-cols-1 pt-8 gap-6 md:pt-12 md:gap-12 
      xl:grid-cols-[34.125rem,16.4375rem] xl:gap-[12.875rem] xl:mt-[4.625rem]">
      <div className="w-32 mx-auto md:w-[9.9375rem] aspect-[0.526] xl:order-1 xl:w-full">
        <img src={data.hero.image} alt="" className="mx-auto" />
      </div>
      <header>
        <h2 className="heading-xl text-center text-neutral-800 md:w-[34.125rem] md:mx-auto xl:text-left 
          xl:mt-[4.875rem]
        ">
          {data.hero.title}
        </h2>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("invalid email")
              .required("email required"),
          })}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
        >
          <Form className="mt-6 xl:mt-[1.3125rem]">
            <div className="relative flex flex-col gap-4 md:w-[27.8125rem] md:mx-auto xl:mx-0">
              <label>
                <span className="sr-only">{data.hero.cta.textfield}</span>
                <Field
                  name="email"
                  type="email"
                  placeholder={data.hero.cta.textfield}
                  className="w-full rounded-full h-12 text-[0.9375rem] text-neutral-900 font-bold px-6 md:pr-[12.125rem]"
                ></Field>
                <span className="block mt-2 pl-6 text-[0.75rem] text-primary font-bold">
                  <ErrorMessage name="email" />
                </span>
              </label>
              <div className="md:w-max md:absolute md:top-0 md:right-0">
                <button type="submit" className="primary-button">
                  {data.hero.cta.submit}
                </button>
              </div>
            </div>
          </Form>
        </Formik>
        <p className="mt-6 paragraph-md text-neutral-500 text-center xl:mt-4 xl:text-left xl:ml-[1.6875rem]">
          {data.hero.cta.text.normal}{" "}
          <strong>{data.hero.cta.text.strong}</strong>
        </p>
      </header>
    </section>
  );
};
