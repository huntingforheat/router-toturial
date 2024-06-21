import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';
import ProfilesContent from './components/ProfilesContent'

function App() {

  const {pathname} = useLocation();

  return (
    <>
      <Routes>
        <Route path='/*' element={  /* Switch(v5)를 사용했을 때 이 경로는 마지막에 작성 */
          <div>
            <h1>HTTP 404</h1>
            <h2>{pathname} - 이 페이지는 존재하지 않습니다.</h2>
          </div>
        } />
      </Routes>
      <Routes>
        <Route path={'/'} element={<Home />}/>  {/* element에 해당하는 컴포넌트를 넣어주면 path 지정이 됨. */}
        <Route path={'/user'} element={<User />} />
        <Route path={'/user/:username'} element={<User />} />
        <Route path={'/info'} element={<Info />} />
        <Route path={'/info/:num'} element={<Info />} />
        {/* 중첩 */}
        <Route path='/board' element={<Board />} >
          <Route path=':num' element={<BoardContent />} />
        </Route>
        <Route path='/profiles' element={<Profiles />} >
          <Route path=':username' element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
