/**
 * @typedef {import('../../../src/types').ComponentData} ComponentData
 */

/** @type {ComponentData} */
export default {
  sample: `
    <vaadin-popover for="target">
      <div>Built with native popover API</div>
    </vaadin-popover>
    <button id="target">Toggle popover</button>
  `,
  data: {
    members: [
      {
        kind: 'field',
        name: 'hideDelay',
        type: {
          text: 'number',
        },
        default: '500',
        description: 'The delay in milliseconds before the tooltip is closed on mouseleave',
        attribute: 'hide-delay',
      },
      {
        kind: 'field',
        name: 'hoverDelay',
        type: {
          text: 'number',
        },
        default: '500',
        description: 'The delay in milliseconds before the tooltip is opened on hover',
        attribute: 'hover-delay',
      },
      {
        kind: 'field',
        name: 'focusDelay',
        type: {
          text: 'number',
        },
        default: '500',
        description: 'The delay in milliseconds before the tooltip is opened on focus',
        attribute: 'focus-delay',
      },
      {
        kind: 'field',
        name: 'height',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Height of the popover',
        attribute: 'height',
      },
      {
        kind: 'field',
        name: 'modal',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the popover is modal',
        attribute: 'modal',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'noCloseOnEsc',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the popover should close on Esc',
        attribute: 'no-close-on-esc',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'noCloseOnOutsideClick',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the popover should close on outside click',
        attribute: 'no-close-on-outside-click',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'position',
        type: {
          text:  `'bottom' | 'bottom-end' | 'bottom-start' | 'end' | 'end-bottom' | 'end-top' | 'start' | 'start-bottom' | 'start-top' | 'top' | 'top-end' | 'top-start'`,
        },
        default: 'bottom',
        description: 'Position of the tooltip with respect to its target',
        attribute: 'position',
      },
      {
        kind: 'field',
        name: 'width',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Width of the popover',
        attribute: 'width',
      },
      {
        kind: 'field',
        name: 'withBackdrop',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the popover should have a backdrop',
        attribute: 'with-backdrop',
        reflects: true,
      },
    ],
    cssProperties: [
      {
        description: 'Arrow size',
        name: '--vaadin-popover-arrow-size',
        default: '8px',
      },
      {
        description: 'Background',
        name: '--vaadin-popover-background',
        default: 'var(--vaadin-overlay-background)',
      },
      {
        description: 'Border color',
        name: '--vaadin-popover-border-color',
        default: 'var(--vaadin-overlay-border-color)',
      },
      {
        description: 'Border radius',
        name: '--vaadin-overlay-border-radius',
        default: 'var(--vaadin-radius-m)',
      },
      {
        description: 'Border width',
        name: '--vaadin-popover-border-width',
        default: 'var(--vaadin-overlay-border-width, 1px)',
      },
      {
        description: 'Box shadow',
        name: '--vaadin-popover-shadow',
        default: 'var(--vaadin-overlay-shadow)',
      },
      {
        description: 'Offset bottom',
        name: '--vaadin-popover-offset-bottom',
        default: '8px',
      },
      {
        description: 'Offset end',
        name: '--vaadin-popover-offset-end',
        default: '8px',
      },
      {
        description: 'Offset start',
        name: '--vaadin-popover-offset-start',
        default: '8px',
      },
      {
        description: 'Offset top',
        name: '--vaadin-popover-offset-top',
        default: '8px',
      },
      {
        description: 'Padding',
        name: '--vaadin-popover-padding',
        default: 'var(--vaadin-padding-s)',
      },
    ],
    variants: [
      {
        description: 'Set to remove padding',
        name: 'no-padding',
      },
      {
        description: 'Set to show the arrow',
        name: 'arrow',
      },
    ],
  },
};
