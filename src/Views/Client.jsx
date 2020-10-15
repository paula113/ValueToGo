import React, { useState, useEffect } from 'react';
import './Client.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import ClientTable from '../Components/ClientTable';

import RecoDetails from '../Components/RecoDetails';
// import PieChart from '../Components/PieChart';
import firebase from '../firebase.config';

function Client() {
  // sendCCI(data);
  const { path, url } = useRouteMatch();
  const [data, setData] = useState([]);
  const [empresa, setEmpresa] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    firebase
      .firestore()
      .collection('puntosDeControl')
      .onSnapshot((doc) => {
        const dataArr = doc.docs.map((listTable) => ({
          id: listTable.id,
          recomendation: '',
          ...listTable.data(),
        }));
        setData(dataArr);
      });
  }, []);
  return (
    <main>
      <h3>Recomendaciones de Control</h3>
      <Router>
        <div className="client-Bar">
          <nav>
            <ul>
              <li>
                <Link to={`${url}/Details`} className="name-Bar">
                  Detalles
                </Link>
              </li>
              <li>
                <Link to={`${url}/Reportes`} className="name-Bar">
                  Reportes
                </Link>
              </li>
              <li>
                <Link to={`${url}/Expedientes`} className="name-Bar">
                  Expedientes
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path={`${path}/Details`}>
              <RecoDetails setEmpresa={setEmpresa} setStatus={setStatus} />
              <ClientTable data={data} />
            </Route>
            <Route path={`${path}/Reportes`}>
              <RecoDetails setEmpresa={setEmpresa} setStatus={setStatus} />
              <h2>Chart</h2>
            </Route>
            <Route path={`${path}/Expedientes`}>
              <RecoDetails setEmpresa={setEmpresa} setStatus={setStatus} />
              <h3>Descargas</h3>
            </Route>
          </Switch>
          {/* <RecoDetails /> */}
        </div>
      </Router>
    </main>
  );
}

export default withRouter(Client);
