import './Contacts.scss';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <h2 className="contacts-title"></h2>
        <div className="contacts-form">
          <form action="">
            <div className="input-group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone number" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
