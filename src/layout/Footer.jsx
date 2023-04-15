import React from 'react';
import { Facebook, Instagram, Vimeo } from '../assets/social-icons';
import '../styles/footer.css';

const Footer = () => {
  const icons = [
    { link: 'https://www.instagram.com/', element: <Instagram /> },
    { link: 'https://www.facebook.com/', element: <Facebook /> },
    { link: 'https://vimeo.com/', element: <Vimeo /> },
  ];

  return (
    <footer>
      <div>
        <h5>WHALEAP STUDIO</h5>
        <p className="text-md">
          <span>이 페이지는 SIMPLE 타입의 샘플 페이지입니다.</span>
          <span>페이지 내 정보는 임의로 생성되었습니다.</span>
        </p>
      </div>
      <ul>
        {icons.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank">
              {item.element}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
