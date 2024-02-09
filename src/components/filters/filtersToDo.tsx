import { TextField } from "@mui/material";
import styles from "./filtersToDo.module.css";

export default function FiltersToDo({ children, ...props }) {
  return (
    <div>
      <TextField
        id="standard-basic"
        variant="standard"
        className={styles.input}
        {...props}
      >
        {children}
      </TextField>
    </div>
  );
}
