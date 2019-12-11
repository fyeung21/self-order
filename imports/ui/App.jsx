import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    <div class="ui animated button" tabindex="0">
      <div class="visible content">Next</div>
      <div class="hidden content">
        <i class="right arrow icon"></i>
    </div>
</div>
  </div>
);

export default App;
