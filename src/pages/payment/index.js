import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Payment.scss";
import { Avatar, Button, Modal, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const cx = classNames.bind(styles);

const Payment = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="navbarPayment">
        <Link to="/" className="back-button">
          <ArrowBackIcon />
        </Link>
      </div>
      <div className={cx("nganSach")}>
        <div className={cx("header")}>Thời gian còn lại:</div>
        <div className={cx("body")}>
          <div className={cx("dangKy")}>
            <div className={cx("sale")}>
              <button className={cx("chonGoi")}>
                <div className={cx("title")}>Gói cơ bản</div>
                <div className={cx("price")}>
                  <span>50.000đ</span>
                  <p>1 tháng</p>
                  <div className={cx("quantity")}>
                    <p>Số lượng</p>
                    <input />
                  </div>
                </div>
              </button>
              <button className={cx("chonGoi")}>
                <div className={cx("title")}>Gói đặc biệt</div>
                <div className={cx("price")}>
                  <span>135.000 đ</span>
                  <p>3 tháng</p>
                  <div className={cx("btn-sale")}>TẶNG 1 THÁNG</div>
                  <div className={cx("quantity")}>
                    <p>Số lượng</p>
                    <input />
                  </div>
                </div>
              </button>
              <button className={cx("chonGoi")}>
                <div className={cx("title")}>Gói VIP</div>
                <div className={cx("price")}>
                  <span>255.000 đ</span>
                  <p>6 tháng</p>
                  <div className={cx("btn-sale")}>TẶNG 3 THÁNG</div>
                  <div className={cx("quantity")}>
                    <p>Số lượng</p>
                    <input />
                  </div>
                </div>
              </button>
            </div>
            <>
              <Button
                primary
                className={cx(
                  "btn-signup",
                  "w-86",
                  "py-10",
                  "rounded-lg",
                  "text-18",
                  "mb-10"
                )}
                onClick={handleOpenModal}
              >
                Đăng ký
              </Button>
              {openModal && (
                <div className="modal">
                  <div className="modal-container">
                    <div className="modal-content">
                      <div className="absolute bg-white rounded p-8" style={{height: 250, width: 280}}>
                        <h2 className="text-xl font-bold mb-4" style={{color: "black"}}>Giỏ Hàng</h2>
                        <table className="table">
                          <thead>
                            <tr className="table-header">
                              <th className="table-cell">Sản Phẩm</th>
                              <th className="table-cell">Số Lượng</th>
                              <th className="table-cell">Số Tiền</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-row">
                              <td className="table-cell">Gói cơ bản</td>
                              <td className="table-cell"></td>
                              <td className="table-cell"></td>
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Gói đặc biệt</td>
                              <td className="table-cell"></td>
                              <td className="table-cell"></td>
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Gói VIP</td>
                              <td className="table-cell"></td>
                              <td className="table-cell"></td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="totalPrice">Tổng số tiền: đ</p>
                        </div>
                        <div className="qr-code">
                        <img
                          src={require("../../assets/images/paymentMomo.jpg")}
                          alt="Payment QR Code"
                          style={{ width: 400, height: 400, marginLeft: 72, borderRadius: 31}}
                        />
                  </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn-close"
                            onClick={handleCloseModal}
                          >
                            Đóng
                          </button>
                          <button className="btn-confirm">Xác nhận</button>
                        </div>
                        <Menu
                          style={{
                            width: 256,
                          }}
                          defaultSelectedKeys={["1"]}
                          defaultOpenKeys={["sub1"]}
                          mode="inline"
                        />
                      </div>
                </div>
              )}
            </>
          </div>
          <div className={cx("description")}>
            <div className={cx("descriptionTop")}>
              <Avatar />
              Quản lý nhân sự dễ dàng <br />& tiện lợi hơn với XPandit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
