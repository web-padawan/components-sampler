export function initComponents(element) {
  // Init dialog open and close buttons
  if (element.localName === 'vaadin-dialog') {
    const openBtn = element.nextElementSibling;
    openBtn.addEventListener('click', () => {
      element.opened = !element.opened;
    });

    // TODO use regular footer slot instead
    element.footerRenderer = (root) => {
      if (!root.firstChild) {
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => {
          element.opened = false;
        });

        root.appendChild(closeBtn);
      }
    };
  }

  if (element.localName === 'vaadin-tooltip') {
    const defaultText = 'A dummy tooltip text';
    element.text = defaultText;
    element.addEventListener('content-changed', (e) => {
      // Restore default text if cleared
      const { content } = e.detail;
      if (!content) {
        element.text = defaultText;
      }
    });
  }
}
