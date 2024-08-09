import Button from "./Button";
import useEmailContext from "./hook/useEmailContext";

const Alert = ({email}) => {
  const {dispatch} = useEmailContext()
  const handleClick = () => {
    dispatch({type: "remove"})
  }
    return (
        <div className="bg-white w-[32rem] max-md:pt-32 max-md:w-full max-md:h-full max-md:flex max-md:flex-col max-md:justify-between pb-16 pt-12 p-16 max-md:px-10 max-md:rounded-none rounded-[30px] animate-fade animate-duration-300 animate-delay-200 animate-ease-in">
                <div>
            <img
            className="mb-10"
                    src="/assets/images/icon-success.svg"
                    width={65}
                    alt=""
                  />
                <h1 className="mb-0 leading-[55px] text-[3.5rem] my-font-bold text-[#242742] max-sm:text-5xl">
                Thanks for subscribing!
              </h1>
              <p className="text-base my-font mb-9 mt-6">
                A confirmation email has been sent to <b className="my-font-bold text-[#242742]">{email}</b>. Please open it and click the button inside to confirm your subscription.
              </p>
                </div>
              <span onClick={handleClick}>
              <Button title={"Dismiss message"} />
              </span>
        </div>
    );
}
 
export default Alert;