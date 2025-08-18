
import React from 'react';
import Header from './components/Header'; // هدر از پوشه components
import Homepage from './pages/Homepage'; // صفحه اصلی از پوشه pages

function App() {
  return (
    <div>
      {/* این بخش بالای سایت نمایش داده میشه */}
      <Header />

      {/* این بخش محتوای صفحه اصلیه */}
      <Homepage />
    </div>
  );
}

export default App;