import { useEffect, useState } from 'react'

const usePrintScreenDisable = () => {

  const [blackscreen, setBlackscreen] = useState(false)
 useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if the pressed key is the "Print Screen" key or any other key that might trigger a screenshot
      if (e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 124) {
        // Prevent the default action (capturing a screenshot)
        e.preventDefault();
        // Optionally, you can handle or notify the user about the attempt
        console.log("Screenshots are not allowed.");
        setBlackscreen(true)
        // window.alert("Screenshots are not allowed.")

        setTimeout(()=>{
          setBlackscreen(false)
        }, 200)
        
      }
    };

    // Add the event listener for the "keydown" event
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return blackscreen
}

export default usePrintScreenDisable

