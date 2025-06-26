import { useState, useEffect } from 'react';
import ProfilesList from './components/ProfilesList/ProfilesList';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import './App.css'

export default function App() {
  const [users, setUsers] = useState([]);

  const [selectedID, setSelectedID] = useState(null);

  const handleOnItemClick = (item) => {
    setSelectedID(item);
  }
  const baseUrl = import.meta.env.VITE_APP_URL_PROFILE;

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Ошибка загрузки пользователей:", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={'container'}>
      <h1>8. Hooks & Context API</h1>
      <h2>8.1 Список и детали</h2>
      <div >
        <ProfilesList users={users} handleOnItemClick={handleOnItemClick} />
        <ProfileDetails selectedID={selectedID} />
      </div>
    </div>
  );
};
