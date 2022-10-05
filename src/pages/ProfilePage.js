import { FiGithub } from 'react-icons/fi';

function ProfilePage() {
  return (
    <div className='profile'>
      <h2 className='profile__title'>About Me</h2>
      <p className='profile__body'>
        Hello, my name is Ari. I'm a Front-End Web Developer live in a beautiful
        island in Lombok, Indonesia. You can check my project that im currently
        working in my Github. I am currently using Javascript with React and
        Tailwind to build beautiful looking UI and following best practices. I'm
        open for discussion or any opportunity to collaborate together. Thank
        you!
      </p>
      <a
        href='https://github.com/arialghifari'
        target='_blank'
        rel='noreferrer'
      >
        GITHUB <FiGithub />
      </a>
    </div>
  );
}

export default ProfilePage;
