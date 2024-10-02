import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contactInfo">
        <h2>Контакты для связи</h2>
        <p>Телефон: +7-999-333-00-38</p>
        <p>Email: JabasOfTheTop@gmail.com</p>
        <p>Адрес: ул. Беренгова, д. 23</p>
      </div>
      <div className="copyRight">
        <p>&copy; 2024 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;

