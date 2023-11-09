import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
// import MainContainer from "./MainContainer"

const Body = () => {
  const isSideBarOpen = useSelector(store => store.app.isSideBarOpen)
  return (
    <section className=" p-2">
      <div className="max-w-70 mx-auto p-1 grid grid-cols-7 gap-16 w-screen">
        {isSideBarOpen && <SideBar />}
        {/* <MainContainer /> */}
        <Outlet />
      </div>
    </section>
  )
}

export default Body;
//max-w-7xl mx-auto p-1 grid grid-cols-7 gap-16