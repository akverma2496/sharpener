
import { useRef, useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData } from './store/cart-actions';
import { fetchCartData } from './store/cart-actions';

function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const [initial, setInitial] = useState(true)


  useEffect(() => {
    dispatch(fetchCartData())
  },[])

  useEffect(() => {

    if(initial){
      setInitial(false)
      return
    }

    if(cart.changed) dispatch(sendCartData(cart))

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
