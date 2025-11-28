# --- Script de Despliegue Automático RHA ---

$mensaje = Read-Host -Prompt "Describe los cambios (para GitHub)"

if ([string]::IsNullOrWhiteSpace($mensaje)) {
    $mensaje = "Actualización automática"
}

Write-Host "`n[1/3] Guardando en la Nube (GitHub)..." -ForegroundColor Cyan
git add .
git commit -m "$mensaje"
git push

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error en Git. Continuando..." -ForegroundColor Yellow
}

Write-Host "`n[2/3] Construyendo el sitio (Build)..." -ForegroundColor Cyan
# Usamos cmd /c para asegurar compatibilidad con npm en PowerShell
cmd /c npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "El build falló. Deteniendo."
    exit
}

Write-Host "`n[3/3] Subiendo al Servidor (Deploy)..." -ForegroundColor Cyan
scp -r dist/* ssh.rha.lat:/home/bielo/website

Write-Host "`n[OK] Sitio actualizado en https://rha.lat" -ForegroundColor Green