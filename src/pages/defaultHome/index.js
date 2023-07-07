import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./LayoutHome.module.scss";

const cx = classNames.bind(styles);

const LayoutHome= () => {
  return (
    <div className={cx("wapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <div className={cx("content-top")}>
            <span>chào mừng đến với Xpandt</span>
            <p>
              để quản lí<span> nhân sự</span>
            </p>
          </div>
          <div className="btn-options">
            <Link to="/home">
              <button text>Phiên bản web</button>
            </Link>
            <Link to="/payment">
              <button text>
                <p>Gia hạn</p>
              </button>
            </Link>
          </div>
          <div className={cx("content-bot")}>
            <div className={cx("bot-left")}>
              <span>
                Quản lí nhân sự <p>thật dễ dàng</p>
              </span>
              <p>Khi đã có XPandit.</p>
              <div></div>
            </div>
            <div className={cx("bot-right")}>
              <img className={cx("image-home")} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutHome;
