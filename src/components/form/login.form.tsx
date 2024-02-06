import Link from "next/link";
import Button from "../button/button";
import Input from "../input/input";
import styles from "../../../styles/login.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function handleLogin(data: LoginSchema) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
      <Input type="email" placeholder="Seu e-mail" {...register("email")} />
      <Input
        type="password"
        placeholder="Sua senha"
        {...register("password")}
      />

      <Button type="submit"> Entrar </Button>
      <Link className={styles.link} href="/createLogin">
        Ainda não possui uma conta?
      </Link>
    </form>
  );
}
