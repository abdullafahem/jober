import { Routes, Route } from 'react-router-dom';

import { Stats, Layout, Jobs, AddJob, Profile } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Stats />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
