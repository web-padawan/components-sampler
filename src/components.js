function addValueListener(element, prop, attr) {
  const input = document.getElementById(prop);

  // Apply default value
  element[prop] = input.placeholder;

  input.addEventListener('change', () => {
    // Restore default value if input os cleared
    if (!input.value) {
      element[prop] = input.placeholder;
    }
  });
}

export function initComponents(element) {
  // Init confirm-dialog open button
  if (element.localName === 'vaadin-confirm-dialog') {
    const openBtn = element.nextElementSibling;
    openBtn.addEventListener('click', () => {
      element.opened = !element.opened;
    });

    addValueListener(element, 'message');
    addValueListener(element, 'cancelTheme');
    addValueListener(element, 'confirmTheme');
    addValueListener(element, 'rejectTheme');
  }

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
    addValueListener(element, 'text');
  }
}
