// js/modal-resize.js

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-preview-relatorio');
  const modalBox = modal.querySelector('.modal__frame__box');
  const resizeHandle = modalBox.querySelector('.resize-handle');

  let isResizing = false;
  let lastDownX = 0;
  let lastDownY = 0;

  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    lastDownX = e.clientX;
    lastDownY = e.clientY;
    document.body.style.cursor = 'se-resize';
    e.preventDefault(); // Previne a seleção de texto
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    // Calcula a mudança no mouse
    const deltaX = e.clientX - lastDownX;
    const deltaY = e.clientY - lastDownY;

    // Atualiza as posições para o próximo movimento
    lastDownX = e.clientX;
    lastDownY = e.clientY;

    // Calcula as novas dimensões
    let newWidth = modalBox.offsetWidth + deltaX;
    let newHeight = modalBox.offsetHeight + deltaY;

    // Define limites mínimos e máximos
    const minWidth = 300; // px
    const minHeight = 200; // px
    const maxWidth = window.innerWidth - modalBox.getBoundingClientRect().left - 20; // px
    const maxHeight = window.innerHeight - modalBox.getBoundingClientRect().top - 20; // px

    // Aplica os limites
    newWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
    newHeight = Math.min(Math.max(newHeight, minHeight), maxHeight);

    // Atualiza as dimensões do modal
    modalBox.style.width = `${newWidth}px`;
    modalBox.style.height = `${newHeight}px`;
  });

  document.addEventListener('mouseup', () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.cursor = 'default';
    }
  });

  // Previne o comportamento padrão do click no manipulador
  resizeHandle.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
