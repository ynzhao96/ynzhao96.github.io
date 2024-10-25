import './app.css';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import SiderComponent from '../../components/sider/sider';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/home';
import Problems from '../problems/problems';

export default function App() {
  return (
    <Router>
      <Layout className='lay-out'>
        <Sider theme='light' className='sider'>
          <SiderComponent />
        </Sider>
        <Content className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/problems" element={<Problems />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  )
}
