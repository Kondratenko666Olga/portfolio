import './Contacts.scss';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <h2 className="contacts-title"></h2>
        <div className="contacts-form">
          <form
            className="register-form"
            id="reg_form"
            name="reg_form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="input-group">
              <input type="text" name="login" placeholder="Name" />
              <input type="text" name="login" placeholder="Last name" />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email" />
              <input type="phone" name="phone" placeholder="Phone number" />
            </div>
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
