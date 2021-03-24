import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';



const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
      <ChatEngine
      height="100vh"
      projectID="1f1b6db4-314c-4d9f-93cf-64b04dbc2c83"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      />
  );
};

export default App;
