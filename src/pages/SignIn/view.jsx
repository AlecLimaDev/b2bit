import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { SignInViewModel } from "./view.model";
export function SignInView() {
  const { handleSubmit, unauthorized } = SignInViewModel();

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
      .required("Campo obrigatório."),

    password: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 carecteres")
      .required("Campo obrigatório."),
  });

  return (
    <div className="bg-white flex justify-center h-screen items-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-md w-full bg-white p-8 rounded-2xl shadow-slate-500 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="flex justify-center">
            <p className="text-[#02274F] font-bold text-9xl">b</p>
            <p className="text-[#02274F] font-bold text-9xl">2</p>
            <p className="text-[#02274F] font-bold text-9xl">b</p>
            <p className="text-[#FDCF00] font-bold text-9xl">I</p>
            <p className="text-[#FDCF00] font-bold text-9xl">t</p>
          </div>

          <div className="flex flex-col my-5 gap-2.5">
            <label htmlFor="email" className="font-bold">
              E-mail
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full h-12 rounded-md p-4 bg-[#F1F1F1]"
              placeholder="@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="flex flex-col my-5 gap-2.5">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full h-12 rounded-md p-4 bg-[#F1F1F1]"
              placeholder="********"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
            {unauthorized && <p className="text-red-500">{unauthorized}</p>}
          </div>
          <div className="flex flex-col my-10">
            <button
              type="submit"
              className="w-full h-12 text-white rounded-md font-bold bg-[#02274F]"
            >
              Sign In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
