/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        [key: string]: any;
      };
    }
  }
}

declare namespace React.JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'media-id'?: string;
      aspect?: string;
      [key: string]: any;
    };
  }
}
