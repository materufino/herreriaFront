import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ListaArtefactos from './components/ListaArtefactos';
import AdminRegistro from './components/admin/AdminRegistro';
import AdminNavBar from './components/admin/AdminNavBar';
import HerreroRegistro from './components/admin/HerreroRegistro';
import NuevoPedido from './components/admin/NuevoPedido';
import AdminMenu from './components/admin/AdminMenu';
import PedidoCreado from './components/admin/PedidoCreado';
import PedidosEnCurso from './components/admin/PedidosEnCurso';
import PedidosTerminados from './components/admin/PedidosTerminados';
import Clientes from './components/admin/Clientes';
import ListadoHerreros from './components/admin/ListadoHerreros';
import HerreroMenu from './components/herrero/HerreroMenu';
import HerreroTareasPendientes from './components/herrero/HerreroTareasPendientes';
import HerreroModificarTareas from './components/herrero/HerreroModificarTareas';
import Home from './components/Home';
import HerreroNavBar from './components/herrero/HerreroNavBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* forms */}
          <Route path='/' element={<Navigate to={'/home'} replace/>}/>
          <Route path='home' element={<Home />} />
          <Route path='register/admin' element={<AdminRegistro />} />
          <Route path='register/herrero' element={<HerreroRegistro />} />
          <Route path='pedidos/nuevo' element={<NuevoPedido />} />
          {/* menues main */}
          <Route path='menu/admin' element={<AdminMenu />} />
          <Route path='menu/herrero' element={<HerreroMenu />} />
          {/* menues del Admin */}
          <Route path='pedidos/creado' element={<PedidoCreado />} />
          <Route path='pedidos/en_curso' element={<PedidosEnCurso />} />
          <Route path='pedidos/terminados' element={<PedidosTerminados />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='herreros/listado' element={<ListadoHerreros />} />
          {/* menues de los Herreros */}
          <Route path='herreros/tareas/pendientes' element={<HerreroTareasPendientes />} />
          <Route path='herreros/tareas/modificar' element={<HerreroModificarTareas />} />

    <Route path='*' element={
      <div>
        <h2>404 page not Found</h2>
      </div>
    }/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
