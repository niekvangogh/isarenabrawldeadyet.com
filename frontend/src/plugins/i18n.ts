import Vue from "vue";
import VueI18n from "vue-i18n";

import { nl, nlDate } from "../localisation/dutch";
import { en, enDate } from "../localisation/english";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.locale,
  fallbackLocale: "en-US",
  messages: { "nl-NL": nl, "en-US": en },
  silentTranslationWarn: true,
  dateTimeFormats: {
    "nl-NL": nlDate,
    "en-US": enDate
  }
});

export { i18n };
