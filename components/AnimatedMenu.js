function AnimatedMenu({ currentPage }) {
  try {
    const menuItems = [
      { name: 'Apple Watch SE', page: 'index.html' },
      { name: 'iPhone 15 Pro', page: 'iphone.html' },
      { name: 'iPad Pro', page: 'ipad.html' },
      { name: 'MacBook Pro', page: 'macbook.html' }
    ];

    const handleNavigation = (page) => {
      if (page !== currentPage) {
        window.location.href = page;
      }
    };

    return (
      <nav className="absolute top-6 left-0 right-0 z-50 fade-in" data-name="animated-menu" data-file="components/AnimatedMenu.js">
        <div className="flex items-center justify-center">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-full px-8 py-3 shadow-sm">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <span 
                    className={`nav-item ${currentPage === item.page ? 'text-[var(--accent-color)] font-semibold' : ''}`}
                    onClick={() => handleNavigation(item.page)}
                  >
                    {item.name}
                  </span>
                  {index < menuItems.length - 1 && <div className="nav-divider"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('AnimatedMenu component error:', error);
    return null;
  }
}
