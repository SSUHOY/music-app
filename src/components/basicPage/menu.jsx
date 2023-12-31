import React from "react";
import * as S from "../styles/basicPage/basicPageStyles";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useAuthContext } from "../../context/AuthContext";
import { logoutUser } from "../../store/actions/creators/tracks";
import { useDispatch } from "react-redux";

const Menu = ({ activeLinkClass }) => {
  const { logoutUserFn } = useAuthContext();
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    logoutUserFn();
    dispatch(logoutUser())
  };

  return (
    <React.Fragment>
      <S.MenuList>
        <S.MenuItem>
          <NavLink to="/" className="menu__link-burger">
            Главная
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/favorites" className="menu__link-burger">
           Мои треки
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink
            onClick={handleLogoutClick}
            to="/login"
            className={({ isActive }) =>
              cn("menu__link-burger", { [activeLinkClass]: isActive })
            }>
            Выйти
          </NavLink>
        </S.MenuItem>
      </S.MenuList>
    </React.Fragment>
  );
};

export default Menu;
