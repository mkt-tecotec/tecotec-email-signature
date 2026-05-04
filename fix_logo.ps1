Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('public\images\icons\Logo-Trimos.png')
$bmp = new-object System.Drawing.Bitmap($img)

$minX = $bmp.Width; $minY = $bmp.Height; $maxX = 0; $maxY = 0;
for($y=0; $y -lt $bmp.Height; $y++) {
    for($x=0; $x -lt $bmp.Width; $x++) {
        if ($bmp.GetPixel($x, $y).A -gt 5) {
            if ($x -lt $minX) { $minX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$padding = 20
$minX = [Math]::Max(0, $minX - $padding)
$minY = [Math]::Max(0, $minY - $padding)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + $padding)
$maxY = [Math]::Min($bmp.Height - 1, $maxY + $padding)

$cropRect = New-Object System.Drawing.Rectangle($minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1))
$croppedBmp = $bmp.Clone($cropRect, $bmp.PixelFormat)

for($y=0; $y -lt $croppedBmp.Height; $y++) {
    for($x=0; $x -lt $croppedBmp.Width; $x++) {
        $c = $croppedBmp.GetPixel($x, $y)
        if ($c.A -gt 0 -and $c.R -lt 150 -and $c.G -lt 150 -and $c.B -lt 150) {
            $newC = [System.Drawing.Color]::FromArgb($c.A, 255, 255, 255)
            $croppedBmp.SetPixel($x, $y, $newC)
        }
    }
}

$img.Dispose()
$croppedBmp.Save('public\images\icons\Logo-Trimos.png', [System.Drawing.Imaging.ImageFormat]::Png)
$croppedBmp.Dispose()
$bmp.Dispose()
Write-Output "Image cropped and text inverted to white."
