import { useEffect } from 'react';

const JsLoader = () => {
  useEffect(() => {
    // Function to load external JS files
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('/assets/js/plugins/jquery.min.js');
        await loadScript('/assets/js/plugins/swiper.js');
        await loadScript('/assets/js/plugins/bootstrap.min.js');
        await loadScript('/assets/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    // Check if user has already set a theme preference
    let storedTheme = localStorage.getItem('intellactai');

    // If no preference is found, default to dark mode
    if (!storedTheme) {
      storedTheme = 'dark';
      localStorage.setItem('intellactai', storedTheme);
    }

    // Set the theme based on the stored value
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  return null;
};

export default JsLoader;
