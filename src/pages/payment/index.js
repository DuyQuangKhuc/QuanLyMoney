import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Payment.scss";
import { Avatar, Button, Modal, Menu } from "@mui/material";

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
    <div className={cx("nganSach")}>
      <div className={cx("header")}>Gói Premium</div>
      <div className={cx("body")}>
        <div className={cx("dangKy")}>
          <div className={cx("sale")}>
            <button className={cx("chonGoi")}>
              <div className={cx("title")}>Gói cơ bản</div>
              <div className={cx("price")}>
                <span>25.000đ</span>
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
                <span>125.000 đ</span>
                <p>6 tháng</p>
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
                <span>225.000 đ</span>
                <p>1 năm</p>
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
                <div className="absolute bg-white rounded p-8">
                  <h2 className="text-xl font-bold mb-4">Giỏ Hàng</h2>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={handleCloseModal}
                  >
                    Đóng
                  </button>
                  <button>xác nhận</button>
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
  );
};

export default Payment;
