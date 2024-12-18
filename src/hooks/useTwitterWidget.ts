import { useEffect } from 'react';
import { TWITTER_WIDGET_SCRIPT } from '../config/constants';

export function useTwitterWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = TWITTER_WIDGET_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}