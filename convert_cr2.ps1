$ffmpeg = "C:\Users\Lenovo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"

$cr2Files = Get-ChildItem -Path "images" -Filter "*.CR2"
$success = 0
$failed = 0

foreach ($file in $cr2Files) {
    $output = "images\" + $file.BaseName + ".jpg"
    Write-Host "Converting: $($file.Name)" -NoNewline
    & $ffmpeg -y -i $file.FullName -q:v 2 $output 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host " -> OK" -ForegroundColor Green
        $success++
    } else {
        Write-Host " -> FAILED" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "Done! Success: $success | Failed: $failed"
