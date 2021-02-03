import React from "react";
import { connect } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabContainer = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab, idx) => {
          return <Tab key={idx}>{tab.age_range}</Tab>;
        })}
        <Tab>Summary</Tab>
        <Tab>Certification</Tab>
      </TabList>

      {tabs.map((tab, idx) => {
        // The questions for each tab will go inside of the tab Panels
        return (
          <TabPanel key={idx}>
            <b>{tab.age_description}:</b>{" "}
            {<p>{loremIpsum} This is where the questions will go! </p>}
          </TabPanel>
        );
      })}

      <TabPanel>
        <b>Summary:</b> {<p>{loremIpsum}</p>}
      </TabPanel>
      <TabPanel>
        <b>Certification:</b> {<p>{loremIpsum}</p>}
      </TabPanel>
    </Tabs>
  );
};

const mapState = state => ({
  tabs: state.global.age_ranges
});

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default connect(mapState)(TabContainer);