$ffmpeg = "C:\Users\Lenovo\AppData\Local\CapCut\Apps\9.2.0.3930\ffmpeg.exe"

# Test with first file to see the actual error
$testFile = Get-ChildItem "images\*.CR2" | Select-Object -First 1
Write-Host "Testing with: $($testFile.FullName)"
& $ffmpeg -y -i $testFile.FullName -q:v 2 "images\test_output.jpg"
