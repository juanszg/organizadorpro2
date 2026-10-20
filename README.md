# ORGANIZADOR PRO

Organizador personal de productividad hecho con HTML, CSS y JavaScript vanilla. La aplicación guarda sus datos en el almacenamiento local del navegador.

## Ejecutar

Abre `index.html` en un navegador moderno. No necesita instalación, backend ni servidor. La primera apertura carga datos de demostración que puedes editar o reemplazar desde **Ajustes → Restaurar datos de demostración**.

## Datos y privacidad

Las tareas, actividades, entregas, hábitos, perfil, objetivos y sesiones de concentración se guardan en `localStorage` de ese navegador. Usa **Ajustes → Exportar copia** para descargar un respaldo JSON o **Importar copia** para restaurarlo. Los recordatorios solo funcionan mientras la aplicación está abierta.

## Funciones

- Dashboard y progreso diario.
- Crear, editar, completar, reabrir, eliminar, filtrar y buscar tareas.
- Calendario mensual con actividades, tareas y entregas; agenda diaria.
- Entregas con fecha límite y avance.
- Hábitos con historial de días marcados.
- Temporizador de concentración con presets, pausa, reinicio y asociación opcional a una tarea.
- Perfil editable, objetivos, estadísticas, importación y exportación JSON.
- Diseño responsive, paleta verde/naranja/crema y respeto a movimiento reducido.

## Personalizar la apariencia

Abre **Ajustes → Paleta de colores** para elegir entre la paleta Carmesí, Bosque/salvia, Tierra/ámbar, Océano/turquesa o Azul/arcade. La selección se conserva en el navegador. En móvil, toca ☰ para desplegar la navegación. El dashboard anima la entrada de datos con efecto de máquina de escribir y respeta la preferencia de movimiento reducido del sistema.



En móvil, el texto del menú y los controles tiene un mínimo de 11 px. El aside usa Pixelify Sans y el header tiene una trama de píxeles CSS.

En **Ajustes → Tamaño del texto** puedes ampliar el contenido móvil entre 100 % y 150 %. El menú lateral mantiene una escala independiente.


## Asistente virtual NOVA

El acceso junto al título del dashboard abre un chat local que responde consultas sobre tareas, citas, entregas y hábitos a partir de los datos guardados en la aplicación. El avatar está guardado en ssets/robot-face.jpg, recortado de la imagen proporcionada. NOVA funciona sin enviar tus datos a un servicio externo.

El asistente también muestra globos de cómic breves con saludos, consejos y curiosidades de forma ocasional mientras el dashboard está abierto.
