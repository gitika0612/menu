import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataTable from "../pages/DataTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Services = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            <Tab label="HAIR" />
            <Tab label="WAX" />
            <Tab label="FACIAL" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DataTable title="HAIR SERVICES" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataTable title="WAX SERVICES" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DataTable title="FACIAL SERVICES" />
        </TabPanel>
      </Box>
    </>
  );
};

export default Services;
