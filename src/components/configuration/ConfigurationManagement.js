import { Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import TabNavigation from '../common/TabNavigation';
import DefineType from '../../pages/DefineType';
import DefineEmitter from '../../pages/DefineEmitter';
import DefineCategory from '../../pages/DefineCategory';
import DefineScope from '../../pages/DefineScope';
import '../../styles/Common.css';

const ConfigurationManagement = () => {
  return (
    <Layout>
      <div className="max-width-container">
          <h1 className="page-title">Configuration Management</h1>
        
        <TabNavigation />

        <Routes>
          <Route path="type" element={<DefineType />} />
          <Route path="emitter" element={<DefineEmitter />} />
          <Route path="category" element={<DefineCategory />} />
          <Route path="scope" element={<DefineScope />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default ConfigurationManagement;