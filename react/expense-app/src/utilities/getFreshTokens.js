const apiKey = import.meta.env.VITE_API_KEY
import { useContext } from "react"


export const getFreshTokens = async () => {

    try {
        console.log("reaching here")
        const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${apiKey}`, {
            method: "POST",
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: localStorage.getItem("refreshToken")
            }).toString(),
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })

        if (!response.ok) {
            console.log("some error occured")

        }
        else {
            console.log("setting up the data")
            const data = await response.json()
            localStorage.setItem("idToken", data.id_token)
            localStorage.setItem("refreshToken", data.refresh_token)
            return data.id_token
        }
    } catch (error) { }
}