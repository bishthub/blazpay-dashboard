// windowCloseListener.js
import { useDispatch } from "react-redux";

function handleWindowClose() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.root);
  if (isAuthenticated) {
    // If the user is authenticated, dispatch the logout action
    dispatch({ type: "logout" });
  }
}

window.addEventListener("beforeunload", handleWindowClose);

// Export any other functions or values needed
export { handleWindowClose };
