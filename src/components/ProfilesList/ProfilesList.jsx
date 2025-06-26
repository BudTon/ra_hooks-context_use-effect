import '../ProfileDetails/ProfileDetails.css';
import './ProfilesList.css';


export default function ProfilesList ({ users, handleOnItemClick }) {

  return (
    <div className={'profile-list'} >
      <ul className={'profile-item'}  >
        {users.map(user => (
          <li className={'profile'} key={user.id}>
            <button className={'profile-button'} onClick={() => handleOnItemClick(user.id)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
