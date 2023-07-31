/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import * as S from "./header.style";
import MenuMobile from "../menuMobile/MenuMobile";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [headerIsVisible, setHeaderIsVisible] = useState(false);

  useEffect(() => {
    function positionScroll() {
      if (window.scrollY > 10) {
        setHeaderIsVisible(true);
      } else {
        setHeaderIsVisible(false);
      }
    }
    window.addEventListener("scroll", positionScroll);
  }, []);

  return (
    <S.HeaderMenu isVisible={headerIsVisible} menuVisible={menuIsVisible}>
      <S.NavList>
        <p className="logo">
          <span>SC DataLink</span>
        </p>
        <ul className="nav-list">
          <li>
            <a className="a" href="#home">
              INICIO
            </a>
          </li>
          <li>
            <a className="a" href="#products">
              PRODUTOS
            </a>
          </li>
          <li>
            <a className="a" href="#service">
              SERVIÇOS
            </a>
          </li>
          <li>
            <a className="a" href="#work">
              TRABALHO
            </a>
          </li>
          <li>
            <a className="a" href="#pricing">
              PLANOS
            </a>
          </li>
          <li>
            <a className="a" href="#contact">
              CONTATO
            </a>
          </li>
        </ul>
        <div className="divIcons">
          <IoClose
            size={30}
            className="mobIoClose"
            onClick={() => setMenuIsVisible(false)}
          />
          <RiMenu3Fill
            onClick={() => setMenuIsVisible(true)}
            className="mobile"
          />
        </div>
      </S.NavList>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </S.HeaderMenu>
  );
}
