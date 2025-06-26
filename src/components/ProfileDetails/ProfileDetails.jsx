import { useEffect, useState } from 'react';
// import './ProfileDetails.css';

export default function ProfileDetails(infoSelected) {

  const { selectedID } = infoSelected;
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelRequest = false;

    if (!selectedID) return;

    async function loadDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_APP_URL_PROFILE_USER}${selectedID}.json`
        );
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        if (!cancelRequest) setDetails(data);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
      } finally {
        if (!cancelRequest) setLoading(false);
      }
    }

    loadDetails();
    
    return () => {
      cancelRequest = true;
    };
  }, [selectedID]);
  return (
    <div className={'profile-box'} >
      {loading ? (
        <div className={'details-profile'}>
          <p>Идет загрузка...</p>
        </div>
      ) : details ? (
        <div className={'details-profile'}>
          <ul className={'profile-list'}>
            <li>
              <div className={'profiles-img'}>
                <img src={details.avatar} alt={details.name} />
              </div>
            </li>
            <li><div className={'propfile-name'}>{details.name}</div></li>
            <li><div className={'profiles-text'}>City: {details.details.city}</div></li>
            <li><div className={'profiles-text'}>Company: {details.details.company}</div></li>
            <li><div className={'profiles-text'}>Position: {details.details.position}</div></li>
          </ul>
        </div>
      ) : (
        <div className={'details-profile'}>
          <p >Выберите профиль</p>
        </div>
      )}
    </div>
  );
};
