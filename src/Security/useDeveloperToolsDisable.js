import { useEffect } from 'react'

const useDeveloperToolsDisable = () => {
  useEffect(() => {
    // Prevent Ctrl + Shift + I (Developer Tools)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'C')) {
        e.preventDefault();
        console.log("Developer Tools are disabled.");
      }
    };

    // Add the event listener for the "keydown" event
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};


export default useDeveloperToolsDisable