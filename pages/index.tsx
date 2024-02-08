import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Home() {
  return <div>Pagina Inicial</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { "fleeting-token": token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
