import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './main/components/Header';
import Main from './main/components/Main';
import Todo from './main/components/Todo';
import QnA from './main/components/QnA';
import Member from './main/components/member';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/QnA" element={<QnA />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
