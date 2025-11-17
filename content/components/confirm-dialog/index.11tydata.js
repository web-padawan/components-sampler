/**
 * @typedef {import('../../../src/types').ComponentData} ComponentData
 */

/** @type {ComponentData} */
export default {
  sample: `
    <vaadin-confirm-dialog></vaadin-confirm-dialog>
    <button>Open dialog</button>
  `,
  data: {
    members: [
      {
        kind: 'field',
        name: 'cancelButtonVisible',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether to show cancel button or not',
        attribute: 'cancel-button-visible',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'cancelText',
        type: {
          text: 'string',
        },
        default: 'Cancel',
        description: 'Text displayed on the cancel button',
        attribute: 'cancel-text',
      },
      {
        kind: 'field',
        name: 'cancelTheme',
        type: {
          text: 'string',
        },
        default: 'tertiary',
        description: 'Theme for the cancel button',
        attribute: 'cancel-theme',
      },
      {
        kind: 'field',
        name: 'confirmText',
        type: {
          text: 'string',
        },
        default: 'Confirm',
        description: 'Text displayed on the confirm button',
        attribute: 'confirm-text',
      },
      {
        kind: 'field',
        name: 'confirmTheme',
        type: {
          text: 'string',
        },
        default: 'primary',
        description: 'Theme for the confirm button',
        attribute: 'confirm-theme',
      },
      {
        kind: 'field',
        name: 'header',
        type: {
          text: 'string',
        },
        default: 'Example header',
        description: 'Header of the dialog',
        attribute: 'header',
      },
      {
        kind: 'field',
        name: 'height',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Height of the dialog',
        attribute: 'height',
      },
      {
        kind: 'field',
        name: 'message',
        type: {
          text: 'string',
        },
        default: 'Example confirmation message',
        description: 'The message or confirmation question',
        attribute: 'message',
      },
      {
        kind: 'field',
        name: 'noCloseOnEsc',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the dialog should close on Esc',
        attribute: 'no-close-on-esc',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'rejectButtonVisible',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether to show reject button or not',
        attribute: 'reject-button-visible',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'rejectText',
        type: {
          text: 'string',
        },
        default: 'Reject',
        description: 'Text displayed on the reject button',
        attribute: 'reject-text',
      },
      {
        kind: 'field',
        name: 'rejectTheme',
        type: {
          text: 'string',
        },
        default: 'error tertiary',
        description: 'Theme for the reject button',
        attribute: 'reject-theme',
      },
      {
        kind: 'field',
        name: 'width',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Width of the dialog',
        attribute: 'width',
      },
    ],
    cssProperties: [
      {
        description: 'Background',
        name: '--vaadin-dialog-background',
        default: 'var(--vaadin-overlay-background)',
      },
      {
        description: 'Backdrop background',
        name: '--vaadin-overlay-backdrop-background',
        default: 'rgba(0, 0, 0, 0.2)',
      },
      {
        description: 'Border color',
        name: '--vaadin-dialog-border-color',
        default: 'var(--vaadin-overlay-border-color)',
      },
      {
        description: 'Border radius',
        name: '--vaadin-dialog-border-radius',
        default: 'var(--vaadin-radius-l)',
      },
      {
        description: 'Border width',
        name: '--vaadin-dialog-border-width',
        default: 'var(--vaadin-overlay-border-width)',
      },
      {
        description: 'Box shadow',
        name: '--vaadin-dialog-shadow',
        default: 'var(--vaadin-overlay-shadow)',
      },
      {
        description: 'Max width',
        name: '--vaadin-confirm-dialog-max-width',
        default: '25em',
      },
      {
        description: 'Min width',
        name: '--vaadin-confirm-dialog-min-width',
        default: '15em',
      },
      {
        description: 'Padding',
        name: '--vaadin-dialog-padding',
        default: 'var(--vaadin-padding-l)',
      },
      {
        description: 'Title color',
        name: '--vaadin-dialog-title-color',
        default: 'var(--vaadin-text-color)',
      },
      {
        description: 'Title font size',
        name: '--vaadin-dialog-title-font-size',
        default: '1em',
      },
      {
        description: 'Title font weight',
        name: '--vaadin-dialog-title-font-weight',
        default: '600',
      },
      {
        description: 'Title line height',
        name: '--vaadin-dialog-title-line-height',
        default: 'inherit',
      },
    ],
  },
};
