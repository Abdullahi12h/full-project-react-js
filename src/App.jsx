// ✅ CORRECTED App.jsx
import { Routes, Route } from 'react-router-dom';

 function App() {
  return (
    // Remove <BrowserRouter> wrapper
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* other routes */}
    </Routes>
  );
}export default App