/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  Item,
} from './app/models/item';
import {
  Items,
} from './app/models/items';

declare global {
  interface HTMLHncItemElement extends HTMLStencilElement {
    'item': Item;
  }
  var HTMLHncItemElement: {
    prototype: HTMLHncItemElement;
    new (): HTMLHncItemElement;
  };
  interface HTMLElementTagNameMap {
    'hnc-item': HTMLHncItemElement;
  }
  interface ElementTagNameMap {
    'hnc-item': HTMLHncItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'hnc-item': JSXElements.HncItemAttributes;
    }
  }
  namespace JSXElements {
    export interface HncItemAttributes extends HTMLAttributes {
      'item'?: Item;
    }
  }
}


declare global {
  interface HTMLHncItemsElement extends HTMLStencilElement {
    'items': Items;
  }
  var HTMLHncItemsElement: {
    prototype: HTMLHncItemsElement;
    new (): HTMLHncItemsElement;
  };
  interface HTMLElementTagNameMap {
    'hnc-items': HTMLHncItemsElement;
  }
  interface ElementTagNameMap {
    'hnc-items': HTMLHncItemsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'hnc-items': JSXElements.HncItemsAttributes;
    }
  }
  namespace JSXElements {
    export interface HncItemsAttributes extends HTMLAttributes {
      'items'?: Items;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }