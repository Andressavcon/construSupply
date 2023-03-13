import React from 'react';
import FornecedorCards from '../Fornecedores/FornecedorCards';
import FornecedorModal from '../Fornecedores/FornecedorModal';
import PropTypes from 'prop-types';
import Head from '../Helper/Head';


const UserProfile = ({ user }) => {
  const [modalCard, setModalCard] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);

          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div className="container mainContainer">
      <Head title="Perfil" />
      {modalCard && (
        <FornecedorModal card={modalCard} setModalCard={setModalCard} />
      )}
      {pages.map((page) => (
        <FornecedorCards
          user={user}
          key={page}
          page={page}
          setModalCard={setModalCard}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

UserProfile.defaultProps = {
  user: 0,
};

UserProfile.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default UserProfile;
