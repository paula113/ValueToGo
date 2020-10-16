import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import DashboardContent from './DashboardContent';
import './TabWrapper.scss';
import Reports from './Reports';
import ClientTable from './ClientTable';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function TabWrapper(props) {
  const { rowData } = props;
  // const [value, setValue] = useState(1);
  const match = useRouteMatch();
  // console.log(match);

  const arrConfig = [
    {
      tabIndex: '0',
      route: '/cliente/recomendaciones',
      label: 'Recomendaciones',
      content: <ClientTable rowData={rowData} />,
    },
    {
      tabIndex: '1',
      route: '/cliente/dashboard',
      label: 'Dashboard',
      content: <DashboardContent />,
    },
    {
      tabIndex: '2',
      route: '/cliente/reportes',
      label: 'Reportes',
      content: <Reports />,
    },
  ];

  const obj = arrConfig.find((i) => match.path === i.route);

  return (
    <>
      <Tabs value={obj.tabIndex}>
        {arrConfig.map((tab) => (
          <Tab
            key={tab.tabIndex}
            label={tab.label}
            value={tab.tabIndex}
            component={Link}
            to={tab.route}
          />
        ))}
      </Tabs>
      {arrConfig.map((tabPanel) => (
        <TabPanel
          key={tabPanel.tabIndex}
          index={tabPanel.tabIndex}
          value={obj.tabIndex}
        >
          <p className="textp">Detalles de recomendación</p>
          {tabPanel.content}
        </TabPanel>
      ))}
    </>
  );
}

export default TabWrapper;
