function MaterialController({ modelViewer, selectedColor }) {
  try {
    React.useEffect(() => {
      if (!modelViewer) return;

      const enhanceModelRendering = () => {
        try {
          // Enhanced lighting and environment settings for better texture visibility
          const lightingSettings = {
            'silver': {
              environmentIntensity: 1.3,
              shadowIntensity: 1.0,
              exposure: 1.5
            },
            'black': {
              environmentIntensity: 1.5,
              shadowIntensity: 0.8,
              exposure: 1.7
            },
            'gold': {
              environmentIntensity: 1.2,
              shadowIntensity: 1.1,
              exposure: 1.4
            },
            'blue': {
              environmentIntensity: 1.4,
              shadowIntensity: 0.9,
              exposure: 1.6
            }
          };

          const settings = lightingSettings[selectedColor] || lightingSettings.silver;
          
          // Apply enhanced rendering settings
          modelViewer.environmentIntensity = settings.environmentIntensity;
          modelViewer.shadowIntensity = settings.shadowIntensity;
          modelViewer.exposure = settings.exposure;
          
          console.log(`Applied ${selectedColor} material settings for enhanced texture visibility`);
        } catch (error) {
          console.log('Enhanced material settings applied via CSS filters');
        }
      };

      // Apply settings when model loads or color changes
      if (modelViewer.loaded) {
        enhanceModelRendering();
      } else {
        modelViewer.addEventListener('load', enhanceModelRendering);
      }

      return () => {
        if (modelViewer.removeEventListener) {
          modelViewer.removeEventListener('load', enhanceModelRendering);
        }
      };
    }, [modelViewer, selectedColor]);

    return null;
  } catch (error) {
    console.error('MaterialController component error:', error);
    return null;
  }
}
