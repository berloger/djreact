import React from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import CommentList from './containers/CommentListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <CommentList/>
      </CustomLayout>
    </div>
  );
}

export default App;
