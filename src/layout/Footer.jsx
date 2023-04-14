import React from 'react';
import styles from '../styles/about/AboutItem.module.css';
import { Facebook, Instagram, Vimeo } from '../assets/social-icons';

const Footer = () => {
  const icons = [
    { link: 'https://www.instagram.com/', element: <Instagram /> },
    { link: 'https://www.facebook.com/', element: <Facebook /> },
    { link: 'https://vimeo.com/', element: <Vimeo /> },
  ];

  return (
    <footer>
      <div>
        <h6>Whaleap Studio</h6>
        <p>
          이 페이지는 SIMPLE 타입의 샘플 페이지입니다. 페이지 내 정보는 임의로
          생성되었습니다.
        </p>
      </div>
      <div>
        <ul>
          {icons.map((item, i) => (
            <li key={i}>
              <a href={item.link}>{item.element}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
