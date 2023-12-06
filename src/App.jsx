import './header.css';
import imgInicio from '/inicioRecurso 1.png'
import Header from './Header.jsx';
import Section1 from './Section1.jsx';
import Sectiondos from './Sectiondos.jsx';
import sectiondos from './sectiondos.css';
import Sectiontres from './Sectiontres.jsx';
import sectiontres from './sectiontres.css';
import Sectioncuatro from './Sectioncuatro.jsx';
import sectioncuatro from './sectioncuatro.css';
import Sectioncinco from './Sectioncinco.jsx';
import sectioncinco from './sectioncinco.css';





function App() {

  return (
    <>
    
  <Header/>
  <header/>
  <Section1 imagen={imgInicio} />
  <Sectiondos texto={'Comic'}/>
  <sectiondos/>
  <Sectiontres/>
  <sectiontres/>
  <Sectioncuatro/>
  <sectioncuatro/>
  <Sectioncinco/>
  <sectioncinco/>

    </>
  );
}

export default App; 