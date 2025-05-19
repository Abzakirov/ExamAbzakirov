"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Card, Divider, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, UserTypes } from "@/@types";
import { clearProducts } from "@/store/productSlice/ProductSlice";

const CheckOutComponent: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.products.items);

  const [summaryData, setSummaryData] = useState({
    subtotal: 0,
    baseDiscount: 0,
    promoDiscount: 0,
    deliveryFee: 15,
    total: 0,
  });

  useEffect(() => {
    let promoDiscount = 0;
    if (typeof window !== "undefined") {
      const promoData = localStorage.getItem("promoData");
      if (promoData) {
        const { isValid, discountPercent } = JSON.parse(promoData);
        if (isValid) {
          promoDiscount = discountPercent;
        }
      }
    }

    const subtotal = cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);

    const baseDiscount = subtotal * 0.2;
    const additionalDiscount =
      promoDiscount > 0 ? subtotal * (promoDiscount / 100) : 0;
    const deliveryFee = 15;
    const total = subtotal - baseDiscount - additionalDiscount + deliveryFee;

    setSummaryData({
      subtotal,
      baseDiscount,
      promoDiscount,
      deliveryFee,
      total,
    });
  }, [cartItems]);

  const handleFinish = async (values: UserTypes) => {
    try {
      const orderData = {
        ...values,
        orderItems: cartItems,
        orderTotal: summaryData.total,
        orderDate: new Date().toISOString(),
      };

      await axios.post(
        "https://67fe39cd3da09811b1782698.mockapi.io/login",
        orderData
      );
      router.push("/");

      message.success("Заказ успешно оформлен");

      dispatch(clearProducts());

      form.resetFields();
    } catch (error: unknown) {
      console.error("Ошибка при оформлении заказа:", error);
      message.error("Ошибка при оформлении заказа");
    }
  };

  useEffect(() => {
    if (cartItems.length === 0 && typeof window !== "undefined") {
      router.push("/");
    }
  }, [cartItems, router]);

  return (
    <div>
      <div className="bg-white mx-auto max-w-5xl">
        <div className="border-b border-blue-100 py-3">
          <h2 className="text-center m-0">Check Out</h2>
        </div>

        <div className="p-4">
          <Row gutter={[32, 24]}>
            <Col xs={24} lg={16}>
              <Card className="shadow-sm">
                <div className="mb-6">
                  <p className="font-bold text-gray-600 uppercase text-sm">
                    Contact Information
                  </p>

                  <Form
                    form={form}
                    layout="vertical"
                    className="mt-4"
                    onFinish={handleFinish}
                  >
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="firstName"
                          label={
                            <span className="text-gray-500 text-xs uppercase">
                              FIRST NAME
                            </span>
                          }
                          className="mb-4"
                          rules={[{ required: true, message: "Введите имя" }]}
                        >
                          <Input
                            placeholder="First name"
                            className="rounded py-1"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="lastName"
                          label={
                            <span className="text-gray-500 text-xs uppercase">
                              LAST NAME
                            </span>
                          }
                          className="mb-4"
                          rules={[
                            { required: true, message: "Введите фамилию" },
                          ]}
                        >
                          <Input
                            placeholder="Last name"
                            className="rounded py-1"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="phone"
                      label={
                        <span className="text-gray-500 text-xs uppercase">
                          PHONE NUMBER
                        </span>
                      }
                      className="mb-4"
                      rules={[
                        { required: true, message: "Введите номер телефона" },
                      ]}
                    >
                      <Input
                        placeholder="Phone number"
                        className="rounded py-1"
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label={
                        <span className="text-gray-500 text-xs uppercase">
                          EMAIL ADDRESS
                        </span>
                      }
                      className="mb-4"
                      rules={[
                        { required: true, message: "Введите email" },
                        { type: "email", message: "Неверный формат email" },
                      ]}
                    >
                      <Input
                        placeholder="Your Email"
                        className="rounded py-1"
                      />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label={
                        <span className="text-gray-500 text-xs uppercase">
                          PASSWORD
                        </span>
                      }
                      className="mb-4"
                      rules={[{ required: true, message: "Введите пароль" }]}
                    >
                      <Input.Password
                        placeholder="Password"
                        className="rounded py-1"
                      />
                    </Form.Item>

                    <Button
                      htmlType="submit"
                      size="large"
                      block
                      className="!bg-black !text-white !hover:bg-black/80 mt-4 h-12"
                    >
                      Complete Order
                    </Button>
                  </Form>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              <Card className="bg-white shadow-sm">
                <h4 className="mb-4">Order summary</h4>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center justify-center bg-gray-100 w-6 h-6 mr-2 rounded">
                        {item.quantity || 1}
                      </div>
                      <p className="truncate max-w-[150px]">{item.name}</p>
                    </div>
                    <div>
                      <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4 pb-2">
                  <div className="flex justify-between mb-2">
                    <p>Subtotal</p>
                    <p className="font-bold">
                      ${summaryData.subtotal.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-between mb-2">
                    <p>Discount (-20%)</p>
                    <p className="font-bold text-green-500">
                      -${summaryData.baseDiscount.toFixed(2)}
                    </p>
                  </div>

                  {summaryData.promoDiscount > 0 && (
                    <div className="flex justify-between mb-2">
                      <p>Promo Discount (-{summaryData.promoDiscount}%)</p>
                      <p className="font-bold text-green-500">
                        -$
                        {(
                          summaryData.subtotal *
                          (summaryData.promoDiscount / 100)
                        ).toFixed(2)}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between mb-2">
                    <p>Shipping</p>
                    <p className="font-bold">
                      ${summaryData.deliveryFee.toFixed(2)}
                    </p>
                  </div>
                </div>

                <Divider className="my-2" />

                <div className="flex justify-between">
                  <p className="font-bold text-lg">Total</p>
                  <p className="font-bold text-lg">
                    ${summaryData.total.toFixed(2)}
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CheckOutComponent;
