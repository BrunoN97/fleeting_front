import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import ResponsiveAppBar from "../src/components/appBar/appBar";
import CustomPaginationActionsTable from "../src/components/table/tableToDo";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <ResponsiveAppBar />

      <CustomPaginationActionsTable />
    </Fragment>
  );
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
