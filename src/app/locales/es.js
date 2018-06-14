(function() {
  var translations = {
    'new_map': 'Nuevo Mapa',
    'layer_type_not_supported': 'El tipo de capa no soportado',
    'projection_not_supported': 'Proyección no soportado',
    'notifications_tab': 'Notificaciones',
    'no_notifications': 'Ninguna notificación',
    'registry': 'Registro',
    'registry_layers': 'Registro de Capas',
    'registry_layer_btn': 'Registro de Capa',
    'search_layers_btn': 'Búsqueda de Capas',
    'search_layers' : 'Búsqueda de Capas',
    'map_layers': 'Capas',
    'add_layer_btn': 'Añadir Capa',
    'add_layers': 'Añadir Capas',
    'remove_layer': 'Retirar la Capa',
    'attributes': 'Atributos',
    'local_geoserver': 'Geoserver Locales',
    'filter_layers': 'Capas Filtrantes',
    'add_new_server': 'Añadir Servidor Nuevo',
    'add_server': 'Añadir Servidor',
    'server_type': 'Tipo',
    'server_name': 'Nombre',
    'server_url': 'URL',
    'close_btn': 'Cerrar',
    'add_btn': 'Añadir',
    'merge_results': 'Combinar los Resultados',
    'cancel_btn': 'Cancelar',
    'done_btn': 'Terminado',
    'remove_btn': 'Eliminar',
    'conflict': 'CONFLICTO',
    'synchronization': 'Sincronización',
    'synchronization_failed': 'Se ha producido un error desconocido al sincronizar. Por favor, inténtelo de nuevo.',
    'synchronization_success': 'Los repositorios se han sincronizado.',
    'add_sync': 'Añadir Sinc',
    'merge': 'Fusionar',
    'config': 'Configuracion Remota',
    'repo': 'Repo',
    'remote': 'Remoto',
    'new_remote': 'Nuevo Remoto',
    'add_remote': 'Añadir Remoto',
    'repo_name': 'Nombre de Repo',
    'repo_uuid': 'UUID de Repo',
    'remote_name': 'Nombre Remoto',
    'edit_btn': 'Editar',
    'repo_url': 'URL',
    'repo_username': 'Nombre de Usuario',
    'repo_password': 'Contraseña',
    'toggle_menu': 'Menú Palanca',
    'single': 'Unico',
    'continuous': 'Continuo',
    'into': 'a',
    'error': 'Error',
    'warning': 'Advertencia',
    'failed_get_capabilities': 'No se encontraron capacidades: ',
    'server_url_not_specified': 'No se especifica url del servidor',
    'fixed': 'ARREGLADO',
    'adds': 'Adiciones',
    'modifications': 'Modificaciones',
    'deletes': 'Eliminados',
    'merges': 'Fusiones',
    'cancel_merge': 'Cancelar la fusion',
    'complete_merge': 'Completar la fusion',
    'save_btn': 'Guardar',
    'save_copy_btn': 'Guardar una copia',
    'single_conflict': '1 conflicto pendiente',
    'multiple_conflicts': '{{value}} conflictos pendientes',
    'sure_cancel_merge': 'Esta seguro que desea cancelar el proceso de fusion?',
    'sure_commit_merge': 'Esta seguro que desea finalizar y confirmar la fusion?',
    'commit_merge': 'Confirmar Fusion',
    'added_1_feature': 'Añadió 1 elemento a \'{{layer}}\' a través MapLoom.',
    'modified_1_feature': 'Modificado 1 elemento de \'{{layer}}\' a través MapLoom.',
    'modified_x_features': 'Modificado {{num}} elementos de \'{{layer}}\' a través MapLoom.',
    'removed_1_feature': 'Eliminado 1 elemento de \'{{layer}}\' a través MapLoom.',
    'applied_via_maploom': 'Aplica a través de MapLoom.',
    'conflicts_in': 'Los conflictos resueltos en \'{{layer}}\'',
    'merged_branch': 'Fusionada \'{{branch}}\' rama',
    'yes_btn': 'Si',
    'no_btn': 'No',
    'differences': 'Diferencias',
    'from': 'De',
    'to': 'A',
    'new_feature': 'Nuevo Elemento',
    'changed_feature': 'Elemento Modificada',
    'original_feature': 'Elemento Original',
    'removed_feature': 'Elemento Eliminada',
    'merged_feature': 'Elemento Fusionada',
    'location_lon_lat': 'Ubicacion ( lon, lat )',
    'show_history': 'Mostrar Historial',
    'show_table': 'Mostrar Tabla',
    'show_table_failed': 'Se ha producido un error desconocido al recuperar los elementos. ' +
        'Por favor, inténtelo de nuevo.',
    'show_heatmap': 'Mostrar Heatmap',
    'show_pics': 'Mostrar Imagenes',
    'edit_geometry': 'Editar Geometria',
    'edit_attributes': 'Editar Atributos',
    'delete_feature': 'Remover Elemento',
    'feature_diff_error': 'No se pudo retirar todas las diferencias para los elementos. ' +
        'Revisar la coneccion de red e intente nuevamente.',
    'no_local_branches': 'El deposito no tenia ramas locales.',
    'unable_to_get_branches': 'No se pudo identificar ramas del deposito. Intentar re añadir la capa.',
    'unable_to_get_remotes': 'No se pudo identificar los remotos del deposito. Intentar re añadir la capa.',
    'unable_to_get_datastore': 'No se pudo lograr el deposito de datos.',
    'unable_to_add_remote': 'No se pudo añadir el remoto de GeoGig: ',
    'unable_to_get_feature_type': 'No se pudo retirar el tipo de elemento del almacenaje de datos.',
    'unable_to_get_datastore_name': 'No se pudo determinar el nombre del almacenador de datos.',
    'layer_was_layer_group': 'No se pudo determinar si la capa era una capa grupal.',
    'start_date': 'Fecha de Inicio:',
    'end_date': 'Fecha de Conclusion:',
    'summarize_btn': 'Resumir',
    'anonymous': 'Anonimo',
    'history_failed': 'No se pudo buscar el historial de la capa. Favor intentar de nuevo.',
    'history': 'Historial',
    'btn_ok': 'Aceptar',
    'summary_of_changes': 'Resumen de Cambios',
    'too_many_changes': 'Se encontraron demasiados cambios para ser mostrados. De ser posible, minimice el rango.',
    'too_many_changes_refresh': 'Durante fueron hechas {{value}} cambios a la capa. ' +
        'Revise la historia de un registro detallado.',
    'no_changes_in_time_range': 'No se realizaron cambios a la capa dentro del marco de tiempo especificado.',
    'no_changes_in_commit': 'No se realizaron cambios a la capa.',
    'diff_unknown_error': 'Un error desconocido ocurrio al resumir las diferencias. Favor intentar nuevamente.',
    'in_lower_case': 'en',
    'to_lower_case': 'a',
    'from_lower_case': 'de',
    'history_for': 'Historial para {{value}}',
    'drag_zoom_not_supported': 'No existen las operaciones de "drag zoom" en este mapa.',
    'repository': 'Deposito',
    'transaction': 'Transaccion',
    'abort': 'Abortar',
    'resolve_conflicts': 'Resolver Conflictos',
    'merge_conflicts': 'Fusionar Conflictos',
    'conflicts_encountered': 'Se identificaron algunos problemas al realizar la operacion, ' +
        'desea resolverlos o desea abortar la fusion?',
    'conflict_unknown_error': 'Un error desconocido ocurrio al finalizar la transaccion. Favor intentar nuevamente.',
    'unable_to_resolve_conflicts': 'No se pudo resolver conflictos {{value}}. Favor intentar nuevamente.',
    'merge_unknown_error': 'Un error desconocido ocurrio al realizar la fusion. Favor intentar nuevamente.',
    'merge_successful': 'Fusion Exitosa',
    'merge_no_changes': 'La fusion resulto en ningun cambio.',
    'select_date_range': 'Seleccionar el Rango de Datos',
    'select_start_time': 'Seleccione la Hora de Inicio',
    'link': 'Enlace',
    'link_already_exists': 'El enlace ya existe.',
    'synchronize': 'Sincronizar',
    'no_email': 'No Tiene Email',
    'added': 'Agregado',
    'removed': 'Removido',
    'modified': 'Modificado',
    'feature': 'elemento',
    'features': 'elementos',
    'conflicted_features_resolved': 'Elementos en conflicto resueltos: ',
    'id': 'ID',
    'author_name': 'Nombre del Autor',
    'author_email': 'Email del Autor',
    'committer_name': 'Nombre del Destinatario',
    'committer_email': 'Email del Destinatario',
    'commit_time': 'Tiempo de Destino',
    'message': 'Mensaje',
    'export_csv': 'Exportar CSV',
    'sure_delete_feature': 'Esta seguro de querer eliminar este elemento?',
    'drawing_geometry': 'Dibujando la Geometria',
    'adding_feature': 'Añadiendo el Elemento',
    'must_create_feature': 'Debe crear un elemento antes de continuar.',
    'editing_geometry': 'Editando Geometria',
    'save_attributes': 'Guardar Atributos',
    'invalid_fields': 'Existen campos invalidos {{value}}. Debe solucionar estos problemas previo a poder guardar.',
    'add_feature': 'Añadir Elemento',
    'toggle_visibility': 'Modificar la Visibilidad',
    'remote_options': 'Opciones Remotas',
    'history_summary': 'Resumen de Historial',
    'comment_summary': 'Comments Summary',
    'comments': 'Comments',
    'zoom_world': 'Regresar a Mapa Mundial',
    'legend_title': 'Descripcion',
    'toggle_legend': 'Modificar la Descripcion',
    'refresh_layers': 'Refrescar Capas',
    'sure_remove_layer': 'Esta seguro de querer eliminar esta capa?',
    'pull_unknown_error': 'Un error desconocido ocurrio al realizar el retiro del remoto. Favor intentar nuevamente.',
    'pull_multiple_error': 'Tire ha fallado varias veces, tal vez el control remoto no está disponible en este' +
        ' momento . Por favor, inténtelo de nuevo más tarde.',
    'pull_timeout_error': 'Tire está tomando más tiempo de lo normal, esto podría deberse a que el servidor se' +
        ' sobrecargue por lo que en un esfuerzo por dejar que la captura del servidor hasta que se detiene la' +
        ' sincronización automática. Por favor, espere antes de reanudar la sincronización automática para que el' +
        ' servidor pueda ponerse al día.',
    'local': 'Local',
    'pull_conflicts': 'Extraer Conflictos',
    'feature_id': 'Elemento ID',
    'table_view': 'Vista de Tabla',
    'filter_table': 'Filtrar',
    'clear_table_filter': 'Limpiar',
    'word_wrap': 'Ajuste de línea de alternancia',
    'go_to_map': 'Ver en el Mapa',
    'title': 'Titulo',
    'abstract': 'Sintesis',
    'save_this_map': 'Guardar a este mapa',
    'save_failed': 'No se pudo guardar',
    'map_save_failed': 'No se pudo guardar el mapa con el siguiente estado: {{value}}.',
    'map_save_permission': 'Usted no tiene permiso para modificar este mapa. Usted puede guardar una copia ' +
        'del mapa si desea mantener los cambios.',
    'fetch': 'Traer',
    'fetch_error': 'Hubo un error al tratar de buscar desde el control remoto, por favor intente de nuevo más tarde.',
    'fetch_timeout': 'Fetch está tomando más tiempo de lo que debería, es posible que todavía está trabajando así ' +
        'que espere un momento antes de volver a intentarlo.',
    'repo_not_compatible': 'El repositorio specifed no es un mando a distancia compatible con tu repositorio.',
    'not_a_repo': 'El punto final especificado no es un repositorio.',
    'could_not_connect': 'Error al conectar con el punto final especificado.',
    'remote_add_success': '{{value}} se ha agregado correctamente',
    'remote_edit_success': '{{value}} se ha cambiado correctamente.',
    'remote_remove': 'Está seguro que desea eliminar este mando a distancia?',
    'no_compatible_repos': 'No hubo repositorios compatibles se encuentran en la url dada.',
    'continue_btn': 'Continuar',
    'remote_already_exists': 'El remoto especificado ya existe en este repo.',
    'remote_add_error': 'Hubo un error al tratar de agregar el control remoto.',
    'remote_edit_error': 'Hubo un error al tratar de editar su control remoto.',
    'multiple_compatible_repos': 'Hubo múltiples repositorios compatibles encontrados. Por favor, elija la que' +
        ' desee utilizar.',
    'undo_changes': 'Deshacer Cambios',
    'newer_feature_version': 'Este elemento se ha modificado desde la presente notificación fue publicada. ' +
        '¿Quieres comparar con la versión más reciente?',
    'undo_successful': 'Deshacer Exitosa',
    'undo_no_changes': 'El deshacer resultó en ningún cambio.',
    'sure_undo_changes': '¿Está seguro que desea deshacer los cambios introducidos en este cometido? ' +
        '(Nota: El cambio seguirá siendo una parte de la historia del elemento.)',
    'fixed_feature': 'Elemento Fijo',
    'undo_conflicts': 'Deshacer Conflictos',
    'changes_undone': 'Los cambios en el elemento se ha deshecho con éxito.',
    'reverted_changes_to_feature': 'Revertidos los cambios realizados en {{feature}}.',
    'remote_not_fetched': 'Parecería como si el mando a distancia que ha seleccionado no ha sido traidos del.' +
        ' Ahora vamos a tratar de ir a buscar los datos que necesita para crear vínculos.',
    'latlon_confirm': '{{value}} es el valor interpretado de sus coordenadas. ¿Esto es correcto?',
    'degree_minute_second': 'Grados Minutos Segundos',
    'decimal_degrees': 'Grados Decimales',
    'mgrs': 'MGRS',
    'other': 'Otro',
    'search': 'Búsqueda',
    'searching': 'Buscando...',
    'search_prompt' : 'Por favor, utilice cualquiera de las opciones de la izquierda para iniciar una búsqueda.',
    'search_locations': 'Ubicaciones de Búsqueda',
    'search_table': 'Buscar Todos Los Campos',
    'search_results': 'Resultados de la Búsqueda',
    'search_no_results': 'No hay resultados que coincidan con la consulta de búsqueda.',
    'search_error_status': 'Buscar fallado con el código de respuesta ({{status}}).',
    'search_error': 'Se ha producido un error desconocido mientras se realiza la búsqueda.',
    'switch_coords': 'Cambie la visualización de coordenadas',
    'accept_feature': 'Aceptar Función',
    'cancel_feature': 'Cancelar Función',
    'add_to_feature': 'Agregar a la Función',
    'remove_from_feature': 'Eliminar de Función',
    'draw': 'Dibujar',
    'zoom_to_data': 'Enfocar a los datos',
    'show_layer_info': 'Mostrar información de las capas',
    'workspace': 'Espacio de trabajo',
    'featuretype': 'Tipo de funcion',
    'keywords': 'Palabras clave',
    'srs': 'SRS',
    'server': 'Servidor',
    'credentials': 'Cartas Credenciales',
    'enter_credentials': 'Por favor, introduzca sus credenciales para:',
    'skip_credentials': 'O usted puede hacer clic en Omitir para iniciar sesión de forma anónima. Sólo capa ' +
        'público será visible para los usuarios anónimos y los cambios en las capas no se asociará con un usuario. ' +
        'Se recomienda que usted inicia sesión si usted tiene las credenciales para este servidor.',
    'skip': 'Omitir',
    'connected_as': 'Conectado como {{value}}.',
    'connect_as': 'Conecte como...',
    'branch': 'Rama',
    'layerinfo': 'Informacion de las Capas',
    'author_fetch_failed': 'Un error desconocido ocurrió mientras que la determinación de los autores del elemento.',
    'show_authors': 'Mostrar los Autores',
    'right_angles': 'Angulo Recto',
    'right_angles_failed': 'No fuimos capaces de arreglar su poligono, tratar de conseguir que mas cerca de un' +
        ' rectangulo y vuelva a intentarlo.',
    'unable_to_save_feature': 'Error al guardar la nueva caracteristica por la siguiente razon: {{value}}',
    'unknown_error': 'Se ha producido un error desconocido mientras se ahorra la función.',
    'unable_to_save_geometry': 'Error al guardar los cambios en la geometria de las siguientes razones: {{value}}',
    'unable_to_save_attributes': 'Error al guardar los cambios en los atributos de la siguiente razon: {{value}}',
    'unable_to_delete_feature': 'Error al eliminar la funcion por la siguiente razon: {{value}}',
    'load_server_failed': 'No se pudo cargar el servidor {{server}} por la siguiente razon: {{value}}',
    'remove_server': 'Esta seguro que desea eliminar este servidor?',
    'remove_layers_first': 'Este servidor tiene capas que se encuentran en el mapa, por favor retirarlos del primer' +
        ' mapa.',
    'edit_server': 'Esta seguro que desea editar este servidor?',
    'load_layer_failed': 'Error al cargar la capa {{layer}}, no se añadirá esta capa al mapa y si guarda su' +
        ' mapa no tendrá esta capa.',
    'no_attributes': 'No hay ningun atributo para mostrar.',
    'true': 'Verdadero',
    'false': 'Falso',
    'failed_to_add_server': 'Hubo un problema al intentar conectar con el servidor especificado, compruebe la URL y' +
        ' las credenciales para asegurarse de que son correctos antes de volver a intentarlo.',
    'failed_to_save_features': 'Los elementos no pudieron salvar, por favor tratar de salvar una vez más antes de ' +
        'cerrar la tabla o perderá el trabajo.',
    'server_connect_failed': 'No se pudo conectar con este servidor, todavia desea anadir este servidor?',
    'disabled_layer': 'Capa es Desactivado',
    'missing_layers_merge': 'Hay {{count}} elemento(s) que participan en la fusión que no son parte del mapa.  ' +
        'Con el fin de obtener la información de esquema más preciso para esa capa, se recomienda que usted cancela ' +
        'la combinación, agregue las capas que faltan, y vuelve a intentarlo. Capa(s) faltante:',
    'advanced_filters': 'Filtros Avanzados',
    'basic_filters': 'Filtros Básicos',
    'apply_filters': 'Aplicar Filtros',
    'clear_filters': 'Borrar Filtros',
    'previous_page': 'Página Anterior',
    'next_page': 'Página Siguiente',
    'current_page': 'Página {{currentPage}} de {{totalPages}}',
    'filter': 'Filtrar por Atributo:',
    'merge_commit': 'Fusion Confirmada',
    'always_anonymous': 'Conecte Siempre Anónimamente',
    'script_error': 'Se ha producido un error de script siguiente: "{{error}}". Se recomienda volver a cargar ' +
        'la página web para resolver cualquier posible complicación.',
    'show_changes': 'Mostrar Cambios',
    'sure_close_table': '¿Está seguro que desea cerrar la mesa? Se perderán todos los cambios no guardados.',
    'toggle_fullscreen': 'Cambiar a Pantalla Completa',
    'since_time': 'En funcionamiento desde {{time}}',
    'unread_notifications': 'Notificaciones Sin Leer',
    'generate_notification': 'Generar una Notificación',
    'no_layers_notification': 'La generación de una notificación requiere una capa GeoGig funcionar. ' +
        'Por favor, añada una capa GeoGig al mapa.',
    'single_sync': 'Realizar la Sincronización',
    'continuous_sync': 'Sincronización Automática de Palanca',
    'statistics_view': 'Ver las estadísticas',
    'exact_match': 'Igualar Exactamente',
    'range': 'Oscilar',
    'contains': 'Contener',
    'minimum': 'Minimo',
    'maximum': 'Maximo',
    'mean': 'Promedio',
    'median': 'Media',
    'sum': 'Soma',
    'variance': 'Varianza',
    'standard_deviation': 'Desviacion Estandar',
    'count': 'Cuentas',
    'populated_count': 'Llenado Cuentas',
    'unique_values': 'Valor Único',

    'paging_subtitle' : 'Mostrando {{ firstRecord }} - {{ lastRecord }} de {{ totalRecords }} registros',
    'sorted_by' : 'Ordenado por ',
    'ascending' : 'Ascendente',
    'descending' : 'Descendente',
    'date' : 'Fecha',
    'category' : 'Categoría',
    'date_created' : 'Fecha de Creacion',
    'next' : 'Siguiente',
    'previous' : 'Anterior',
    'clear' : 'Limpiar todos',
    'owner' : 'Poseedor',

    'refine_layers_subtitle' : 'Filtrar Capas',

    'layers_to_be_added' : 'Se añadirán {{ value }} capas al mapa.',

    'map_help' : 'Zoom para limitar la búsqueda a datos que incluyan funciones en el área visualizada. Coloca el cursor sobre las capas de la lista para obtener una vista previa de ellas en el mapa anterior.',
    'keyword_help' : 'Las palabras clave buscarán títulos y descripciones de los partidos.',
    'date_help' : 'Filtrar capas por su fecha de creación.',
    'owner_help' : 'Filtrar capas por su poseedor',
    'category_help' : 'Filtrar caps por su Categoría',


    'measure' : 'Medida',
    'measure_tools' : 'Longitud o Área',
    'measure_area' : 'Área',
    'measure_line' : 'Longitud',
    'measure_stop' : 'Deja de medir',
    'measure_units' : 'Unidades',
    'comment_time' : 'Submission Date',
    'comment_title' : 'Comment Title',
    'no_comments_in_time_range' : 'No Comments in Time Range',
    'comment_unknown_error' : 'Unknown Comment Error',
    'add_comment_title' : 'Add a Comment',
    'submit_btn' : 'Submit',
    'author' : 'Author',
    'status' : 'Status',
    'approver' : 'Approver',
    'submit_date_time' : 'Submitted Date',
    'approved_date' : 'Approved Date',
    'username' : 'Username',
    'add_comment' : 'Add Comment',
    'comments_enabled' : 'Comments Enabled',
    'comment_acknowledge': 'I acknowledge that my comment goes to a queue and won\'t appear on the map until approved by PPACG staff',
    'bounding_box' : 'Cuadro Delimitador',
    'too_many_filters' : 'Es posible que tenga demasiados filtros seleccionados. Prueba a eliminar una de las siguientes:',
    'style_layer': 'Style Layer',
    'style_name': 'Style Name',
    'style_layer_failed': 'Se ha producido un error desconocido al sincronizar {{ style_name }}.sld. Por favor, inténtelo de nuevo.',
    'save_layer_style': 'Save Layer Style',
    'show_style_editor': 'Show Style Editor',
    'refresh_interval': 'Refresh Interval'
  };

  var module = angular.module('loom_translations_es', ['pascalprecht.translate']);

  module.config(function($translateProvider) {
    $translateProvider.translations('es', translations);
  });

}());
