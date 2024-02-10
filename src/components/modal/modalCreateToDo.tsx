import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextFieldModal from "./inputModal/inputModal";
import styles from "./modalCreateToDo.module.css";
import SelectLabels from "./selectModal/selectModal";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createToDo } from "../../service/LoginService";
import SimpleAlert from "../alert/alert";

const createToDoSchema = z.object({
  loginId: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
});

type CreateToDoSchema = z.infer<typeof createToDoSchema>;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateToDoSchema>({
    resolver: zodResolver(createToDoSchema),
  });

  async function handleCreateToDo(data: CreateToDoSchema) {
    try {
      await createToDo(data);
      setShowAlert(true);
      reset();
    } catch (error) {
      setShowAlertError(true);
    }
  }

  const handleClear = () => {
    reset();
  };

  const [showAlert, setShowAlert] = React.useState(false);
  const [showAlertError, setShowAlertError] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setShowAlert(false);
    setShowAlertError(false);
  };

  const handleClose = () => {
    setOpen(false);
    setShowAlert(false);
    setShowAlertError(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Criar ToDo</Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={handleSubmit(handleCreateToDo)}>
            {showAlert && (
              <SimpleAlert severity="success">
                {" "}
                O To-Do foi criado com sucesso.
              </SimpleAlert>
            )}
            {showAlertError && (
              <SimpleAlert severity="error">
                {" "}
                To-Do não criado, campos incorretos.
              </SimpleAlert>
            )}
            <Box sx={style} className={styles.divModal}>
              <div className={styles.divCreateToDo}>
                <div className={styles.title}>
                  <h2> Criação de ToDo's</h2>
                </div>
                <div className={styles.divInputs}>
                  <TextFieldModal label="Login ID" {...register("loginId")} />
                  <TextFieldModal label="Título" {...register("title")} />
                  <TextFieldModal
                    label="Descrição"
                    {...register("description")}
                  />
                  <SelectLabels {...register("status", { required: true })} />
                </div>
                <div className={styles.divButton}>
                  <Button variant="outlined" type="submit">
                    Criar
                  </Button>
                  <Button onClick={handleClear} variant="outlined">
                    Limpar
                  </Button>
                </div>
              </div>
            </Box>
          </form>
        </Modal>
      </div>
    </div>
  );
}
