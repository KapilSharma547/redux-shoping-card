import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import Auth from './componants/Auth';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './componants/Product';
import Layout from './componants/Layout';
import { useEffect } from 'react';
import Notification from './Notification';
import { uiActions } from './store/ui-slice';
// F:\React\new-resux\node_modules\bootstrap\dist\css\bootstrap.min.css

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  // console.log(isLoggedIn)

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    const sendRequest = async () => {
      //send state as sending request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request",
          type: 'warning'
        })
      )
      const res = await fetch('https://redux-http-48577-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart),
      })
      const data = await res.json();
      //send state as request is successfull
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request to  Database Successfully",
        type: 'success'
      }))
    }
    sendRequest().catch((err) => {
      //send state as erro
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request failed",
        type: 'error'
      }))
    })
  }, [cart])
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
