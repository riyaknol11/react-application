import { Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import TabNavigation from './TabNavigation';
import DefineType from '../../pages/DefineType';
import DefineEmitter from '../../pages/DefineEmitter';
import DefineCategory from '../../pages/DefineCategory';
import AddNewScopeForm from '../../pages/define_scope/AddNewScopeForm';
import DefinedScope from '../../pages/define_scope/DefinedScope';
import '../../styles/Common.css';

const ConfigurationManagement = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
          <h1 className="page-title">Configuration Management</h1>
        
        <TabNavigation />

        <Routes>
          <Route path="type" element={<DefineType />} />
          <Route path="emitter" element={<DefineEmitter />} />
          <Route path="category" element={<DefineCategory />} />
          <Route path="scope" element={ <>
            <AddNewScopeForm />
            <div className="mt-6">
              <DefinedScope />
            </div>
          </>} />
        </Routes>
      </div>
    </Layout>
  );
};

export default ConfigurationManagement;