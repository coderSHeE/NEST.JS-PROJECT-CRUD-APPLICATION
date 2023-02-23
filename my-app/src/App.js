import {Route , Routes} from 'react-router-dom';

import './App.css';
import Layout from './components/shared/Layout';
import { Table } from 'react-bootstrap';


function App() {
  return (
      <>

      <Layout>
        <Routes>
          <Route path='/' element={<Table/>}></Route>
        </Routes>
      </Layout>
      </>
  );
}

export default App;
