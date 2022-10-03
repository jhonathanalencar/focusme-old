import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './Layouts/DefaultLayout';
import { History } from './pages/History';
import { Home } from './pages/Home';

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}