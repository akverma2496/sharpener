
import { useRef, useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';

function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const [initial, setInitial] = useState(true)

  useEffect(() => {

    if(initial){
      setInitial(false)
      return
    }

    const sendCartData = async () => {
      
      dispatch(uiActions.showNotification({
        status : "pending",
        title: "Sending ...",
        message : "Sending cart data"
      }))

      const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart)
      })

      if(!response.ok){
        dispatch(uiActions.showNotification({
        status : "error",
        title: "Error!",
        message : "Sending cart data failed!"
      }))
      }

      dispatch(uiActions.showNotification({
        status : "success",
        title: "Success!",
        message : "Sent cart data successfully!"
      }))
    }
    
    sendCartData().catch((err) => {
      dispatch(uiActions.showNotification({
        status : "error",
        title: "Error!",
        message : "Sending cart data failed!"
      }))
    })

  }, [cart])

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
