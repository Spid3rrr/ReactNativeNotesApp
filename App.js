import LoginScreen from './components/screens/LoginScreen';
import MainScreen from './components/screens/MainScreen';
import { useState } from 'react';

export default function App() {
  const [user,setUser] = useState(null);
  return (
    <>
    {
      user?
      <MainScreen setUser={setUser} user={user}/>:
      <LoginScreen setUser={setUser}/>
    }
    </>
  );
}
