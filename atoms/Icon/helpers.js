const ICONS_ASSETS_PATH = '/icons/';

const iconMap = {
  rigthArrow: 'rigth-arrow',
  angleDownSolid: 'angle-down-solid',
};

const iconSize = {
  sm: 16,
  md: 26,
  lg: 30,
  xl: 40,
};

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}${iconMap[type]}.svg`;

// eslint-disable-next-line no-unused-vars
export const mapSize = (size) => iconSize[size];
