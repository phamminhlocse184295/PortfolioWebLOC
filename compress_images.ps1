$ffmpeg = "C:\Users\Lenovo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"

$jpgFiles = Get-ChildItem -Path "images" -Include "*.jpg","*.png" -Recurse | Where-Object { $_.Name -ne "LOC.png" }

$totalBefore = 0
$totalAfter = 0

foreach ($file in $jpgFiles) {
    $before = $file.Length
    $totalBefore += $before
    $temp = $file.FullName + ".tmp.jpg"

    # Compress: scale down to max 1920px wide, quality 82
    & $ffmpeg -y -i $file.FullName -vf "scale='min(1920,iw)':-2" -q:v 4 $temp 2>$null

    if ($LASTEXITCODE -eq 0 -and (Test-Path $temp)) {
        $after = (Get-Item $temp).Length
        if ($after -lt $before) {
            Remove-Item $file.FullName
            Rename-Item $temp $file.FullName
            $totalAfter += $after
            $saved = [math]::Round(($before - $after) / 1KB)
            Write-Host "OK $($file.Name): $([math]::Round($before/1KB))KB -> $([math]::Round($after/1KB))KB (saved ${saved}KB)" -ForegroundColor Green
        } else {
            Remove-Item $temp
            $totalAfter += $before
            Write-Host "SKIP $($file.Name): already optimized" -ForegroundColor Yellow
        }
    } else {
        if (Test-Path $temp) { Remove-Item $temp }
        $totalAfter += $before
        Write-Host "FAIL $($file.Name)" -ForegroundColor Red
    }
}

$savedTotal = [math]::Round(($totalBefore - $totalAfter) / 1MB, 1)
Write-Host ""
Write-Host "Total saved: ${savedTotal} MB" -ForegroundColor Cyan
