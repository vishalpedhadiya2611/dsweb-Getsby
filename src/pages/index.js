import * as React from "react";
import logo from "../images/logo.svg";
import home from "../images/home.svg";
import heroImage from "../images/hero-image.png";
import topChoice from "../images/top-choice.png";
import { LOGO_DATA, TABLE_DATA } from "../constant/data";
import ReactStars from "react-rating-stars-component";
import verified from "../images/verified.png";

const IndexPage = () => {
  return (
    <main className="2xl:container mx-auto">
      <div className="bg-[#DDDDDD] px-4 sm:px-6 lg:px-[72px] xl:px-[232px]">
        <p className="text-[#918A8A] text-center text-[18px] py-[8px]">
          We are not a government agency and may be paid by companies displayed.
        </p>
      </div>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-[72px] xl:px-[232px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-[#004034] h-auto grid grid-cols-1  gap-10 xl:grid-cols-2 px-4 sm:px-6 lg:px-[72px] xl:px-[232px] py-[26px] mt-3.5">
        <div className="text-white">
          <div className="flex gap-[13px] items-baseline mt-[13px] mb-[17px]">
            <img src={home} alt="home" />
            <div>
              <span>Finance&nbsp;</span>
              <span>&gt;</span>
              <span>&nbsp;Debt Management</span>
            </div>
          </div>
          <h1 className="text-[38px] leading-[1]">
            Best Debt Settlement <br /> Companies{" "}
          </h1>
          <p className="text-[20px] mt-[21px]">
            We compared 25 brands and chose the top debt
            <br /> relief companies
          </p>
          <button className="bg-[#3AE943] w-[380px] h-[60px] text-[18px] text-black rounded-[10px] font-bold mt-8">
            Find my match
          </button>
        </div>
        <div className="relative">
          <img src={heroImage} alt="hero-image" />
          <img
            src={topChoice}
            alt="top-choice"
            className="top-[157px] left-[380px] absolute"
          />
        </div>
      </div>
      <div className="flex gap-[75px] items-center w-full px-4 sm:px-6 lg:px-[72px] xl:px-[232px] border border-[#DDDDDD] py-5 mb-[53px]">
        {LOGO_DATA.map((obj, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={obj.image} alt={obj.text} />
            <p className="font-bold text-[18px]">{obj.text}</p>
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-6 lg:px-[72px] xl:px-[232px]">
        <h1 className="text-4xl font-bold mb-8">
          The top debt settlement companies in <br /> April 2025
        </h1>
        <div className="border-l-4 border-[#463AE9] pl-[30px]">
          <p className="text-[18px] font-bold mb-4">
            1. Overall choice partner:&nbsp;
            <span className="text-[#004034] underline">
              National Debt Relief
            </span>
          </p>
          <p className="text-[18px] font-bold mb-4">
            2. Lowest fees for services partner:&nbsp;
            <span className="text-[#004034] underline">
              Freedom Debt Relief
            </span>
          </p>
          <p className="text-[18px] font-bold mb-4">
            3. Best for small debt amounts partner:&nbsp;
            <span className="text-[#004034] underline">
              United Debt Settlement
            </span>
          </p>
          <p className="text-[18px] font-bold mb-4">
            4. Best customer service partner:&nbsp;
            <span className="text-[#004034] underline">
              Accredited Debt Relief
            </span>
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-[72px] xl:px-[232px] mt-24">
        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead className="bg-[#F7F8FB]">
              <tr className="text-left text-sm whitespace-nowrap">
                <th className="p-4 font-semibold">Company</th>
                <th className="p-4 font-semibold">Customer rating</th>
                <th className="p-4 font-semibold">Our pick for</th>
                <th className="p-4 font-semibold">Debt minimum</th>
                <th className="p-4 font-semibold">Maximum fee</th>
                <th className="p-4 font-semibold">Settlement timeline</th>
                <th className="p-4 font-semibold">Year founded</th>
                <th className="p-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {TABLE_DATA?.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 gap-2 relative p-4 w-[60%]">
                    <img src={item.image} alt={item.name} className="" />
                    {item?.isVerified && (
                      <img
                        src={verified}
                        alt="verified"
                        className="absolute -top-1.5 -right-[7px]"
                      />
                    )}
                  </td>
                  <td className="border border-gray-200 p-4">
                    <div className="flex items-center gap-1.5">
                      <p className="text-gray-500">{item?.review}</p>
                      <ReactStars
                        count={5}
                        value={item?.review}
                        size={20}
                        edit={false}
                        isHalf={true}
                        activeColor="#3b8062"
                      />
                    </div>
                    <a href="#" className="text-blue-600 text-xs underline">
                      {item?.totalReviews}
                    </a>
                  </td>
                  <td className="border border-gray-200 text-center p-2">
                    {item?.pickFor}
                  </td>
                  <td className="border border-gray-200 text-center p-2">
                    {item?.minimumDebt}
                  </td>
                  <td className="border border-gray-200 text-center p-2">
                    {item?.maximumFee}
                  </td>
                  <td className="border border-gray-200 text-center p-2">
                    {item?.settlementTimline}
                  </td>
                  <td className="border border-gray-200 text-center p-2">
                    {item?.yearFounded}
                  </td>
                  <td className="border border-gray-200 w-[40%] text-center p-2">
                    <button className="bg-indigo-600 text-white px-4 text-[10px] py-2 rounded-lg hover:bg-indigo-700">
                      Get Started
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-indigo-600 text-white rounded-lg text-center font-semibold w-fit mb-5">
          Can we help you make a decision?
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
