import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  function logoutHandler() {
    authService.logout().then(() => {
      dispatch(logout());
    });
  }

  return (
    <div
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      LogoutBtn
    </div>
  );
}

export default LogoutBtn;
