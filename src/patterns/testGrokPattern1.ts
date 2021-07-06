export const TestGrokPattern1 = [
    {
        "name":  "SYSLOGHOST",
        "grok":  "%{IPORHOST}"
    },
    {
        "name":  "SYSLOGFACILITY",
        "grok":  "<%{NONNEGINT:facility}.%{NONNEGINT:priority}>"
    },
    {
        "name":  "HTTPDATE",
        "grok":  "%{MONTHDAY}/%{MONTH}/%{YEAR}:%{TIME} %{INT}"
    },
    {
        "name":  "QS",
        "grok":  "%{QUOTEDSTRING}"
    },
    {
        "name":  "SYSLOGBASE",
        "grok":  "%{SYSLOGTIMESTAMP:timestamp} (?:%{SYSLOGFACILITY} )?%{SYSLOGHOST:logsource} %{SYSLOGPROG}:"
    },
    {
        "name":  "COMMONAPACHELOG",
        "grok":  "%{IPORHOST:clientip} %{USER:ident} %{USER:auth} \\[%{HTTPDATE:timestamp}\\] \"(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion})?|%{DATA:rawrequest})\" %{NUMBER:response} (?:%{NUMBER:bytes}|-)"
    },
    {
        "name":  "COMBINEDAPACHELOG",
        "grok":  "%{COMMONAPACHELOG} %{QS:referrer} %{QS:agent}"
    },
    {
        "name":  "LOGLEVEL",
        "grok":  "([A-a]lert|ALERT|[T|t]race|TRACE|[D|d]ebug|DEBUG|[N|n]otice|NOTICE|[I|i]nfo|INFO|[W|w]arn?(?:ing)?|WARN?(?:ING)?|[E|e]rr?(?:or)?|ERR?(?:OR)?|[C|c]rit?(?:ical)?|CRIT?(?:ICAL)?|[F|f]atal|FATAL|[S|s]evere|SEVERE|EMERG(?:ENCY)?|[Ee]merg(?:ency)?)"
    }
]