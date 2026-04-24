import { Banner } from '../../components/Banner';

const ContactPage = () => {
  const sectionInfo = [
    { id: 'contact-phone', title: 'Call us', content: '0118 999 881 999 119 7253', icon: 'call' },
    { id: 'contact-email', title: 'Send us an email', content: 'reactlots@simail.sim', icon: 'mail' },
    {
      id: 'contact-location',
      title: 'Or come visit us',
      content: '123, The Solar Flare, Oasis Spring',
      icon: 'location_on',
    },
  ];

  return (
    <section>
      <Banner world="os" />
      <div className="container my-5 text-center">
        <h2>Interested in buying a lot?</h2>
        {sectionInfo.map((item) => (
          <section className="mt-5" key={item.title}>
            <h3>
              <span className="material-symbols-rounded me-2" aria-hidden="true">
                {item.icon}
              </span>
              {item.title}
            </h3>
            <span className="sims-font">{item.content}</span>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
