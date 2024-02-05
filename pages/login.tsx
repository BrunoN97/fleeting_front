import Link from "next/link";
import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={styles.background}>
      <LoginCard title="Login">
        <form className={styles.form}>
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />

          <Button> Entrar </Button>
          <Link className={styles.link} href="/createLogin">
            {" "}
            Ainda não possui uma conta?{" "}
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}
