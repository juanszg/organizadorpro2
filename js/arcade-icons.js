(() => {
  const pixels = {
    dashboard:['00111100','01000010','10111101','10100101','10111101','10000001','01011010','00111100'],
    tasks:['00111100','01111110','11000011','10110101','10111101','10110101','11000011','11111111'],
    calendar:['00111100','01111110','11011011','11111111','10110101','10110101','11111111','01111110'],
    agenda:['00111100','01000010','10110101','10110101','10111101','10110101','10000001','01111110'],
    deliveries:['00011000','00111100','01111110','11011011','11111111','01111110','00111100','00011000'],
    habits:['00011000','01111110','11111111','11111111','01111110','00111100','00011000','00000000'],
    stats:['11000000','11011000','11011000','11011011','11011011','11111011','11111011','11111111'],
    profile:['00111100','01111110','01111110','00111100','11111111','11111111','01111110','00111100'],
    settings:['00011000','01011010','00111100','11111111','11111111','00111100','01011010','00011000'],
    add:['00011000','00011000','00011000','11111111','11111111','00011000','00011000','00011000'],
    edit:['00000011','00000110','00001100','00011000','00110000','01100000','11000000','10000000'],
    delete:['11000011','11100111','01111110','00111100','00111100','01111110','11100111','11000011'],
    check:['00000011','00000111','00001110','11011100','11111000','01110000','00100000','00000000'],
    play:['11000000','11110000','11111100','11111111','11111100','11110000','11000000','00000000'],
    reset:['00111100','01100011','11000000','11001111','11000011','01100110','00111100','00000000'],
    back:['00011000','00111000','01111111','11111111','01111111','00111000','00011000','00000000'],
    forward:['00011000','00011100','11111110','11111111','11111110','00011100','00011000','00000000'],
    export:['00011000','00111100','01111110','11011011','00011000','00011000','11111111','11111111'],
    close:['11000011','11100111','01111110','00111100','01111110','11100111','11000011','00000000'],
    work:['00111100','01000010','01011010','01111110','01011010','01011010','01000010','00111100'],
    study:['00011000','00111100','01111110','11011011','11111111','00011000','00111100','01100110'],
    health:['00011000','00111100','11111111','11111111','00111100','00111100','00011000','00000000'],
    goal:['00011000','00111100','01111110','11011011','00011000','00011000','00011000','00000000'],
    home:['00011000','00111100','01111110','11011011','11011011','11111111','11111111','00000000'],
    idea:['00111100','01000010','10011001','10011001','10000001','01000010','00111100','00011000'],
    creative:['10000001','01000010','00100100','00011000','00011000','00100100','01000010','10000001']
  };
  function pixelGlyph(name){
    const rows=pixels[name]||pixels.add;
    const shapes=rows.map((row,y)=>[...row].map((bit,x)=>bit==='1'?`<rect x="${x*2}" y="${y*2}" width="2" height="2"/>`:'' ).join('')).join('');
    return `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">${shapes}</svg>`;
  }
  function icon(name){
    const imageIcons=['dashboard','tasks','calendar','agenda','deliveries','habits','stats','profile','settings'];
    if(imageIcons.includes(name))return `<img src="assets/cyber-icons/${name}.png" alt="" draggable="false">`;
    return pixelGlyph(name);
  }
  window.arcadePixelIcon=icon;
  window.arcadeTaskIcon=pixelGlyph;
  function kind(button){
    const view=button.dataset.view;
    if(view)return ({dashboard:'dashboard',tasks:'tasks',calendar:'calendar',agenda:'agenda',deliveries:'deliveries',habits:'habits',stats:'stats',profile:'profile',settings:'settings'})[view]||'add';
    const action=button.dataset.action;
    if(action)return ({'new-task':'add','new-event':'calendar','new-delivery':'deliveries','new-habit':'habits',toggle:'check',edit:'edit',delete:'delete','edit-delivery':'edit','delete-delivery':'delete','calendar-edit':'edit','edit-profile':'profile',habit:'check','delete-habit':'delete'})[action]||'add';
    if(button.classList.contains('settings-icon'))return 'settings';
    if(button.classList.contains('x'))return 'close';
    if(button.id==='assistantClose')return 'close';
    if(button.hasAttribute('data-min'))return 'play';
    if(button.dataset.action==='calendar-edit')return 'edit';
    if(button.classList.contains('check')||button.classList.contains('checked'))return 'check';
    if(button.id?.toLowerCase().includes('prev'))return 'back';
    if(button.id?.toLowerCase().includes('next'))return 'forward';
    if(button.id?.toLowerCase().includes('today'))return 'calendar';
    if(button.id?.toLowerCase().includes('timer'))return button.id.includes('Reset')?'reset':'play';
    if(button.id==='export')return 'export';
    if(button.id==='import')return 'deliveries';
    const label=button.textContent.toLowerCase();
    if(/×|cerrar/.test(label))return 'close';
    if(/buscar|search/.test(label))return 'tasks';
    if(/guardar|añadir|nueva|nuevo|agregar/.test(label))return 'add';
    if(/editar/.test(label))return 'edit';
    if(/eliminar|borrar|restaurar/.test(label))return 'delete';
    if(/exportar|descargar/.test(label))return 'export';
    if(/calendario|fecha|actividad/.test(label))return 'calendar';
    if(/hábito|habito/.test(label))return 'habits';
    if(/estadística|estadistica|progreso/.test(label))return 'stats';
    if(/tarea|misión|mision/.test(label))return 'tasks';
    if(/perfil/.test(label))return 'profile';
    if(/ajuste|configur/.test(label))return 'settings';
    if(/iniciar|pausar/.test(label))return 'play';
    if(/reiniciar|anterior|atrás/.test(label))return 'reset';
    if(/siguiente|ver todas|ver detalles|abrir/.test(label))return 'forward';
    return 'add';
  }
  function decorate(root=document){
    root.querySelectorAll?.('button:not(.mobile-menu):not(.assistant-trigger)').forEach(button=>{
      if(button.querySelector(':scope > .arcade-icon')||button.classList.contains('settings-icon'))return;
      const first=[...button.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.nodeValue.trim());
      if(first)first.nodeValue=first.nodeValue.replace(/^[\s\u2000-\u27ff\u{1f000}-\u{1faff}]+/u,'');
      const span=document.createElement('span');span.className='arcade-icon';span.innerHTML=icon(kind(button));button.prepend(span);
    });
  }
  decorate();
  new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{
    if(node.nodeType!==1)return;
    decorate(node.matches?.('button')?node.parentElement||document:node);
  }))).observe(document.body,{childList:true,subtree:true});
})();
