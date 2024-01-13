import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {/* Sử dụng process.env.PUBLIC_URL để truy cập thư mục public */}
        <img
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/D.ico`}
          alt="Logo"
          // Thêm các thuộc tính style khác cho logo nếu cần
        />
      </div>

      <div className={styles.menu}>
        {/* Thêm mã HTML hoặc component cho menu */}
        <span className={styles.menuItem}>Lịch chiếu</span>
        <span className={styles.menuItem}>Cụm rạp</span>
        <span className={styles.menuItem}>Tin tức</span>
        <span className={styles.menuItem}>Ứng dụng</span>

        {/* Thêm menu items khác tùy vào yêu cầu của bạn */}
      </div>

      <div className={styles.loginLogout}>
        {currentUser ? (
          // Nếu đã đăng nhập, hiển thị biểu tượng đăng xuất
          <FontAwesomeIcon icon={faSignOutAlt} />
        ) : (
          // Nếu chưa đăng nhập, hiển thị biểu tượng đăng nhập
          <>
            <FontAwesomeIcon
              className={styles.rightMenuIcon}
              icon={faSignInAlt}
            />
            <FontAwesomeIcon
              className={styles.rightMenuIcon}
              icon={faUserPlus}
            />
          </>
        )}
      </div>
    </div>
  );
}
