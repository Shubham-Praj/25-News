import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
//import elogo from "../Icons/earth.svg";

function NewsTabs({ getnews }) {
  const tabNames = [
    { tab: "All" },
    { tab: "National" },
    { tab: "Business" },
    { tab: "Sports" },
    { tab: "World" },
    { tab: "Politics" },
    { tab: "Technology" },
    { tab: "Startup" },
    { tab: "Entertainment" },
    { tab: "Science" },
    { tab: "Automobile" },
  ];
  const [activeTab, setactiveTab] = useState("all");

  function setData(e) {
    setactiveTab(e.target.outerText);
    getnews(e.target.outerText.toLowerCase());
    console.log(activeTab);
  }

  return (
    <div>
      <Nav tabs className="newstabs">
            {tabNames.map((singleTab, index) => {
              return (
                <NavItem key={index}>
                  <NavLink
                    className={
                      activeTab === singleTab.tab ? "active SelectedTab" : " "
                    }
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      setData(e);
                    }}
                  >
                    {singleTab.tab}
                  </NavLink>
                  {/* <img
                src={singleTab.imgSrc}
                width="20px"
                height="20px"
              ></img> */}
                </NavItem>
              );
            })}
      </Nav>
    </div>
  );
}

export default NewsTabs;
