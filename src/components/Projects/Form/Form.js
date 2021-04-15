import styles from "./Form.module.scss";
import { useState } from "react";

const Form = () => {
  const [output, setOutput] = useState("Type Here");
  const [text, setText] = useState(false);

  const typeHandler = (e) => {
    e.preventDefault();
    setText(!text);
  };
  return (
    <div className={styles.formWrap}>
      <form>
        <label htmlFor="todo">
          Do this:
          <input
            type="text"
            name="todo"
            onChange={(e) => setOutput(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => typeHandler(e)}>
          Submit
        </button>
      </form>
      {text && <h2>{output}</h2>}
    </div>
  );
};

export default Form;
