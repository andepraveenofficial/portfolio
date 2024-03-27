import{ useEffect } from 'react'

const useCopyDisable = () => {
    useEffect(() => {
    const disableTextSelection = (e) => {
      e.preventDefault();
    };

    // Add event listeners to prevent text selection and copying
    document.addEventListener('selectstart', disableTextSelection); // For mouse selection
    document.addEventListener('copy', disableTextSelection); // For Ctrl+C (copy)
    
    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener('selectstart', disableTextSelection);
      document.removeEventListener('copy', disableTextSelection);
    };
  }, []);
};


export default useCopyDisable