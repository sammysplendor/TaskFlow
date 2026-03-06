import style from "./Placeholder.module.css";

const Placeholder = () => {
  return (
    <div className={style.pageContainer}>
      <h1 className={style.placeholderTxt}>
        <i>Coming soon...</i>
      </h1>
    </div>
  );
};

export default Placeholder;
