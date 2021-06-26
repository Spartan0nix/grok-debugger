$PATH = "C:\Users\defaultuser0\WebDev\VUE\__Projet\grok-debugger\public\patterns\grokPattern.txt"
$out_file = "C:\Users\defaultuser0\WebDev\VUE\__Projet\grok-debugger\public\patterns\grokPattern.json"
$file = Get-Content -Path $PATH -Encoding Default
$patternToJson = @()

foreach ( $pattern in $file ) {
    $split = $pattern.split(' ')
    $name = $split[0]
    $grok = $split[1..$split.length] -join " "

    $patternToJson += [PSCustomObject]@{
        "name" = $name
        "grok" = $grok
    }
}

$patternToJson | ConvertTo-Json | Out-File $out_file

