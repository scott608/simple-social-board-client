import Header from "@shared/components/HeaderComponent";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }