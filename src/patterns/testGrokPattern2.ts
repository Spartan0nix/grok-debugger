export const TestGrokPattern2 = [
    {
        "name":  "USERNAME",
        "grok":  "[a-zA-Z0-9._-]+"
    },
    {
        "name":  "USER",
        "grok":  "%{USERNAME}"
    },
    {
        "name":  "INT",
        "grok":  "(?:[+-]?(?:[0-9]+))"
    },
    {
        "name":  "BASE10NUM",
        "grok":  "(?<![0-9.+-])(?>[+-]?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+)))"
    },
    {
        "name":  "NUMBER",
        "grok":  "(?:%{BASE10NUM})"
    },
    {
        "name":  "BASE16NUM",
        "grok":  "(?<![0-9A-Fa-f])(?:[+-]?(?:0x)?(?:[0-9A-Fa-f]+))"
    },
    {
        "name":  "BASE16FLOAT",
        "grok":  "\\b(?<![0-9A-Fa-f.])(?:[+-]?(?:0x)?(?:(?:[0-9A-Fa-f]+(?:\\.[0-9A-Fa-f]*)?)|(?:\\.[0-9A-Fa-f]+)))\\b"
    },
    {
        "name":  "POSINT",
        "grok":  "\\b(?:[1-9][0-9]*)\\b"
    },
    {
        "name":  "NONNEGINT",
        "grok":  "\\b(?:[0-9]+)\\b"
    },
    {
        "name":  "WORD",
        "grok":  "\\b\\w+\\b"
    },
    {
        "name":  "NOTSPACE",
        "grok":  "\\S+"
    },
    {
        "name":  "SPACE",
        "grok":  "\\s*"
    },
    {
        "name":  "DATA",
        "grok":  ".*?"
    },
    {
        "name":  "GREEDYDATA",
        "grok":  ".*"
    },
    {
        "name":  "QUOTEDSTRING",
        "grok":  "(?>(?<!\\\\)(?>\"(?>\\\\.|[^\\\\\"]+)+\"|\"\"|(?>\\'(?>\\\\.|[^\\\\\\']+)+\\')|\\'\\'|(?>`(?>\\\\.|[^\\\\`]+)+`)|``))"
    },
    {
        "name":  "UUID",
        "grok":  "[A-Fa-f0-9]{8}-(?:[A-Fa-f0-9]{4}-){3}[A-Fa-f0-9]{12}"
    },
    {
        "name":  "MAC",
        "grok":  "(?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC})"
    },
    {
        "name":  "CISCOMAC",
        "grok":  "(?:(?:[A-Fa-f0-9]{4}\\.){2}[A-Fa-f0-9]{4})"
    },
    {
        "name":  "WINDOWSMAC",
        "grok":  "(?:(?:[A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2})"
    },
    {
        "name":  "COMMONMAC",
        "grok":  "(?:(?:[A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2})"
    },
    {
        "name":  "IPV6",
        "grok":  "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?"
    },
    {
        "name":  "IPV4",
        "grok":  "(?<![0-9])(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(?![0-9])"
    },
    {
        "name":  "IP",
        "grok":  "(?:%{IPV6}|%{IPV4})"
    },
    {
        "name":  "HOSTNAME",
        "grok":  "\\b(?:[0-9A-Za-z][0-9A-Za-z-]{0,62})(?:\\.(?:[0-9A-Za-z][0-9A-Za-z-]{0,62}))*(\\.?|\\b)"
    },
    {
        "name":  "HOST",
        "grok":  "%{HOSTNAME}"
    },
    {
        "name":  "IPORHOST",
        "grok":  "(?:%{HOSTNAME}|%{IP})"
    },
    {
        "name":  "HOSTPORT",
        "grok":  "(?:%{IPORHOST=~/\\./}:%{POSINT})"
    },
    {
        "name":  "PATH",
        "grok":  "(?:%{UNIXPATH}|%{WINPATH})"
    },
    {
        "name":  "UNIXPATH",
        "grok":  "(?>/(?>[\\w_%!$@:.,-]+|\\\\.)*)+"
    },
    {
        "name":  "TTY",
        "grok":  "(?:/dev/(pts|tty([pq])?)(\\w+)?/?(?:[0-9]+))"
    },
    {
        "name":  "WINPATH",
        "grok":  "(?>[A-Za-z]+:|\\\\)(?:\\\\[^\\\\?*]*)+"
    },
    {
        "name":  "URIPROTO",
        "grok":  "[A-Za-z]+(\\+[A-Za-z+]+)?"
    },
    {
        "name":  "URIHOST",
        "grok":  "%{IPORHOST}(?::%{POSINT:port})?"
    },
    {
        "name":  "URIPATH",
        "grok":  "(?:/[A-Za-z0-9$.+!*\\'(){},~:;=@#%_\\-]*)+"
    },
    {
        "name":  "URIPARAM",
        "grok":  "\\?[A-Za-z0-9$.+!*\\'|(){},~@#%&/=:;_?\\-\\[\\]]*"
    },
    {
        "name":  "URIPATHPARAM",
        "grok":  "%{URIPATH}(?:%{URIPARAM})?"
    },
    {
        "name":  "URI",
        "grok":  "%{URIPROTO}://(?:%{USER}(?::[^@]*)?@)?(?:%{URIHOST})?(?:%{URIPATHPARAM})?"
    },
    {
        "name":  "MONTH",
        "grok":  "\\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\\b"
    },
    {
        "name":  "MONTHNUM",
        "grok":  "(?:0?[1-9]|1[0-2])"
    },
    {
        "name":  "MONTHDAY",
        "grok":  "(?:(?:0[1-9])|(?:[12][0-9])|(?:3[01])|[1-9])"
    },
    {
        "name":  "DAY",
        "grok":  "(?:Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)"
    },
    {
        "name":  "YEAR",
        "grok":  "(?>\\d\\d){1,2}"
    },
    {
        "name":  "HOUR",
        "grok":  "(?:2[0123]|[01]?[0-9])"
    },
    {
        "name":  "MINUTE",
        "grok":  "(?:[0-5][0-9])"
    },
    {
        "name":  "SECOND",
        "grok":  "(?:(?:[0-5][0-9]|60)(?:[:.,][0-9]+)?)"
    },
    {
        "name":  "TIME",
        "grok":  "(?!<[0-9])%{HOUR}:%{MINUTE}(?::%{SECOND})(?![0-9])"
    },
    {
        "name":  "DATE_US",
        "grok":  "%{MONTHNUM}[/-]%{MONTHDAY}[/-]%{YEAR}"
    },
    {
        "name":  "DATE_EU",
        "grok":  "%{MONTHDAY}[./-]%{MONTHNUM}[./-]%{YEAR}"
    },
    {
        "name":  "ISO8601_TIMEZONE",
        "grok":  "(?:Z|[+-]%{HOUR}(?::?%{MINUTE}))"
    },
    {
        "name":  "ISO8601_SECOND",
        "grok":  "(?:%{SECOND}|60)"
    },
    {
        "name":  "TIMESTAMP_ISO8601",
        "grok":  "%{YEAR}-%{MONTHNUM}-%{MONTHDAY}[T ]%{HOUR}:?%{MINUTE}(?::?%{SECOND})?%{ISO8601_TIMEZONE}?"
    },
    {
        "name":  "DATE",
        "grok":  "%{DATE_US}|%{DATE_EU}"
    },
    {
        "name":  "DATESTAMP",
        "grok":  "%{DATE}[- ]%{TIME}"
    },
    {
        "name":  "TZ",
        "grok":  "(?:[PMCE][SD]T|UTC)"
    },
    {
        "name":  "DATESTAMP_RFC822",
        "grok":  "%{DAY} %{MONTH} %{MONTHDAY} %{YEAR} %{TIME} %{TZ}"
    },
    {
        "name":  "DATESTAMP_OTHER",
        "grok":  "%{DAY} %{MONTH} %{MONTHDAY} %{TIME} %{TZ} %{YEAR}"
    },
    {
        "name":  "SYSLOGTIMESTAMP",
        "grok":  "%{MONTH} +%{MONTHDAY} %{TIME}"
    },
    {
        "name":  "PROG",
        "grok":  "(?:[\\w._/%-]+)"
    },
    {
        "name":  "SYSLOGPROG",
        "grok":  "%{PROG:program}(?:\\[%{POSINT:pid}\\])?"
    }
]