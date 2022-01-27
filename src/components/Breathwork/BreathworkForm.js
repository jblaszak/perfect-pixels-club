import { useRef } from "react";

import BreathworkInput from "./BreathworkInput";
import classes from "./BreathworkForm.module.css";

const BreathworkForm = ({ timerHandler, isLeft, setIsLeft }) => {
  const inhaleRef = useRef();
  const holdRef = useRef();
  const exhaleRef = useRef();
  const hold2Ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    timerHandler(
      inhaleRef.current.value,
      holdRef.current.value,
      exhaleRef.current.value,
      hold2Ref.current.value
    );
  };

  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <BreathworkInput label="Inhale" inputRef={inhaleRef} defaultValue={4} />
      <BreathworkInput label="Hold 1" inputRef={holdRef} defaultValue={4} />
      <BreathworkInput label="Exhale" inputRef={exhaleRef} defaultValue={4} />
      <BreathworkInput label="Hold 2" inputRef={hold2Ref} defaultValue={4} />
      <button className={classes.button}>Submit</button>
      <button className={classes.button} onClick={() => setIsLeft(!isLeft)}>
        {isLeft ? "Text Right Side" : "Text Left Side"}
      </button>
    </form>
  );
};

export default BreathworkForm;
