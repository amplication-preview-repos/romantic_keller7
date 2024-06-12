import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GasBillList } from "./gasBill/GasBillList";
import { GasBillCreate } from "./gasBill/GasBillCreate";
import { GasBillEdit } from "./gasBill/GasBillEdit";
import { GasBillShow } from "./gasBill/GasBillShow";
import { WaterBillList } from "./waterBill/WaterBillList";
import { WaterBillCreate } from "./waterBill/WaterBillCreate";
import { WaterBillEdit } from "./waterBill/WaterBillEdit";
import { WaterBillShow } from "./waterBill/WaterBillShow";
import { ElectricBillList } from "./electricBill/ElectricBillList";
import { ElectricBillCreate } from "./electricBill/ElectricBillCreate";
import { ElectricBillEdit } from "./electricBill/ElectricBillEdit";
import { ElectricBillShow } from "./electricBill/ElectricBillShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UtilityBillAuditorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GasBill"
          list={GasBillList}
          edit={GasBillEdit}
          create={GasBillCreate}
          show={GasBillShow}
        />
        <Resource
          name="WaterBill"
          list={WaterBillList}
          edit={WaterBillEdit}
          create={WaterBillCreate}
          show={WaterBillShow}
        />
        <Resource
          name="ElectricBill"
          list={ElectricBillList}
          edit={ElectricBillEdit}
          create={ElectricBillCreate}
          show={ElectricBillShow}
        />
      </Admin>
    </div>
  );
};

export default App;
