/**
 * ContextMenu valrialbles' properties are the context menu's coordinates
 * whether it is active or not
 */
export interface ContextMenu {
  x: number;
  y: number;
  isActive: boolean;
}

/**
 * Create and exprort a default variable of type ContextMenu
 */
export const defaultContextMenu: ContextMenu = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  isActive: false,
};
