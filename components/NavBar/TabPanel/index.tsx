import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, FC } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const TabPanel: FC<TabPanelProps> = ({ children, index, value, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`drawe-tabpanel-${index}`}
      aria-labelledby={`drawe-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabPanel;
