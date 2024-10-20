import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import icons from './icons';  // Import the icons module
import TooltipButton from "./TooltipButton"; // Import the TooltipButton
import Referral from "./referral"; // Import the Referral

function NavBar() {
  const [activeButton, setActiveButton] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  /* Sets button to be green and redirects user */
  const handleButtonClick = (buttonName: string, linkHref: string) => {
    setActiveButton(buttonName);
    navigate(linkHref); // Use navigate to perform client-side navigation
  };

  /* Drop down icons for categories icon */
  const handleCategoriesClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="fixed bottom-0 z-50 w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="relative max-w-lg mx-auto">
        
        {/* Main Nav-Bar Items */}
        <div className="flex items-center">
          <TooltipButton
            tooltipId="tooltip-home"
            tooltipText="Home"
            srText="Home"
            isActive={activeButton === "home"}
            onClick={() => handleButtonClick("home", "/Homepage")}
            svgSrc={icons.homeIcon}
          />
          <TooltipButton
            tooltipId="tooltip-status"
            tooltipText="Status"
            srText="Status"
            isActive={activeButton === "status"}
            onClick={() => handleButtonClick("status", "/Status")}
            svgSrc={icons.statusIcon}
          />
          <div className="w-16"></div>
          <TooltipButton
            tooltipId="tooltip-categories"
            tooltipText="Categories"
            srText="Categories"
            isActive={activeButton === "categories"}
            onClick={() => handleCategoriesClick("categories")}
            svgSrc={icons.appsIcon}
          />
          <TooltipButton
            tooltipId="tooltip-profile"
            tooltipText="Profile"
            srText="Profile"
            isActive={activeButton === "profile"}
            onClick={() => handleButtonClick("profile", "/Profile")}
            svgSrc={icons.profileIcon}
          />
        </div>

        {/* Dropdown menu for Categories */}
        {isCategoriesOpen && (
          <div
            className="absolute bottom-[100%] right-[60px] mb-2 bg-white shadow-lg rounded-lg p-2"
            style={{ minWidth: "120px" }}
          >
            <ul className="ftext-gray-800">
              <li className="flex items-center justify-center w-full p-2">
                <TooltipButton
                  tooltipId="tooltip-rewards"
                  tooltipText="Rewards"
                  srText="Rewards"
                  isActive={activeButton === "rewards"}
                  onClick={() => handleButtonClick("rewards", "/Rewards")}
                  svgSrc={icons.rewardsIcon}
                />
              </li>
              <li className="flex items-center justify-center w-full p-2">
                <TooltipButton
                  tooltipId="tooltip-leaderboard"
                  tooltipText="Leaderboard"
                  srText="Leaderboard"
                  isActive={activeButton === "leaderboard"}
                  onClick={() =>
                    handleButtonClick("leaderboard", "/Leaderboard")
                  }
                  svgSrc={icons.leaderboardIcon}
                />
              </li>
              <li className="flex items-center justify-center w-full p-2">
                 {/*
                <TooltipButton
                  tooltipId="tooltip-refferal"
                  tooltipText="Referral"
                  srText="Referral"
                  isActive={activeButton === "referral"}
                  onClick={() => handleButtonClick("referral", "/Refferal")}
                  svgSrc={icons.refferalIcon}
                />
                */}
              
                <Referral/>
              </li>
            </ul>
          </div>
        )}

        {/* Middle Center Button */}
        <div className="absolute inset-x-0 flex justify-center -top-6">
          <button
            type="button"
            onClick={() => handleButtonClick("scan", "/scan")}
            className="flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full shadow-lg"
          >
            <img src={icons.scanIcon} alt="Scan" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
