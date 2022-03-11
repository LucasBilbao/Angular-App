export interface ContextMenuItem {
  id: string;
  iconCode: string;
  hasIcon: boolean;
}

export const styleFormat: ContextMenuItem[] = [
  {
    id: 'bold',
    iconCode: 'format_bold',
    hasIcon: true,
  },
  {
    id: 'italic',
    iconCode: 'format_italic',
    hasIcon: true,
  },
  {
    id: 'strikethrough',
    iconCode: 'format_strikethrough',
    hasIcon: true,
  },
  {
    id: 'underline',
    iconCode: 'format_underlined',
    hasIcon: true,
  },
  {
    id: 'code',
    iconCode: 'code',
    hasIcon: true,
  },
];

export const fontFormat: ContextMenuItem[] = [
  {
    id: 'h1',
    iconCode: 'H',
    hasIcon: false,
  },
  {
    id: 'h2',
    iconCode: 'H',
    hasIcon: false,
  },
  {
    id: 'quote',
    iconCode: 'format_quote',
    hasIcon: true,
  },
];
