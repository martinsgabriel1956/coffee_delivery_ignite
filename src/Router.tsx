import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Checkout, Home, Success } from './pages';
import { Layout } from './layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}