function getNumericValue(name, value) {
  // Dialog and popover use `null` as a way to reset width and height
  if (['width', 'height'].includes(name) && value === '') {
    return null;
  }

  return parseInt(value);
}

export function initControls(element) {
  // Boolean / number / string properties
  document.querySelectorAll('.control--prop input').forEach((input) => {
    input.addEventListener('change', ({ target }) => {
      switch (target.type) {
        case 'checkbox':
          element[target.name] = target.checked;
          break;
        case 'number':
          element[target.name] = getNumericValue(target.name, target.value);
          break;
        default:
          element[target.name] = target.value
      }
    });
  });

  // Enum properties
  document.querySelectorAll('.control--prop select').forEach((input) => {
    input.addEventListener('change', (e) => {
      const { name, value } = e.target;
      element[name] = value;
    });
  });

  // Boolean attributes
  document.querySelectorAll('.control--attr input').forEach((input) => {
    input.addEventListener('change', (e) => {
      const { name, checked } = e.target;
      element.toggleAttribute(name, checked);
    });
  });

  // Enum attributes
  document.querySelectorAll('.control--attr select').forEach((input) => {
    input.addEventListener('change', (e) => {
      const { name, value } = e.target;
      if (value) {
        element.setAttribute(name, value);
      } else {
        element.removeAttribute(name);
      }
    });
  });

  // Custom CSS properties
  document.querySelectorAll('.control--cssprop input').forEach((input) => {
    input.addEventListener('change', (e) => {
      const { name, value } = e.target;

      if (value !== '') {
        element.style.setProperty(name, value);
      } else {
        element.style.removeProperty(name);
      }
    });
  });

  // Variants
  document.querySelectorAll('.control--variant input').forEach((input) => {
    input.addEventListener('change', (e) => {
      let theme = element.getAttribute('theme') || '';
      const { name, checked } = e.target;
      if (checked) {
        theme = `${theme} ${name}`;
      } else {
        theme = theme.replace(name, '');
      }
      theme = theme.trim();
      if (theme) {
        element.setAttribute('theme', theme);
      } else {
        element.removeAttribute('theme');
      }
    });
  });
}
