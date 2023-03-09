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
import PedidoReparacion from './components/admin/PedidoReparacion';
import LoginGuard from './guards/LoginGuard';
import RoleGuard from './guards/RoleGuard';
import LoggedProvider from './components/providers/LoggedProvider';


function App() {
  return (
    <LoggedProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* forms */}
            <Route path='/' element={<Navigate to={'/home'} replace />} />
            <Route path='home' element={<Home />} />

            <Route path='register/admin' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <AdminRegistro />
              </RoleGuard></LoginGuard>} />
            <Route path='herreros/registro' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <HerreroRegistro />
              </RoleGuard></LoginGuard>} />
            <Route path='pedidos/nuevo' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <NuevoPedido />
              </RoleGuard></LoginGuard>} />
            <Route path='pedidos/nuevo/fabricacion' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <PedidoFabricacion />
              </RoleGuard></LoginGuard>} />
            <Route path='pedidos/nuevo/reparacion' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <PedidoReparacion />
              </RoleGuard></LoginGuard>} />

            {/* menues main */}

            <Route path='menu/admin' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <AdminMenu />
              </RoleGuard></LoginGuard>} />
            <Route path='menu/herrero' element={
              <LoginGuard><RoleGuard roles={['Oficial', 'Maestro', 'Aprendiz']}>
                <HerreroMenu />
              </RoleGuard></LoginGuard>} />

            {/* menues del Admin */}

            <Route path='herreros/listado' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <ListadoHerreros />
              </RoleGuard></LoginGuard>} />
            <Route path='pedidos/creado' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <PedidoCreado /></RoleGuard></LoginGuard>} />
            <Route path='pedidos/en_curso' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <PedidosEnCurso />
              </RoleGuard></LoginGuard>} />
            <Route path='pedidos/terminados' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <PedidosTerminados />
              </RoleGuard></LoginGuard>} />
            <Route path='clientes' element={
              <LoginGuard><RoleGuard roles={['Admin']}>
                <Clientes />
              </RoleGuard></LoginGuard>} />
            <Route path='herreros' element={
              <LoginGuard><RoleGuard roles={['Admin']}><Herreros /></RoleGuard></LoginGuard>} />

            {/* menues de los Herreros */}

            < Route path='herrero/tareas/pendientes' element={
              <LoginGuard><RoleGuard roles={['Oficial', 'Maestro', 'Aprendiz']}>
                <HerreroTareasPendientes />
              </RoleGuard></LoginGuard>} />
            < Route path='herrero/tareas/finalizadas' element={
              <LoginGuard><RoleGuard roles={['Oficial', 'Maestro', 'Aprendiz']}>
                <HerreroTareasFinalizadas />
              </RoleGuard></LoginGuard>} />

            <Route path='*' element={<Navigate to={'/home'} replace />} />

          </Routes>
        </div>
      </BrowserRouter>
    </LoggedProvider >
  );
}

export default App;
