"use client";
import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  Divider,
} from "antd";

const CheckOutComponent = () => {
  return (
    <div >
      <div className="bg-white mx-auto max-w-5xl">
        <div className="border-b border-blue-100 py-3">
          <h2 className="text-center m-0">
            Check Out
          </h2>
        </div>

        <div className="p-4">
          <Row gutter={[32, 24]}>
            <Col xs={24} lg={16}>
              <Card className="shadow-sm">
                <div className="mb-6">
                  <p className="font-bold text-gray-600 uppercase text-sm">
                    Contact Information
                  </p>

                  <Form layout="vertical" className="mt-4">
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label={
                            <span className="text-gray-500 text-xs uppercase">
                              FIRST NAME
                            </span>
                          }
                          className="mb-4"
                        >
                          <Input
                            placeholder="First name"
                            className="rounded py-1"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label={
                            <span className="text-gray-500 text-xs uppercase">
                              LAST NAME
                            </span>
                          }
                          className="mb-4"
                        >
                          <Input
                            placeholder="Last name"
                            className="rounded py-1"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      label={
                        <span className="text-gray-500 text-xs uppercase">
                          PHONE NUMBER
                        </span>
                      }
                      className="mb-4"
                    >
                      <Input
                        placeholder="Phone number"
                        className="rounded py-1"
                      />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-gray-500 text-xs uppercase">
                          EMAIL ADDRESS
                        </span>
                      }
                      className="mb-4"
                    >
                      <Input
                        placeholder="Your Email"
                        className="rounded py-1"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </Card>

              <Button
                size="large"
                block
                className="!bg-black !text-white !hover:bg-black/80 mt-4 h-12"
              >
                Place Order
              </Button>
            </Col>

            <Col xs={24} lg={8}>
              <Card className="bg-white shadow-sm">
                <h4 className="mb-4">
                  Order summary
                </h4>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-gray-100 w-6 h-6 mr-2 rounded">
                      ⊗
                    </div>
                    <p>JenkateMW</p>
                  </div>
                  <div>
                    <p className="text-green-500 mr-1 inline">-$25.00</p>
                    <p className="text-green-500 inline">[Remove]</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 pb-2">
                  <div className="flex justify-between mb-2">
                    <p>Shipping</p>
                    <p className="font-bold">Free</p>
                  </div>

                  <div className="flex justify-between mb-2">
                    <p>Subtotal</p>
                    <p className="font-bold">$259.00</p>
                  </div>
                </div>

                <Divider className="my-2" />

                <div className="flex justify-between">
                  <p className="font-bold text-lg">
                    Total
                  </p>
                  <p className="font-bold text-lg">
                    $234.00
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