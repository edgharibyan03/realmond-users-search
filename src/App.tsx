import React from 'react';
import UserList from './components/UsersList';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App p-4 bg-gray-100 min-h-screen w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Users List</h1>
      <UserList />
    </div>
  );
};

export default App;