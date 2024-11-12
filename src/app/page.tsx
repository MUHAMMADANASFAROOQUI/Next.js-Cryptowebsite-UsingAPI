"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import bitcoin from "../app/public/bitcoin.png";
import ethereum from "../app/public/ethereum.jpeg";
import Tether from "../app/public/Tether.jpeg";
import solana from "../app/public/solana.png";
import BNB from "../app/public/BNB.jpeg";
import dodge from "../app/public/dodge.png";
import XRP from "../app/public/XRP.jpeg";

export default function CoinMarket() {
    const API_KEY = "d4239f34d36d62e03b412dc962804d28";
    const [data, setData] = useState<any>(0);

    useEffect(() => {
      fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
        .then((response) => response.json())
        .then((jsonConverted) => {
          console.log("JSON Converted Data : ", jsonConverted);
          setData(jsonConverted);
        });
    }, []);

  return (
    <>
      <div className="bg-gray-200">
        <header className="bg-slate-50 border-b-2 text-justify h-14 ">
          <div className="flex">
            <h1 className="ml-24  font-semibold text-2xl mt-3 font-sans">
              CryptoZone
            </h1>
            <h1 className="text-lg mt-4 ml-16">Coins</h1>
            <h1 className="text-lg mt-4 ml-6">NFT</h1>
            <h1 className="text-lg mt-4 ml-6">DEFi</h1>
            <h1 className="text-lg mt-4 ml-6">GameFi</h1>
            <input
              type="text"
              placeholder=" Search"
              className="ml-6 mt-2 w-56"
            />
            <h1 className="bg-blue-500 w-20 h-9 mt-2 text-center pt-1 text-lg ml-10">
              Login
            </h1>
            <h1 className="bg-blue-500 w-20 h-9 mt-2 text-center pt-1 text-lg ml-6">
              Sign Up
            </h1>
            <h1 className="text-lg mt-4 ml-6">USD</h1>
            <h1 className="text-lg mt-4 ml-6">English</h1>
          </div>
        </header>
        <header className="bg-slate-50 border-b-2 text-justify h-12 ">
          <div className="flex">
            <select
              id="city"
              name="city"
              className="bg-slate-50 text-lg ml-24 mt-3 border-r-2 "
            >
              <option value=" All Categories" className="text-base">
                Category: All Categories
              </option>
              <option value="NFT" className="text-base">
                NFT
              </option>
              <option value="DEFi" className="text-base">
                DEFi
              </option>
              <option value="GameFi" className="text-base">
                GameFi
              </option>
              <option value="Metaverse" className="text-base">
                Metaverse
              </option>
              <option value="BNB Smart Chain Ecosystem" className="text-base">
                BNB Smart Chain Ecosystem
              </option>
              <option value="Artificial Intelligence(AI)" className="text-base">
                Artificial Intelligence(AI)
              </option>
            </select>
            <h1 className="text-blue-500 border-r-2 text-lg font-semibold mt-3 ml-6 pr-5">
              More Filters
            </h1>
          </div>
        </header>
        <div className="">
          <div className="">
            <h1 className="text-3xl mt-6 ml-20">Today Cryptocurrency Prices</h1>
            <div className="mt-6 ml-20 mr-20 bg-slate-50 border-2">
              <div className="flex border-b-2 border-t-2">
                <h1 className="ml-16 mr-16 text-xl mt-3 mb-3 ">Ranking</h1>
                <h1 className="ml-5 mr-96 text-xl mt-3 mb-3">Name</h1>
                <h1 className="ml-24 mr-24 text-xl mt-3 mb-3">Price</h1>
              </div>
              <div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#1</h1>
                  <div className="flex w-24 mr-40">
                    <Image
                      src={bitcoin}
                      alt="bitcoin image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3  ">Bitcoin</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.BTC}
                  </h1>
                </div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#2</h1>
                  <div className="w-24 mr-40 flex">
                    <Image
                      src={ethereum}
                      alt="ethereum image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3 w-2 ">Ethereum</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.ETH}
                  </h1>
                </div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#3</h1>
                  <div className="w-24 mr-40 flex">
                    <Image
                      src={Tether}
                      alt="Tether image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3 ">Tether</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.USDT}
                  </h1>
                </div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#4</h1>
                  <div className="w-24 mr-40 flex">
                    <Image
                      src={solana}
                      alt="solana image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3 ">Solana</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.SOL}

                  </h1>
                </div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#5</h1>
                  <div className="w-24 mr-40 flex">
                    <Image
                      src={BNB}
                      alt="BNB image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3 ">BNB</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.BNB}

                  </h1>
                </div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#6</h1>
                  <div className="w-24 mr-40 flex">
                    <Image
                      src={dodge}
                      alt="dodge image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3 ">Dodge</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.DOGE}
                  </h1>
                </div>
                <div className="flex border-b-2">
                  <h1 className="ml-20 mr-20 mt-3 mb-3 text-lg">#7</h1>
                  <div className="w-24 mr-40 flex">
                    <Image
                      src={XRP}
                      alt="RP image"
                      className="ml-10  mt-3 mb-3 w-7 h-7"
                    />
                    <h1 className="ml-3 text-lg  mt-3 mb-3 ">XRP</h1>
                  </div>
                  <h1 className="ml-72 text-lg mr-12 mt-3 mb-3 text-center w-24">
                  {data?.rates?.XRP}

                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BTC: {data?.rates?.BTC}
      <br />
      BNB: {data?.rates?.BNB} */}
    </>
  );
}
