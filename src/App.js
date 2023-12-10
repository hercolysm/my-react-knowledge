import './App.css';
import Header from './components/01.FirstComponentWithCSS/Header';
import Topic from './components/02.MultiComponents/Topic';
import NormalPropos from './components/03.Props/NormalProps';
import AtributtesProps from './components/03.Props/AtributtesProps';
import Paragraph from './components/04.ValidationAndDefaultValue/Paragraph';
import List from './components/05.Events/List';
import Form from './components/05.Events/Form';
import State from './components/06.useState/State';
import StateLift from './components/06.useState/StateLift';
import Calculator from './components/07.ConditionalRender/Calculator';
import Select from './components/08.Repeticao/Select';
import Objects from './components/08.Repeticao/Objects';
import Icons from './components/09.Icons/Icons';
import Router from './components/10.Router/Router';
import Fetch from './components/11.Requests/Fetch';
import Effect from './components/12.useEffect/Effect';

function App() {
  return (
    <div>
      <h1>Learn React</h1>

      01.FirstComponent: h1 + css
      <Header />
      <hr />

      02.MultiComponents: header + h4
      <Topic /> 
      <hr />

      03.Props:
      <NormalPropos val1="val1" val2="val2" />
      <AtributtesProps val1="val1" val2="val2" />
      <hr />

      04.ValidationAndDefaultValue:
      <Paragraph 
        required_text="This is a list of tasks for you to do." 
        integer={123}
      />
      <hr />
      
      05.Events:
      <Form />
      <List />
      <hr />

      06.useState:
      <State />
      StateLift <br />
      <StateLift />
      <hr />

      07.ConditionalRender
      <Calculator />
      <hr />

      08.Repetição
      <Select />
      <Objects />
      <hr />

      09.React Icons
      <Icons />
      <hr />

      10.React Router 
      <Router />
      <hr />

      11.Requests
      <Fetch />
      <hr />

      12.useEffect
      <Effect />
      <hr />
    </div>
  );
}

export default App;
