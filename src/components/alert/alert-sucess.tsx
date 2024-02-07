import { Alert } from "@mui/material";

export default function AlertSucess({ children, ...props }) {
  console.log("alert");
  return (
    <Alert variant="filled" severity="success" {...props}>
      {children}
    </Alert>
  );
}
