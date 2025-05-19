import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Space,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const CheckOutComponent = () => {
  return (
    <div className="bg-blue-50/30 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(173,216,230,0.1)_4px,rgba(173,216,230,0.1)_8px)] p-1 min-h-screen">
      <div className="bg-white mx-auto max-w-5xl">
        <div className="border-b border-blue-100 py-3">
          <Title level={2} className="text-center m-0">
            Check Out
          </Title>
        </div>

        <div className="p-4">
          <Row gutter={[32, 24]}>
            <Col xs={24} lg={16}>
              <Card bordered={false} className="shadow-sm">
                <div className="mb-6">
                  <Text strong className="text-gray-600 uppercase text-sm">
                    Contact Infomation
                  </Text>

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
                type="primary"
                size="large"
                block
                className="bg-black hover:bg-black/80 mt-4 h-12"
              >
                Place Order
              </Button>
            </Col>

            <Col xs={24} lg={8}>
              <Card className="bg-white shadow-sm" bordered={false}>
                <Title level={4} className="mb-4">
                  Order summary
                </Title>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-gray-100 w-6 h-6 mr-2 rounded">
                      ⊗
                    </div>
                    <Text>JenkateMW</Text>
                  </div>
                  <div>
                    <Text className="text-green-500 mr-1">-$25.00</Text>
                    <Text className="text-green-500">[Remove]</Text>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 pb-2">
                  <div className="flex justify-between mb-2">
                    <Text>Shipping</Text>
                    <Text strong>Free</Text>
                  </div>

                  <div className="flex justify-between mb-2">
                    <Text>Subtotal</Text>
                    <Text strong>$99.00</Text>
                  </div>
                </div>

                <Divider className="my-2" />

                <div className="flex justify-between">
                  <Text strong className="text-lg">
                    Total
                  </Text>
                  <Text strong className="text-lg">
                    $234.00
                  </Text>
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
