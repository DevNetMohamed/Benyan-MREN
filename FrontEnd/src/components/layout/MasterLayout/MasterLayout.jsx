import { Outlet } from "react-router-dom";
import Sidebar from "../../Dashborad/Sidebar/Sidebar";
import Navbar from "../../Dashborad/Navbar/Navbar";
import Footer from "../../Dashborad/Footer/Footer";

export default function MasterLayout() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column w-100">
          <div>
            <Navbar adminName="mohamed" />
          </div>
          <main className="f-grow h-100">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
