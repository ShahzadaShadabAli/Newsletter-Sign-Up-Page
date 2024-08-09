import { useState } from "react";
import Button from "./Button";
import useEmailContext from "./hook/useEmailContext";

const Form = () => {
  const {dispatch} = useEmailContext()
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
  const [initialType, setInitialType] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(isValidEmail(initialType)) {
      dispatch({type: "add", payload: initialType})
    } else {
      setInitialType(false)
    }
  }

    return (
        <div className="bg-white min-h-[38rem] w-[58rem] max-md:rounded-none rounded-[30px]">
        <div className="flex p-6 pl-[.3rem] max-md:p-0 max-md:flex-col-reverse">
          <section className="flex-1 flex justify-center items-center max-md:my-12">
            <div className="w-[75%]">
              <h1 className="mb-0 animate-fade-down text-[3.5rem] my-font-bold text-[#242742] max-sm:text-5xl">
                Stay updated!
              </h1>
              <p className="text-base my-font mb-5 animate-fade-right animate-delay-100 mt-[.75rem]">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex gap-4 animate-fade-right animate-delay-500">
                  <img
                    src="/assets/images/icon-success.svg"
                    width={21}
                    alt=""
                  />
                  <span className="base-text my-font">
                    Product discovery and building what matters
                  </span>
                </div>

                <div className="flex gap-4 animate-fade-right animate-delay-[600ms]">
                  <img
                    src="/assets/images/icon-success.svg"
                    width={21}
                    alt=""
                  />
                  <span className="base-text my-font">
                    Measuring to ensure updates are a success
                  </span>
                </div>

                <div className="flex gap-4 animate-fade-right animate-delay-700">
                  <img
                    src="/assets/images/icon-success.svg"
                    width={21}
                    alt=""
                  />
                  <span className="base-text my-font">And much more!</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="mt-9 w-full animate-fade-right animate-delay-[900ms]">
                <div className="flex justify-between">
                <label
                  htmlFor="first-name"
                  className="block text-[.8rem] my-font-bold leading-6 text-[#242742] mb-1"
                >
                  Email address
                </label>
               {!initialType && <label
                  htmlFor="first-name"
                  className="block text-[.8rem] my-font-bold leading-6 text-red-400 mb-1"
                >
                  Valid email required
                </label>}
                </div>
                <input
                onInput={(e) => setInitialType(e.target.value ? e.target.value : true)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="email@company.com"
                  autoComplete="given-name"
                  className={`${initialType ? "ring-gray-300 placeholder:text-gray-400 focus:ring-black text-gray-900" : "ring-red-300 placeholder:text-red-400 bg-rose-100 focus:ring-red-400 !text-red-400"} block my-font w-full rounded-md border-0 h-10 p-[1.8rem]  shadow-sm ring-2 ring-inset  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none`}
                />
              <div className="mt-6 mb-3">
                <Button title={"Subscribe to monthly newsletter"} />
              </div>
              </form>
            </div>
          </section>

          <section>
            <img
            className="hidden md:block animate-fade-left"
              src="/assets/images/illustration-sign-up-desktop.svg"
              width={400}
              alt=""
            />
            <img
            className="hidden w-full max-md:block animate-fade-down"
              src="/assets/images/illustration-sign-up-mobile.svg"
              width={400}
              alt=""
            />
          </section>
        </div>
      </div>
    );
}
 
export default Form;