$ffmpeg = "C:\Users\Lenovo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"

$cr2Files = Get-ChildItem -Path "images" -Filter "*.CR2"
$success = 0

foreach ($file in $cr2Files) {
    $output = "images\" + $file.BaseName + ".jpg"
    
    # Try to extract embedded JPEG from CR2 (Canon RAW files contain a full-res JPEG preview)
    # Method: read as raw bytes and find JPEG signature
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    
    # JPEG starts with FF D8 FF
    $jpegStart = -1
    $jpegEnd = -1
    
    for ($i = 0; $i -lt $bytes.Length - 3; $i++) {
        if ($bytes[$i] -eq 0xFF -and $bytes[$i+1] -eq 0xD8 -and $bytes[$i+2] -eq 0xFF) {
            if ($jpegStart -eq -1) {
                $jpegStart = $i
            }
        }
        # JPEG ends with FF D9
        if ($jpegStart -ne -1 -and $bytes[$i] -eq 0xFF -and $bytes[$i+1] -eq 0xD9) {
            $jpegEnd = $i + 2
            # Only take if it's a large JPEG (>500KB = full-res preview)
            if (($jpegEnd - $jpegStart) -gt 500000) {
                break
            } else {
                # Small JPEG (thumbnail), keep looking
                $jpegStart = -1
                $jpegEnd = -1
            }
        }
    }
    
    if ($jpegStart -ne -1 -and $jpegEnd -ne -1) {
        $jpegBytes = $bytes[$jpegStart..($jpegEnd-1)]
        [System.IO.File]::WriteAllBytes($output, $jpegBytes)
        $size = [math]::Round($jpegBytes.Length / 1024)
        Write-Host "OK: $($file.Name) -> $output ($size KB)" -ForegroundColor Green
        $success++
    } else {
        Write-Host "NOT FOUND: $($file.Name)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Extracted $success / $($cr2Files.Count) files"
