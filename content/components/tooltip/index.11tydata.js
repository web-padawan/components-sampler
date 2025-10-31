/**
 * @typedef {import('../../../src/types').ComponentData} ComponentData
 */

/** @type {ComponentData} */
export default {
  sample: `
    <vaadin-tooltip for="target"></vaadin-tooltip>
    <button id="target">Show tooltip</button>
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
        name: 'markdown',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'When enabled, the tooltip text is rendered as a markdown',
        attribute: 'markdown',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'position',
        type: {
          text: `'bottom' | 'bottom-end' | 'bottom-start' | 'end' | 'end-bottom' | 'end-top' | 'start' | 'start-bottom' | 'start-top' | 'top' | 'top-end' | 'top-start'`,
        },
        default: 'bottom',
        description: 'Position of the tooltip with respect to its target',
        attribute: 'position',
      },
      {
        kind: 'field',
        name: 'text',
        type: {
          text: 'string',
        },
        default: 'A dummy tooltip text',
        description: 'Text of the tooltip',
        attribute: 'text',
      },
    ],
    cssProperties: [
      {
        description: 'Background',
        name: '--vaadin-tooltip-background',
        default: 'var(--vaadin-background-color)',
      },
      {
        description: 'Border color',
        name: '--vaadin-tooltip-border-color',
        default: 'var(--vaadin-overlay-border-color)',
      },
      {
        description: 'Border radius',
        name: '--vaadin-tooltip-border-radius',
        default: 'var(--vaadin-radius-m)',
      },
      {
        description: 'Border width',
        name: '--vaadin-tooltip-border-width',
        default: 'var(--vaadin-overlay-border-width, 1px)',
      },
      {
        description: 'Box shadow',
        name: '--vaadin-tooltip-shadow',
        default: '0 3px 8px -1px rgba(0, 0, 0, 0.2)',
      },
      {
        description: 'Color',
        name: '--vaadin-tooltip-color',
        default: 'inherit',
      },
      {
        description: 'Font size',
        name: '--vaadin-tooltip-font-size',
        default: '0.9em',
      },
      {
        description: 'Font weight',
        name: '--vaadin-tooltip-font-weight',
        default: 'inherit',
      },
      {
        description: 'Line height',
        name: '--vaadin-tooltip-line-height',
        default: 'inherit',
      },
      {
        description: 'Max width',
        name: '--vaadin-tooltip-max-width',
        default: '40ch',
      },
      {
        description: 'Offset bottom',
        name: '--vaadin-tooltip-offset-bottom',
        default: '4px',
      },
      {
        description: 'Offset end',
        name: '--vaadin-tooltip-offset-end',
        default: '4px',
      },
      {
        description: 'Offset start',
        name: '--vaadin-tooltip-offset-start',
        default: '4px',
      },
      {
        description: 'Offset top',
        name: '--vaadin-tooltip-offset-top',
        default: '4px',
      },
      {
        description: 'Padding',
        name: '--vaadin-tooltip-padding',
        default: 'var(--vaadin-padding-container)',
      },
    ],
  },
};
