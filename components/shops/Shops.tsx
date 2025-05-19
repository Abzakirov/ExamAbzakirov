"use client";

import { ProductType, RootState } from "@/@types";
import { integralCF } from "@/font/Font";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import {
  removeProduct,
  updateQuantity,
} from "@/store/productSlice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "@/generics/empty";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PromoCode {
  kode: string;
  id: string;
}

const Shops = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.products.items);
  const [promoCode, setPromoCode] = useState("");
  const [validPromo, setValidPromo] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [_isLoading, setIsLoading] = useState(true);
  const [_errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const res = await axios.get(
          "https://682a0a2aab2b5004cb35a141.mockapi.io/kod"
        );
        const data = res.data;
        setPromoCodes(data);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage("Failed to load promo code data");
        setIsLoading(false);
        console.error("Error fetching promo codes:", error);
      }
    };

    fetchCodes();
  }, []);
  console.debug(_isLoading, _errorMessage);
  const handleRemoveItem = (productId: string) => {
    dispatch(removeProduct(productId));
  };

  const increaseQuantity = (productId: string) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      dispatch(
        updateQuantity({
          id: productId,
          quantity: (product.quantity || 1) + 1,
        })
      );
    }
  };

  const decreaseQuantity = (productId: string) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product && (product.quantity || 1) > 1) {
      dispatch(
        updateQuantity({
          id: productId,
          quantity: (product.quantity || 1) - 1,
        })
      );
    } else {
      handleRemoveItem(productId);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };

  const applyPromoCode = () => {
    const foundPromo = promoCodes.find((code) => code.kode === promoCode);

    if (foundPromo) {
      let discount = 0;

      switch (foundPromo.id) {
        case "1":
          discount = 10;
          break;
        case "2":
          discount = 15;
          break;
        case "3":
          discount = 25;
          break;
        default:
          discount = 5;
      }

      setValidPromo(true);
      setPromoDiscount(discount);
      setPromoMessage(`Промокод применен! Скидка ${discount}%`);
    } else {
      setValidPromo(false);
      setPromoDiscount(0);
      setPromoMessage("Неверный промокод");
    }
  };

  const subtotal = calculateSubtotal();
  const baseDiscount = subtotal * 0.2;
  const additionalDiscount = validPromo ? subtotal * (promoDiscount / 100) : 0;
  const totalDiscount = baseDiscount + additionalDiscount;
  const deliveryFee = 15;
  const total = subtotal - totalDiscount + deliveryFee;

  if (cartItems.length === 0) return <EmptyCart />;
  return (
    <div className="container2 mt-4 px-2">
      <div>
        <h1
          className={`${integralCF.className} text-[40px] font-black max-[500px]:text-[23px] max-[300px]:text-[20px] text-center sm:text-left`}
        >
          Your cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="mt-4 flex flex-col gap-4 w-full lg:w-auto">
            {cartItems.map((product: ProductType) => (
              <div
                key={product.id}
                className="w-full md:w-[735px] max-[300px]:w-full p-[20px] max-[300px]:p-[10px] flex gap-4 bg-white rounded-lg shadow-md relative"
              >
                <button
                  className="absolute top-2 right-2 sm:top-5 sm:right-7"
                  onClick={() => handleRemoveItem(product.id)}
                >
                  <Trash2 size={20} className="text-[red]" />
                </button>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="flex justify-center">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-[80px] sm:w-[120px] md:w-[200px] h-[80px] sm:h-[120px] md:h-[200px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold max-w-[200px] sm:max-w-none truncate">
                      {product.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#000]">
                        Price:
                      </h2>
                      <p className="text-rgba(0, 0, 0, 0.60) text-[12px] sm:text-[14px]">
                        ${product.currentPrice || product.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#000]">
                        Rate:
                      </h2>
                      <p className="text-rgba(0, 0, 0, 0.60) text-[12px] sm:text-[14px]">
                        {product.rate}/5
                      </p>
                    </div>
                    {product.selectedSize && (
                      <div className="flex items-center gap-2">
                        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#000]">
                          Size:
                        </h2>
                        <p className="text-rgba(0, 0, 0, 0.60) text-[12px] sm:text-[14px]">
                          {product.selectedSize}
                        </p>
                      </div>
                    )}
                    {product.selectedColor && (
                      <div className="flex items-center gap-2">
                        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#000]">
                          Color:
                        </h2>
                        <div
                          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                          style={{ backgroundColor: product.selectedColor }}
                        ></div>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <p className="text-rgba(0, 0, 0, 0.60) text-[14px] sm:text-[16px] md:text-[20px] font-bold">
                        ${product.price}
                      </p>
                      {product.discount > 0 && (
                        <span className="text-[red] text-[10px] sm:text-[12px] md:text-[14px]">
                          -{product.discount}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center w-[110px] max-[300px]:w-[90px] h-[36px] sm:h-[44px] max-[300px]:text-[12px] justify-center text-center gap-2 sm:gap-4 bg-[#F0F0F0] rounded-[62px] sm:absolute static sm:bottom-5 sm:right-7 mt-4 sm:mt-0 mx-auto sm:mx-0">
                    <button onClick={() => decreaseQuantity(product.id)}>
                      <MinusOutlined size={16} className="!font-medium" />
                    </button>
                    <span className="!text-[14px] sm:!text-[16px] !font-medium">
                      {product.quantity || 1}
                    </span>
                    <button onClick={() => increaseQuantity(product.id)}>
                      <PlusOutlined size={16} className="!font-bold" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[505px] p-[20px] max-[300px]:p-[15px] flex flex-col gap-4 bg-white rounded-lg shadow-md relative mt-4 lg:mt-0">
            <h1 className="text-[20px] sm:text-[24px] font-bold">
              Order Summary
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[16px] sm:text-[20px]">
                  Subtotal:
                </h4>
                <h2 className="text-[#000] text-[16px] sm:text-[20px] font-extrabold">
                  ${subtotal.toFixed(2)}
                </h2>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[16px] sm:text-[20px]">
                  Discount (-20%):
                </h4>
                <h2 className="text-[red] text-[16px] sm:text-[20px] font-extrabold">
                  -${baseDiscount.toFixed(2)}
                </h2>
              </div>
              {validPromo && (
                <div className="flex items-center justify-between">
                  <h4 className="text-rgba(0, 0, 0, 0.60) text-[16px] sm:text-[20px]">
                    Promo Discount (-{promoDiscount}%):
                  </h4>
                  <h2 className="text-[red] text-[16px] sm:text-[20px] font-extrabold">
                    -${additionalDiscount.toFixed(2)}
                  </h2>
                </div>
              )}
              <div className="flex items-center justify-between">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[16px] sm:text-[20px]">
                  Delivery Fee:
                </h4>
                <h2 className="text-[#000] text-[16px] sm:text-[20px] font-extrabold">
                  ${deliveryFee.toFixed(2)}
                </h2>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[16px] sm:text-[20px]">
                  Total
                </h4>
                <h2 className="text-[#000] text-[16px] sm:text-[20px] font-extrabold">
                  ${total.toFixed(2)}
                </h2>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 sm:gap-4 h-[40px] sm:h-[48px] rounded-[62px] w-full md:w-[330px] bg-[#F0F0F0] p-2">
                  <Image
                    src="/del.svg"
                    alt="w"
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-auto sm:h-auto"
                  />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full h-full outline-none font-medium bg-transparent text-[14px] sm:text-[16px]"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                </div>
                <Button
                  className="!text-[#fff] !rounded-full !bg-[#000] !p-[12px] sm:!p-[16px] !w-[100px] sm:!w-[119px] !h-[40px] sm:!h-[48px] !text-[14px] sm:!text-[16px]"
                  onClick={applyPromoCode}
                >
                  Apply
                </Button>
              </div>
              {promoMessage && (
                <p
                  className={`text-${
                    validPromo ? "green-500" : "red-500"
                  } text-[14px] mt-2 text-center`}
                >
                  {promoMessage}
                </p>
              )}
              <Link href={"/checkout"}
                type="text"
                className="!w-full md:!w-[457px] !h-[50px] sm:!h-[40px] !bg-[#000] !max-[320px]:h-[30px] !text-white flex items-center justify-center gap-2 mt-4 !rounded-full !text-[14px] sm:!text-[16px]"
              >
                Go to Checkout{" "}
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
