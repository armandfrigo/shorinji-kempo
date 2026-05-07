# === Crée les pages pour les autres langues ===
$base = "D:\Data\projets\shorinjikempo"   # ← CHANGE CE CHEMIN avec ton vrai chemin !

$pages = @("index", "shorinji-kempo", "dojo", "aktuell", "links")

foreach ($page in $pages) {
    # Français
    $frPath = "$base\src\pages\fr\$page.astro"
    @"
---
import Layout from '../../layouts/Layout.astro';
---
<Layout lang='fr'>
    <h1>Page $page - Français</h1>
    <p>Cette page est en cours de traduction...</p>
</Layout>
"@ | Out-File -FilePath $frPath -Encoding UTF8

    # Anglais
    $enPath = "$base\src\pages\en\$page.astro"
    @"
---
import Layout from '../../layouts/Layout.astro';
---
<Layout lang='en'>
    <h1>$page Page - English</h1>
    <p>This page is under translation...</p>
</Layout>
"@ | Out-File -FilePath $enPath -Encoding UTF8

    # Italien
    $itPath = "$base\src\pages\it\$page.astro"
    @"
---
import Layout from '../../layouts/Layout.astro';
---
<Layout lang='it'>
    <h1>Pagina $page - Italiano</h1>
    <p>Questa pagina è in fase di traduzione...</p>
</Layout>
"@ | Out-File -FilePath $itPath -Encoding UTF8
}

Write-Host "Toutes les pages ont été créées pour fr, en et it !" -ForegroundColor Green