import styled from 'styled-components';

export const HeaderSection = styled.header`

.header-top,
.header-user-actions,
.desktop-navigation-menu { display: none; }

.header-main {
  padding: 20px 0;
  border-bottom: 1px solid var(--cultured);
}

.header-logo { margin-bottom: 20px; }

.header-logo img { margin: auto; }

.header-search-container { position: relative; }

.header-search-container .search-field {
  font-size: var(--fs-7);
  color: var(--onyx);
  padding: 10px 15px;
  padding-right: 50px;
  border: 1px solid var(--cultured);
  border-radius: var(--border-radius-md);
}

.search-field::-webkit-search-cancel-button { display: none; }

.search-btn {
  background: var(--white);
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  color: var(--onyx);
  font-size: 18px;
  padding: 8px 15px;
  border-radius: var(--border-radius-md);
  transition: color var(--transition-timing);
}

.search-btn:hover { color: var(--salmon-pink); }

.mobile-bottom-navigation {
  background: var(--white);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
  z-index: 5;
}

.mobile-bottom-navigation .action-btn {
  position: relative;
  font-size: 26px;
  color: var(--eerie-black);
  padding: 10px;
}

.mobile-bottom-navigation .count {
  background: var(--bittersweet);
  color: var(--white);
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  font-weight: var(--weight-500);
  line-height: 1;
  padding: 2px 4px;
  border-radius: 20px;
}

.mobile-navigation-menu {
  background: var(--white);
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  padding: 20px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
  overflow-y: scroll;
  overscroll-behavior: contain;
  visibility: hidden;
  transition: 0.5s ease;
  z-index: 20;
}

.mobile-navigation-menu.active {
  left: 0;
  visibility: visible;
}

.menu-top {
  padding-bottom: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--cultured);
}

.menu-top .menu-title {
  color: var(--salmon-pink);
  font-size: var(--fs-4);
  font-weight: var(--weight-600);
}

.menu-close-btn {
  color: var(--eerie-black);
  font-size: 22px;
}

.menu-close-btn ion-icon { --ionicon-stroke-width: 50px; }

.mobile-menu-category-list { margin-bottom: 30px; }

.menu-category .accordion-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-category-list .menu-category { border-bottom: 1px solid var(--cultured); }

.mobile-menu-category-list .menu-title {
  color: var(--onyx);
  font-size: var(--fs-6);
  font-weight: var(--weight-500);
  padding: 12px 0;
}

.accordion-menu > div { font-size: 14px; }

.accordion-menu ion-icon {
  color: var(--onyx);
  --ionicon-stroke-width: 90px;
}

.accordion-menu.active .add-icon,
.accordion-menu .remove-icon { display: none; }

.accordion-menu .add-icon,
.accordion-menu.active .remove-icon { display: block; }

.menu-category .submenu-category-list { margin-left: 10px; }

.submenu-title {
  padding: 6px 0;
  font-size: var(--fs-6);
  color: var(--sonic-silver);
  font-weight: var(--weight-300);
}

.submenu-title:hover { color: var(--davys-gray); }

.submenu-category-list {
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: 0.5s ease-in-out;
}

.submenu-category-list.active {
  max-height: 148px;
  visibility: visible;
}

.menu-bottom .menu-category-list { margin-bottom: 20px; }

.menu-bottom .menu-category { border-bottom: none; }

.menu-bottom .menu-title {
  font-size: var(--fs-6);
  font-weight: var(--weight-500);
  color: var(--eerie-black);
  padding: 12px 0;
}

.accordion-menu.active .caret-back { transform: rotate(-0.25turn); }

.menu-bottom .submenu-category-list {
  border: 1px solid var(--cultured);
  border-radius: var(--border-radius-md);
  padding: 0 15px;
  margin-left: 0;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.05);
}

.menu-bottom .submenu-category:not(:last-child) { border-bottom: 1px solid var(--cultured); }

.menu-social-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.menu-social-container .social-link {
  background: var(--cultured);
  color: var(--eerie-black);
  font-size: 20px;
  padding: 10px;
  border-radius: var(--border-radius-md);
}


`;