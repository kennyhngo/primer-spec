import createSubtheme from './createSubtheme';
import Subtheme from './Subtheme';

import default_theme from './definitions/default.theme';
import bella_theme from './definitions/bella.theme';
import modern_theme from './definitions/modern.theme';
import xcode_dark_theme from './definitions/xcode_dark.theme';
import slack_light_theme from './definitions/slack_light.theme';
import slack_dark_theme from './definitions/slack_dark.theme';

export interface RegisteredSubthemes {
  [name: string]: Subtheme,
}

export const LIGHT_SUBTHEMES: RegisteredSubthemes = {
  'default': createSubtheme('default', default_theme),
  'bella': createSubtheme('bella', bella_theme),
  'modern': createSubtheme('modern', modern_theme),
  'slack-light': createSubtheme('slack-light', slack_light_theme),
};

export const DARK_SUBTHEMES: RegisteredSubthemes = {
  'xcode-dark': createSubtheme('xcode-dark', xcode_dark_theme),
  'slack-dark': createSubtheme('slack-dark', slack_dark_theme),
};

export default {
  ...LIGHT_SUBTHEMES,
  ...DARK_SUBTHEMES,
};
