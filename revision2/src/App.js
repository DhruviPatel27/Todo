import './App.css';
import Display from './Component/Redux/Display';
import Input from './Component/Redux/Input';
import DocumentTitle from './Component/Use Effect/DocumentTitle';
import Timer from './Component/Use Effect/Timer';
import AlertInput from './Component/Use State/AlertInput';
import Counter from './Component/Use State/Counter';
import Form from './Component/Use State/Form';
import Todo from './Component/Use State/Todo';
import FormValidation from './Component/use Ref/FormValidation';
import Timer2 from './Component/use Ref/Timer2';
import Uncontrolled from './Component/use Ref/Uncontrolled';

function App() {
  return (
    <div className="App">
      <Form/>
      <Todo/>
      <Timer/>
      <Counter/>
      <Timer2/>
      <Uncontrolled/>
      <DocumentTitle/>
      <FormValidation/>
      <AlertInput/>
      <Input/>
      <Display/>
    </div>
  );
}

export default App;
