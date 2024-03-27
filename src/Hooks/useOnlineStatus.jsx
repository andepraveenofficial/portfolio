import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true) // Initial online state

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []); // Empty dependency array: run effect only once after initial render

    // console.log(isOnline); // For debugging purposes (usually not needed in production)

    return isOnline;
}

export default useOnlineStatus;
