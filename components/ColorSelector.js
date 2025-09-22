function ColorSelector({ selectedColor, onColorChange }) {
  try {
    const colors = [
      { name: 'silver', color: '#f0f0f0', label: 'Silver' },
      { name: 'black', color: '#1a1a1a', label: 'Space Black' },
      { name: 'gold', color: '#e6c068', label: 'Gold' },
      { name: 'blue', color: '#2563eb', label: 'Ocean Blue' }
    ];

    return (
      <div className="flex items-center space-x-6" data-name="color-selector" data-file="components/ColorSelector.js">
        {colors.map((colorOption) => (
          <div key={colorOption.name} className="text-center">
            <button
              onClick={() => onColorChange(colorOption.name)}
              className={`color-button ${selectedColor === colorOption.name ? 'active' : ''}`}
              style={{ backgroundColor: colorOption.color }}
              aria-label={`Select ${colorOption.label} color`}
            >
              {selectedColor === colorOption.name && (
                <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center">
                  <div className="icon-check text-sm text-white"></div>
                </div>
              )}
            </button>
            <p className="text-xs font-medium text-[var(--text-secondary)] mt-2 transition-colors duration-300 tracking-wide">
              {colorOption.label}
            </p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('ColorSelector component error:', error);
    return null;
  }
}