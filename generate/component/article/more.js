import {more as card} from '../../atom/card/more.js'
import {fmtCompact} from '../../util/fmt-compact.js'
import {fmtPlural} from '../../util/fmt-plural.js'

export function more(section, rest) {
  return card(section.pathname, [
    'See ',
    fmtCompact(rest),
    ' other ',
    fmtPlural(rest, {one: 'article', other: 'articles'})
  ])
}
