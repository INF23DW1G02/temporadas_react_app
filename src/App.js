import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { EquipaEdit, EquipaList } from "./EquipaList";
import { TemporadaList, TemporadaEdit } from "./TemporadaList";
import { JogoEdit, JogoList } from "./JogoList";
import { JogadorEdit, JogadorList } from "./JogadorList";
import { EstatisticaEdit, EstatisticaList } from "./EstatisticaList";
import { OcurrenciaEdit, OcurrenciaList } from "./OcorrenciaList";
import Dashboard from './dashboard';
import equipaData from './equipaData';
import './App.css';



const dataProvider = lb4Provider("http://localhost:3000/");

const App = () => (

    <Admin dataProvider={dataProvider} dashboard={() => <Dashboard equipaData={equipaData} />}>
        <Resource name="Equipa" list={EquipaList} edit={EquipaEdit} />
        <Resource name="Temporada" list={TemporadaList} edit={TemporadaEdit}/>
        <Resource name="Jogo" list={JogoList} edit={JogoEdit}/>
        <Resource name="Jogadores" list={JogadorList} edit={JogadorEdit} />
        <Resource name="Estatisticas" list={EstatisticaList} edit={EstatisticaEdit} />
        <Resource name="Ocorrencia" list={OcurrenciaList} edit={OcurrenciaEdit} />
    </Admin>
);
export default App;





