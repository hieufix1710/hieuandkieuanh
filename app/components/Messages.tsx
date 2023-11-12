import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WeddingWishes from "./Wishes";
import { createMessageWishes, fetchWishMessages } from "../api/wedding_wishes";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import QRcode from "../../public/images/QR_code.jpg";
import NextImage from "next/image";
import { QrCodeIcon } from "@heroicons/react/24/outline";

export default function Messages() {
  const [messages, setMessages] = useState<any>([]);
  const [showQR, setShowQR] = useState(false);
  const [showBtnOpenQR, setShowButtonQR] = useState(false);

  useEffect(() => {
    fetchWishMessages().then(({ data, error }) => {
      if (!error) setMessages(data);
    });
  }, []);

  const { handleSubmit, register, reset } = useForm();

  const createMessageMutate = useMutation({
    mutationFn: ({ author, message }: any) =>
      createMessageWishes({
        author_name: author,
        message,
      }),
    onSuccess: ({ data, error }) => {
      if (!error && data) {
        toast.success("Chú rể và cô dâu xin cảm ơn lời chúc của bạn nhé! ", {
          icon: "😘",
          duration: 3000,
        });
        setMessages([...messages, ...[data]]);
        reset();
      } else {
        console.log(error?.message);
      }
    },
    onError: (e: any) => console.log(e),
  });

  const onSubmit = (values: any) => createMessageMutate.mutate(values);

  return (
    <div id="messages" className="py-10">
      <div className="flex flex-row justify-center text-center py-8 text-3xl z-20 bg-white">
        <h1 style={{ fontFamily: "Noto Serif KR, serif" }}>
          Lời chúc từ mọi người
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 lg:gap-4">
        <div className="col-span-3">
          <WeddingWishes wishes={messages} />
        </div>
        <div className="col-span-3 flex flex-col gap-1">
          <div className="flex flex-row justify-center text-center py-8 text-3xl">
            <h1 style={{ fontFamily: "Noto Serif KR, serif" }}>
              Gửi tin nhắn chúc mừng đến cô dâu & chú rể
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="author" className="flex flex-col font-bold my-1">
              <span>Người gửi</span>
              <input
                type="text"
                id="author"
                {...register("author", { required: true })}
                placeholder="Nhập tên của bạn"
                className="px-2 py-1 border border-[#F16B53] outline-none font-normal text-sm rounded-lg"
              />
            </label>
            <label htmlFor="author" className="flex flex-col font-bold my-1">
              <span>Nội dung tin nhắn</span>
              <input
                type="text"
                id="message"
                {...register("message", { required: true })}
                placeholder="Nhập lời chúc"
                className="w-full h-[10rem] text-start px-2 py-1 border border-red-500 outline-none font-normal text-sm rounded-lg"
              />
            </label>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <button
                disabled={createMessageMutate.isPending}
                type="submit"
                className="disabled:bg-gray-500 disabled:text-white bg-red-500 text-white px-2 py-1 rounded-lg"
              >
                Gửi lời chúc
              </button>
              {showBtnOpenQR && (
                <button
                  disabled={createMessageMutate.isPending}
                  type="submit"
                  onClick={() => setShowQR(!showQR)}
                  className="disabled:bg-gray-500 disabled:text-white border border-red-500 text-red-500 px-2 py-1 rounded-lg flex flex-row items-center gap-1 justify-center"
                >
                  <QrCodeIcon className="w-5" />
                </button>
              )}
            </div>
            <div>
              {showQR && (
                <NextImage className="" src={QRcode} alt={"image_QR"} />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
