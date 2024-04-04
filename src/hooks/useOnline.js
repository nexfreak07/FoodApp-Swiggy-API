import { useEffect, useState } from "react";

export const useOnline = () => {
     const [onlineStatus, setOnlineStatus] = useState(true);

     useEffect(()=>{
        window.addEventListener("online", ()=> setOnlineStatus(true))

        window.addEventListener("offline", ()=> setOnlineStatus(false))


        return ()=> {
            window.removeEventListener("online", ()=> setOnlineStatus(true))

            window.removeEventListener("offline", ()=> setOnlineStatus(false))
        }

     }, [])

    return onlineStatus;
}