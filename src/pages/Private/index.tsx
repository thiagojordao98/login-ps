import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './styles.css';

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="container">
      <div className="container-profile">
        <div className="wrap-profile">
          <form className="profile-info">
            <span className="logo">
              <img
                src="https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_0spsnuL.jpg"
                width="100px"
                alt="foto do perfil"
              />
              Olá {auth.user?.name}, tudo bem?
            </span>
            <div className="profile-info">
              <div className="wrap-input">
                <span className="name-title">
                  Your <b>Name</b>
                </span>
                <output className="output" />
              </div>
              <div className="wrap-input">
                <span className="email-title">
                  Your <b>E-mail</b>
                </span>
                <output className="output" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
