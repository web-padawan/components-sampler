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
        default: 'A dummy confirmation message',
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
  },
};
