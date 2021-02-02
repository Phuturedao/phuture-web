import i18n from 'i18n-js'
import memoize from 'lodash.memoize'

import en from 'assets/locales/en.json'

declare global {
  interface String {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    localized(params?: any): string
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
String.prototype.localized = function (params: any = {}): string {
  return LocalizationService.getInstance().translate(this.toString(), params)
}

interface LocalizedStringsForKey {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [locale: string]: () => any
}

export class LocalizationService {
  static getInstance(): LocalizationService {
    if (!LocalizationService.instance) {
      LocalizationService.instance = new LocalizationService()
    }
    return LocalizationService.instance
  }

  private static instance: LocalizationService

  readonly translationGetters: LocalizedStringsForKey = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => en,
  }

  readonly translate = memoize(
    (key: string, config) => i18n.t(key, config),
    (key: string, config) => (config ? key + JSON.stringify(config) : key),
  )

  private listeners: (() => void)[] = []

  private constructor() {
    this.setI18nConfig()
  }

  addOnLocaleChangedListener(listener: () => void): void {
    this.listeners.push(listener)
  }

  removeOnLocaleChangedListener(listener: () => void): void {
    const index = this.listeners.indexOf(listener)
    if (index !== -1) {
      this.listeners.splice(index)
    }
  }

  private getLang(): string {
    return window.navigator.language.split('-')[0]
  }

  private setI18nConfig(): void {
    // Pluralization rules:
    // http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html

    i18n.pluralization.ru = (count: number): string[] => {
      if (count % 10 === 1 && count % 100 !== 11) {
        return ['one', 'other']
      }
      if ([2, 3, 4].indexOf(count % 10) >= 0 && [12, 13, 14].indexOf(count % 100) < 0) {
        return ['few', 'other']
      }
      return ['other']
    }

    // fallback if no available language fits
    const fallback = { languageTag: 'en' || this.getLang(), isRTL: false }
    const { languageTag } = fallback

    // // clear translation cache
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.translate.cache.clear!()

    // // set i18n-js config
    i18n.translations = {
      [languageTag]: this.translationGetters[languageTag](),
    }
    i18n.locale = languageTag
  }
}
