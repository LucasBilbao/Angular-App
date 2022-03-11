export interface ContextMenu {
  x: number;
  y: number;
  isActive: boolean;
}

export const defaultContextMenu: ContextMenu = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  isActive: false,
};
