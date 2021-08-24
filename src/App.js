import {React,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login,logout,selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header.js'
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import Widget from './Widget';







function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })) 
      }else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])  

  return (
    <div className="App">
      <Header /> 
      {!user ? (<Login />):(
      <div className="app__body">
        <Sidebar/>
        {/* feed */}
        <Feed/>
        {/* widget */}
        <Widget/>
      </div>
      )}
      
      
    </div>
  );
}

export default App;
