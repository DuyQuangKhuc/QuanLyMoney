import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./LayoutHome.module.scss";

const cx = classNames.bind(styles);

const LayoutHome = () => {
  return (
    <div className={cx("wapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}>       
          <div className={cx("content-top")}>
            <div className={cx("inner")}>
              <div className={cx("header-logo")}>
                <img src="" alt="XPandit logo"/>
              </div>
              <div className={cx("header-items")}>
              <Link to="/home">
                <button text>Phiên bản web</button>
              </Link>
              <Link to="/payment">
                <button text>Gia hạn</button>
              </Link>
              </div>
            </div>
          </div>
          
          <div className={cx("content-bot")}>
            <div className={cx("bot-left")}>
              <div>XPandit</div>           
              <p>XPandit là phần mềm quản lý nhân sự, </p>
              <p>giúp quản lý nhân cho các doanh nghiệp,</p>
              <p> công ty một cách dễ dàng và thuận tiện nhất</p>
            </div>
            <div className={cx("bot-right")}>
              <img className={cx("image-home")} alt="Image" src="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutHome;