import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <div>
          <p>My Magical</p>
          <p>Phonebook</p>
        </div>
      </h1>
    </div>
  );
}
