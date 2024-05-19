import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.errorMessage}>
      Whoops, something went wrong, please try again!
    </p>
  );
};

export default ErrorMessage;
