import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
    return async (dispatch) => {

        const fetchData = async () => {
            
            const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`)
            
            if(!response.ok){
                console.log("i am running")
                throw new Error("Fetching cart data failed")
            }

            const data = await response.json()
            return data;
        }

        try {
           const cartData =  await fetchData();
           dispatch(cartActions.replaceItems({
            items : cartData?.items || [],
            totalQuantity : cartData?.totalQuantity || 0
           }))
           
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Fetching cart data failed!"
            }))
        }
    }
}



// thunk - we write our own action creators
export const sendCartData = (cart) => {

    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Sending ...",
            message: "Sending cart data"
        }))

        const sendData = async () => {
            const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`, {
                method: "PUT",
                body: JSON.stringify({
                    items : cart.items,
                    totalQuantity: cart.totalQuantity
                })
            })

            if (!response.ok) {
                throw new Error("Sending cart data failed")
            }
        }

        try {
            await sendData();
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sent cart data successfully!"
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!"
            }))
        }

    }
}