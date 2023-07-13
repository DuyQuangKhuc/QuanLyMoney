import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Payment.scss";
import { Avatar, Button, Modal, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const cx = classNames.bind(styles);

const Payment = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [countdown1, setCountdown1] = useState(60);
  const [openModal2, setOpenModal2] = useState(false);
  const [countdown2, setCountdown2] = useState(60);
  const [openModal3, setOpenModal3] = useState(false);
  const [countdown3, setCountdown3] = useState(60);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown1&&setCountdown2&&setCountdown3((prevCountdown) => prevCountdown - 1);
    }, 1000);
   

    if (countdown1,countdown2,countdown3 === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, []);

  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };

  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  const handleOpenModal3 = () => {
    setOpenModal3(true);
  };

  const handleCloseModal3 = () => {
    setOpenModal3(false);
  };

  return (
    <div>
      <div className="navbarPayment">
        <Link to="/" className="back-button">
          <ArrowBackIcon />     
        </Link>
        <div className="titlePayment" style={{ textAlign: "center"}}>
        Chọn gói gia hạn
        </div>
      </div>
      <div className={cx("nganSach")}>
      <div className={cx("header")}>
          Thời gian còn lại: {countdown1&&countdown2&&countdown3 > 0 ? countdown1&&countdown2&&countdown3 : 0} giây
        </div>
        <div className={cx("body")}>
          <div className={cx("dangKy")}>
            <div className={cx("sale")}>
              <button className={cx("chonGoi")}>
                <div className={cx("title")}>Gói cơ bản</div>
                <div className={cx("price")}>
                  <span>50.000đ</span>
                  <p>1 tháng</p>
                  <div className={cx("quantity")}>
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
                      onClick={handleOpenModal1}
                    >
                      Đăng ký
                    </Button>
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
                      onClick={handleOpenModal2}
                    >
                      Đăng ký
                    </Button>
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
                      onClick={handleOpenModal3}
                    >
                      Đăng ký
                    </Button>
                  </div>
                </div>
              </button>
            </div>
            <>
              {openModal1 && (
                <div className="modal">
                  <div className="modal-container">
                    <div className="modal-content">
                      <div
                        className="absolute bg-white rounded p-8"
                        style={{ height: 250, width: 280 }}
                      >
                        <h2
                          className="text-xl font-bold mb-4"
                          style={{ color: "black" }}
                        >
                          Thông Tin Hóa Đơn
                        </h2>
                        <table className="table">
                          <thead>
                            <tr className="table-header">
                              <th className="table-cell">Chi Tiết Hóa Đơn</th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-row">
                              <td className="table-cell">Tên sản phẩm: Gói cơ bản</td>
                              
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Thời hạn: 1 tháng</td>
                             
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Quà tặng: không</td>
                              
                            </tr>
                            <tr>
                            <td className="table-cell">Tổng thời gian nhận: 1 tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="totalPrice">Tổng số tiền: 50.000đ</p>
                      </div>
                      <div className="qr-code">
                        <img
                          src={require("../../assets/images/paymentMomo.jpg")}
                          alt="Payment QR Code"
                          style={{
                            width: 400,
                            height: 400,
                            marginLeft: 72,
                            borderRadius: 31,
                          }}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">

                          <button
                            className="btn-close"
                            onClick={handleCloseModal1}
                          >
                            Đóng
                          </button>
                          <button to="index.js" className="btn-confirm">Xác nhận </button>
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
               {openModal2 && (
                <div className="modal">
                  <div className="modal-container">
                    <div className="modal-content">
                      <div
                        className="absolute bg-white rounded p-8"
                        style={{ height: 250, width: 280 }}
                      >
                        <h2
                          className="text-xl font-bold mb-4"
                          style={{ color: "black" }}
                        >
                          Thông Tin Hóa Đơn
                        </h2>
                        <table className="table">
                          <thead>
                            <tr className="table-header">
                              <th className="table-cell">Chi Tiết Hóa Đơn</th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-row">
                              <td className="table-cell">Tên sản phẩm: Gói đặc biệt</td>
                              
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Thời hạn: 3 tháng</td>
                             
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Quà tặng: tặng 1 tháng thêm</td>
                             
                            </tr>
                            <tr>
                            <td className="table-cell">Tổng thời gian nhận: 4 tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="totalPrice">Tổng số tiền: 135.000đ</p>
                      </div>
                      <div className="qr-code">
                        <img
                          src={require("../../assets/images/paymentMomo.jpg")}
                          alt="Payment QR Code"
                          style={{
                            width: 400,
                            height: 400,
                            marginLeft: 72,
                            borderRadius: 31,
                          }}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">

                          <button
                            className="btn-close"
                            onClick={handleCloseModal2}
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
               {openModal3 && (
                <div className="modal">
                  <div className="modal-container">
                    <div className="modal-content">
                      <div
                        className="absolute bg-white rounded p-8"
                        style={{ height: 250, width: 280 }}
                      >
                        <h2
                          className="text-xl font-bold mb-4"
                          style={{ color: "black" }}
                        >
                           Thông Tin Hóa Đơn
                        </h2>
                        <table className="table">
                          <thead>
                            <tr className="table-header">
                              <th className="table-cell">Chi Tiết Hóa Đơn</th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-row">
                              <td className="table-cell">Tên sản phẩm: Gói VIP</td>
                              
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Thời hạn: 6 tháng</td>
                             
                            </tr>

                            <tr className="table-row">
                              <td className="table-cell">Quà tặng: tặng 6 tháng thêm</td>
                            </tr>
                            <tr>
                            <td className="table-cell">Tổng thời gian nhận: 9 tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="totalPrice">Tổng số tiền: 255.000đ</p>
                      </div>
                      <div className="qr-code">
                        <img
                          src={require("../../assets/images/paymentMomo.jpg")}
                          alt="Payment QR Code"
                          style={{
                            width: 400,
                            height: 400,
                            marginLeft: 72,
                            borderRadius: 31,
                          }}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">

                          <button
                            className="btn-close"
                            onClick={handleCloseModal3}
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
         
              <Avatar />
              Quản lý nhân sự dễ dàng <br />& tiện lợi hơn với XPandit.
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
