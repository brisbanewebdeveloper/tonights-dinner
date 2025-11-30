//
// Load Font Awesome
//
// - https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
// - Putting the followings at "index.tsx" does not seem to load the font files
// - It seems to work if it puts "import './LoadFa'
// - It may also work if app imports the SCSS Files in "App.scss"
//
import { library } from '@fortawesome/fontawesome-svg-core';
// Import only the specific icons needed instead of the entire icon set
import { faRecycle } from '@fortawesome/free-solid-svg-icons';

import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core';

// Add only the icons that are used in the app
library.add(faRecycle);

export function findIcon (iconLookup: IconLookup): IconDefinition {
  return findIconDefinition(iconLookup);
};

const libs = {
  findIcon,
};

export default libs;
