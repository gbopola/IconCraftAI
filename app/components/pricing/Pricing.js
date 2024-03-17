"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Pricing() {
  const [pricing, setPricing] = useState([]);

  const { status, data: session } = useSession();

  // convert unit amount to dollars
  const toDollars = (unitAmount) => {
    return `$${unitAmount / 100}`;
  };

  // set features for each pricing plan
  const setFeatures = (nickname) => {
    switch (nickname) {
      case "50 Credits":
        return "$0.10 per image";
      case "100 Credits":
        return "$0.09 per image";
      case "250 Credits":
        return "$0.08 per image";
      default:
        return "";
    }
  };

  // handle payment
  const handlePayment = async (e, price) => {
    e.preventDefault();

    const response = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: price.id,
        userId: session?.user?.id,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to make payment request");
    }

    const data = await response.json();
    window.location.assign(data);
  };

  useEffect(() => {
    fetch("/api/payment/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPricing(data);
      });
  }, []);

  return (
    <section className="py-14 mt-24">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Pricing for all sizes
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {pricing &&
            pricing.map((price, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
              >
                <div>
                  <span className="text-indigo-600 font-medium">
                    {price.nickname}
                  </span>
                </div>
                <ul className="py-8 space-y-3">
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {setFeatures(price.nickname)}
                  </li>
                </ul>
                <div className="flex-1 flex items-end">
                  <button
                    onClick={(e) => handlePayment(e, price)}
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700"
                  >
                    {toDollars(price.unit_amount)}{" "}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
