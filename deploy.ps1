# Preguntar por el mensaje para el historial de cambios
$mensaje = Read-Host -Prompt "Describe los cambios (para GitHub)"

# Si no escribes nada, usa un mensaje por defecto
if ([string]::IsNullOrWhiteSpace($mensaje)) {
    $mensaje = "Actualización automática del sitio"
}

Write-Host "`n🚀 PASO 1: Guardando en la Nube (GitHub)..." -ForegroundColor Cyan
git add .
git commit -m "$mensaje"
git push

# Verificar si Git falló
if ($LASTEXITCODE -ne 0) {
    Write-Error "Hubo un problema con Git. Deteniendo."
    exit
}

Write-Host "`n🔨 PASO 2: Construyendo el sitio (Build)..." -ForegroundColor Cyan
npm run build

# Verificar si el Build falló
if ($LASTEXITCODE -ne 0) {
    Write-Error "El build falló. No se subirá nada."
    exit
}

Write-Host "`n📤 PASO 3: Subiendo al Servidor (Deploy)..." -ForegroundColor Cyan
scp -r dist/* ssh.rha.lat:/home/bielo/website

Write-Host "`n✅ ¡LISTO! Tu sitio está actualizado en https://rha.lat" -ForegroundColor Green
