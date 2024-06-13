import styled from 'styled-components';
import About from "./About";
import './App.css';
function App() {
  return (
    <>
      <Bg>
        <About />
        
        <div className="area">
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      </Bg>
    </>
  );
}

export default App;

const Bg = styled.div`
  height: auto;
  width: 100%;
  background-color:#11071F;
  color:white;
`;
