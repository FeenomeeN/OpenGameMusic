
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MusicCategory from './body/musicCategory';
import Menu from './header/header'
import Body from './body/mainPage'
import SoundCategory from './body/soundsCategory'
import Contact from './body/conactPage'

function App() {
  return (
    <>
    
    <Router>
      <Menu/>
            <Routes>
                <Route exect path="/" element={<Body/>}/>
                <Route path="/royalty-free-music" element={<MusicCategory/>}/>
                <Route path="/sound-effects-for-videos" element={<SoundCategory/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<h2>Ресурс не найден</h2>} />
            </Routes>

        </Router> 
    </>
    
    
  );
}

export default App;
