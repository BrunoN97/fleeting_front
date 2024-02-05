import Link from "next/link";
import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/login.module.css";

export default function CreateLogin() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="name" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />

          <Button> Entrar </Button>
          <Link className={styles.link} href="/login">
            {" "}
            Ja tem uma conta?{" "}
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}
