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
import Herreros from './components/admin/Herreros';
import HerreroMenu from './components/herrero/HerreroMenu';
import HerreroTareasPendientes from './components/herrero/HerreroTareasPendientes';
import HerreroTareasFinalizadas from './components/herrero/HerreroTareasFinalizadas';
import Home from './components/Home';
import HerreroNavBar from './components/herrero/HerreroNavBar';
import PedidoFabricacion from './components/admin/PedidoFabricacion'
import PedidoReparacion from './components/admin/PedidoReparacion'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* forms */}
          <Route path='/' element={<Navigate to={'/home'} replace />} />
          <Route path='home' element={<Home />} />
          <Route path='register/admin' element={<AdminRegistro />} />
          <Route path='herreros/registro' element={<HerreroRegistro />} />
          <Route path='pedidos/nuevo' element={<NuevoPedido />} />
          <Route path='pedidos/nuevo/fabricacion' element={<PedidoFabricacion />} />
          <Route path='pedidos/nuevo/reparacion' element={<PedidoReparacion />} />
          {/* menues main */}
          <Route path='menu/admin' element={<AdminMenu />} />
          <Route path='menu/herrero' element={<HerreroMenu />} />
          {/* menues del Admin */}
          <Route path='herreros/listado' element={<ListadoHerreros />} />
          <Route path='pedidos/creado' element={<PedidoCreado />} />
          <Route path='pedidos/en_curso' element={<PedidosEnCurso />} />
          <Route path='pedidos/terminados' element={<PedidosTerminados />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='herreros' element={<Herreros />} />
          {/* menues de los Herreros */}
          <Route path='herrero/tareas/pendientes' element={<HerreroTareasPendientes />} />
          <Route path='herrero/tareas/finalizadas' element={<HerreroTareasFinalizadas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
