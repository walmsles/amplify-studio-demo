import './App.css';
import {
  SocialPostCollection 
 } from './ui-components';
 import { Amplify } from 'aws-amplify';

 import { withAuthenticator } from '@aws-amplify/ui-react';
 import '@aws-amplify/ui-react/styles.css';

function App({signOut, user}) {
  return (
    <div className="App">
      <h1>Hello {user.attributes.name}</h1>

      <SocialPostCollection />

      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default App;
// export default withAuthenticator(App);
