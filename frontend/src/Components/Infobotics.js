import React from 'react';
import './Infobotics.css'; // Import the CSS file
import backgroundImage from '../images/phoenix-logo.jpeg';

const profiles = [
  {
    id: 9,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660842/450309891_1039779677766444_5188561565479082535_n_rnrrpj.jpg', // Replace with actual image URLs
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #9',
    moreInfoLink: 'https://www.instagram.com/p/C9K8DJ_vAL5/?img_index=1', // Replace with actual link URLs
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660830/447956359_471747068558257_3948681037979461789_n_o8qs7o.jpg', // Replace with actual image URLs
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #8',
    moreInfoLink: 'https://www.instagram.com/p/C8BVTckvwwF/?img_index=1', // Replace with actual link URLs
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660823/444511683_430737733238603_1401387454478499599_n_fzsdim.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #7',
    moreInfoLink: 'https://www.instagram.com/p/C7Cj2aUSVxa/?img_index=1',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660819/439895079_1357435578264120_4402505508956222131_n_kzgjtv.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #6',
    moreInfoLink: 'https://www.instagram.com/p/C6CE_jbv4xD/?img_index=1',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660809/371418582_862116461946267_1846932705157894860_n_gslt0e.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #5',
    moreInfoLink: 'https://www.instagram.com/p/CwkoRuQvAtW/?img_index=1',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660796/369164460_1487402708691184_4522245161009116066_n_qvrmqc.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #4',
    moreInfoLink: 'https://www.instagram.com/p/CwS0WWvPk7N/?img_index=1',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660637/366123580_1668412423628471_3160688889408115384_n_rg1pxp.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #3',
    moreInfoLink: 'https://www.instagram.com/p/CvujP_nPykK/?img_index=1',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660486/364263224_682237613810087_5913742306545569228_n_z3c1aj.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #2',
    moreInfoLink: 'https://www.instagram.com/p/CvcgObrPIwr/?img_index=1',
  },
  {
    id: 1,
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724660249/362834323_262904216461658_8465522821510243910_n_akwh9r.jpg',
    title: '𝐈𝐧𝐟𝐨𝐛𝐨𝐭𝐢𝐜𝐬 #1',
    moreInfoLink: 'https://www.instagram.com/p/CvKg80JPbFI/?img_index=1',
  },
];

const Infobotics = () => {
  return (
    
    <div className="profile-page" >
      {profiles.map(profile => (
        <div key={profile.id} className="profile-card">
          <img src={profile.image} alt={profile.title} className="profile-image" />
          <h3 className="profile-title">{profile.title}</h3>
          <a href={profile.moreInfoLink} className="more-info-button">Discover</a>
        </div>
      ))}
    </div>
  );
};

export default Infobotics;