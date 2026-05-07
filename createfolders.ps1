# Script pour créer la structure Astro multi-langues
$basePath = "D:\Data\projets\shorinjikempo"

# À modifier avec ton chemin réel
# Exemple : $basePath = "D:\Projects\shorinjikempo"

# Création des dossiers
$folders = @(
    "$basePath\src\i18n\translations",
    "$basePath\src\components",
    "$basePath\src\layouts",
    "$basePath\src\pages\fr",
    "$basePath\src\pages\en",
    "$basePath\src\pages\it",
    "$basePath\public\images"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

Write-Host "Structure de dossiers créée avec succès !" -ForegroundColor Green
Write-Host "Emplacement : $basePath" -ForegroundColor Cyan