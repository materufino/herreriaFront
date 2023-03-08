<Route path='herreros/tareas/modificar' element={
    <LoginGuard><RoleGuard roles={['Oficial', 'Maestre', 'Aprendiz']}>
        <HerreroModificarTareas />
    </RoleGuard></LoginGuard>} />
