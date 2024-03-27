import { useEffect } from 'react';

 const useRightButtonDisable = () => {
  useEffect(() => {
    const disableRightClick = (event) => {
      if (event.button === 2) { // Check if right mouse button is clicked
        event.preventDefault();
      }
    };

    document.body.addEventListener('contextmenu', disableRightClick); // Add event listener to disable right-click

    return () => {
      document.body.removeEventListener('contextmenu', disableRightClick); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once

}

export default useRightButtonDisable;
