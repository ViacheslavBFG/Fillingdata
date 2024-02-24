import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DivChange, BtnStyleFlag, ImgStyleFlag } from './languageSwitcherStyle';
import BcgEn from '../../img/engflag.jpg';
import BcgUa from '../../img/uaflag.jpg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <DivChange>
      <BtnStyleFlag 
        onClick={() => changeLanguage('en')} 
        style={{ opacity: currentLanguage === 'en' ? 1 : 0.5 }}>
        <ImgStyleFlag src={BcgEn} alt="" />
      </BtnStyleFlag>
      <BtnStyleFlag 
        onClick={() => changeLanguage('uk')} 
        style={{ opacity: currentLanguage === 'uk' ? 1 : 0.5 }}>
        <ImgStyleFlag src={BcgUa} alt="" />
      </BtnStyleFlag>
    </DivChange>
  );
};

export default LanguageSwitcher;
