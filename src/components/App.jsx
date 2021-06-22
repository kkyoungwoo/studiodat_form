import './app.css';
import Agree from './content/Agree'
import Form from './content/Form'

function App() {
  return (
    <div className="App">
      <div className="maintext">온라인 참가신청</div>
      <Agree />
      <button className="attend">온라인 참가신청</button>
      {/*컴포넌트 분할 필요*/}
      <div>설문폼 제작중</div>
      <Form />
    </div>
  );
}

export default App;