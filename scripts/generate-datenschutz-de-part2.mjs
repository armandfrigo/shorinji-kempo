import { appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../src/content/pages/de/datenschutzerklaerung.md');

const part2 = `
## Verwendung von Google Maps

Diese WebSite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie [den Google-Datenschutzhinweisen](http://www.google.com/privacypolicy.html) entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.

Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten [finden Sie hier](http://www.dataliberation.org/).

## Google AdWords

Diese WebSite nutzt das Google Conversion-Tracking. Sind Sie über eine von Google geschaltete Anzeige auf unsere WebSite gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.

Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür erforderliche Setzen eines Cookies ablehnen – etwa per Browser-Einstellung, die das automatische Setzen von Cookies generell deaktiviert oder Ihren Browser so einstellen, dass Cookies von der Domain „googleleadservices.com“ blockiert werden.

Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen. Haben Sie alle Ihre Cookies im Browser gelöscht, müssen Sie das jeweilige Opt-out Cookie erneut setzen.

## Einsatz von Google Remarketing

Diese WebSite verwendet die Remarketing-Funktion der Google Inc. Die Funktion dient dazu, Webseitenbesuchern innerhalb des Google-Werbenetzwerks interessenbezogene Werbeanzeigen zu präsentieren. Im Browser des Webseitenbesuchers wird ein sog. „Cookie“ gespeichert, der es ermöglicht, den Besucher wiederzuerkennen, wenn dieser Webseiten aufruft, die dem Werbenetzwerk von Google angehören. Auf diesen Seiten können dem Besucher Werbeanzeigen präsentiert werden, die sich auf Inhalte beziehen, die der Besucher zuvor auf Webseiten aufgerufen hat, die die Remarketing Funktion von Google verwenden.

Nach eigenen Angaben erhebt Google bei diesem Vorgang keine personenbezogenen Daten. Sollten Sie die Funktion Remarketing von Google dennoch nicht wünschen, können Sie diese grundsätzlich deaktivieren, indem Sie die entsprechenden Einstellungen unter [http://www.google.com/settings/ads](http://www.google.com/settings/ads) vornehmen. Alternativ können Sie den Einsatz von Cookies für interessenbezogene Werbung über die Werbenetzwerkinitiative deaktivieren, indem Sie den Anweisungen unter [http://www.networkadvertising.org/managing/opt_out.asp](http://www.networkadvertising.org/managing/opt_out.asp) folgen.

## Verwendung von Google reCAPTCHA

Diese WebSite verwendet den Dienst reCAPTCHA der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google“). Die Abfrage dient dem Zweck der Unterscheidung, ob die Eingabe durch einen Menschen oder durch automatisierte, maschinelle Verarbeitung erfolgt. Die Abfrage schliesst den Versand der IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google ein. Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort weiter verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung dieses Dienstes auszuwerten. Die im Rahmen von reCaptcha von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Ihre Daten werden dabei gegebenenfalls auch in die USA übermittelt. Für Datenübermittlungen in die USA ist ein Angemessenheitsbeschluss der Europäischen Kommission, das "Privacy Shield", vorhanden. Google nimmt am "Privacy Shield" teil und hat sich den Vorgaben unterworfen. Mit Betätigen der Abfrage willigen Sie in die Verarbeitung Ihrer Daten ein. Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. a DSGVO mit Ihrer Einwilligung. Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.

Nähere Informationen zu Google reCAPTCHA sowie die dazugehörige Datenschutzerklärung finden Sie unter: [https://www.google.com/privacy/ads/](https://www.google.com/privacy/ads/)

## Datenschutzerklärung für Google Analytics

Diese WebSite verwendet Google Analytics, einen Webanalysedienst von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Deaktivierung von Google Analytiscs stellt Google unter [https://tools.google.com/dlpage/gaoptout?hl=de](https://tools.google.com/dlpage/gaoptout?hl=de) ein Browser-Plug-In zur Verfügung. Google Analytics verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern. Diese ermöglichen eine Analyse der Nutzung unseres Websiteangebotes durch Google. Die durch den Cookie erfassten Informationen über die Nutzung unserer Seiten (einschliesslich Ihrer IP-Adresse) werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir weisen darauf hin, dass auf dieser Website Google Analytics um den Code „gat._anonymizeIp();“ erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten. Ist die Anonymisierung aktiv, kürzt Google IP-Adressen innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum, weswegen keine Rückschlüsse auf Ihre Identität möglich sind. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Google beachtet die Datenschutzbestimmungen des „Privacy Shield“-Abkommens und ist beim „Privacy Shield“-Programm des US-Handelsministeriums registriert und nutzt die gesammelten Informationen, um die Nutzung unserer Websites auszuwerten, Berichte für uns diesbezüglich zu verfassen und andere diesbezügliche Dienstleistungen an uns zu erbringen. Mehr erfahren Sie unter [https://support.google.com/analytics/answer/6004245?hl=de](https://support.google.com/analytics/answer/6004245?hl=de).

## Datenschutzerklärung für Google AdSense

Diese WebSite benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. GoogleAdSense verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglicht. Google AdSense verwendet auch so genannte Web Beacons (unsichtbare Grafiken). Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden. Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google in den USA übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weiter gegeben werden. Google wird Ihre IP-Adresse jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.

## Datenschutzerklärung für Google +1

Diese WebSite verwendet Social-Media-Funktionen von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Bei Aufruf unserer Seiten mit Google-Plug-Ins wird eine Verbindung zwischen Ihrem Browser und den Servern von Google aufgebaut. Dabei werden bereits Daten an Google übertragen. Besitzen Sie einen Google-Account, können diese Daten damit verknüpft werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Google-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Google aus. Interaktionen, insbesondere das Nutzen einer Kommentarfunktion oder das Anklicken eines „+1“- oder „Teilen“-Buttons werden ebenfalls an Google weitergegeben. Mehr erfahren Sie unter [https://www.google.de/intl/de/policies/privacy](https://www.google.de/intl/de/policies/privacy).

## Datenschutzerklärung für die Nutzung von Google Web Fonts

Diese WebSite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.

Weitere Informationen zu Google Web Fonts finden Sie unter [https://developers.google.com/fonts/faq](https://developers.google.com/fonts/faq) und in der Datenschutzerklärung von Google: [https://www.google.com/policies/privacy/](https://www.google.com/policies/privacy/)

## Google Tag Manager

Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über eine Oberfläche verwalten können und so z.B. Google Analytics sowie andere Google-Marketing-Dienste in unser Onlineangebot einbinden können. Der Tag Manager selbst, welcher die Tags implementiert, verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung der personenbezogenen Daten der Nutzer wird auf die folgenden Angaben zu den Google-Diensten verwiesen. Nutzungsrichtlinien: [https://www.google.com/intl/de/tagmanager/use-policy.html](https://www.google.com/intl/de/tagmanager/use-policy.html).

## Datenschutzerklärung für Facebook

Diese WebSite verwendet Funktionen von Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA . Bei Aufruf unserer Seiten mit Facebook-Plug-Ins wird eine Verbindung zwischen Ihrem Browser und den Servern von Facebook aufgebaut. Dabei werden bereits Daten an Facebook übertragen. Besitzen Sie einen Facebook-Account, können diese Daten damit verknüpft werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Facebook-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Facebook aus. Interaktionen, insbesondere das Nutzen einer Kommentarfunktion oder das Anklicken eines „Like“- oder „Teilen“-Buttons werden ebenfalls an Facebook weitergegeben. Mehr erfahren Sie unter [https://de-de.facebook.com/about/privacy](https://de-de.facebook.com/about/privacy).

## Datenschutzerklärung für Twitter

Diese WebSite verwendet Funktionen von Twitter, Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA. Bei Aufruf unserer Seiten mit Twitter-Plug-Ins wird eine Verbindung zwischen Ihrem Browser und den Servern von Twitter aufgebaut. Dabei werden bereits Daten an Twitter übertragen. Besitzen Sie einen Twitter-Account, können diese Daten damit verknüpft werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Twitter-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Twitter aus. Interaktionen, insbesondere das Anklicken eines „Re-Tweet“-Buttons werden ebenfalls an Twitter weitergegeben. Mehr erfahren Sie unter [https://twitter.com/privacy](https://twitter.com/privacy).

## Datenschutzerklärung für Instagram

Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA integriert. Wenn Sie in Ihrem Instagram-Account eingeloggt sind können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.

Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: [https://instagram.com/about/legal/privacy/](https://instagram.com/about/legal/privacy/)

## Datenschutzerklärung für LinkedIn

Diese WebSite nutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA. Bei jedem Abruf einer unserer Seiten, die Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn aufbaut. LinkedIn wird darüber informiert, dass Sie unsere Internetseiten mit Ihrer IP-Adresse besucht haben. Wenn Sie den "Recommend-Button" von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf unserer Internetseite Ihnen und Ihrem Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.

Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von LinkedIn unter: [https://www.linkedin.com/legal/privacy-policy](https://www.linkedin.com/legal/privacy-policy)

## Datenschutzerklärung für Pinterest

Auf dieser WebSite verwenden wir Social Plugins des sozialen Netzwerkes Pinterest, das von der Pinterest Inc., 808 Brannan Street San Francisco, CA 94103-490, USA ("Pinterest") betrieben wird. Wenn Sie eine Seite aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Pinterest her. Das Plugin übermittelt dabei Protokolldaten an den Server von Pinterest in die USA. Diese Protokolldaten enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Pinterest- Funktionen enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise von Pinterest sowie Cookies.

Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und Nutzung der Daten durch Pinterest sowie Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den den Datenschutzhinweisen von Pinterest: [https://about.pinterest.com/de/privacy-policy](https://about.pinterest.com/de/privacy-policy)

## Datenschutzerklärung für SoundCloud

Auf dieser WebSite können Plugins des sozialen Netzwerks SoundCloud (SoundCloud Limited, Berners House, 47-48 Berners Street, London W1T 3NF, Großbritannien.) integriert sein. Die SoundCloud-Plugins erkennen Sie an dem SoundCloud-Logo auf den betroffenen Seiten.

Wenn Sie unsere Seiten besuchen, wird nach Aktivierung des Plugin eine direkte Verbindung zwischen Ihrem Browser und dem SoundCloud-Server hergestellt. SoundCloud erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den "Like-Button" oder "Share- Button" anklicken während Sie in Ihrem SoundCloud- Benutzerkonto eingeloggt sind, können Sie die Inhalte unserer Seiten mit Ihrem SoundCloud-Profil verlinken und/oder teilen. Dadurch kann SoundCloud Ihrem Benutzerkonto den Besuch unserer Seiten zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch SoundCloud erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von SoundCloud unter: [https://soundcloud.com/pages/privacy](https://soundcloud.com/pages/privacy)

Wenn Sie nicht wünschen, dass Soundcloud den Besuch unserer Seiten Ihrem SoundCloud- Benutzerkonto zuordnet, loggen Sie sich bitte aus Ihrem SoundCloud-Benutzerkonto aus bevor Sie Inhalte des SoundCloud-Plugins aktivieren.

## Datenschutzerklärung für Tumblr

Diese WebSite nutzen Schaltflächen des Dienstes Tumblr. Anbieter ist die Tumblr, Inc., 35 East 21st St, 10th Floor, New York, NY 10010, USA. Diese Schaltflächen ermöglichen es Ihnen, einen Beitrag oder eine Seite bei Tumblr zu teilen oder dem Anbieter bei Tumblr zu folgen. Wenn Sie eine unserer Webseiten mit Tumblr-Button aufrufen, baut der Browser eine direkte Verbindung mit den Servern von Tumblr auf. Wir haben keinen Einfluss auf den Umfang der Daten, die Tumblr mit Hilfe dieses Plugins erhebt und übermittelt. Nach aktuellem Stand werden die IP-Adresse des Nutzers sowie die URL der jeweiligen Webseite übermittelt.

Weitere Informationen hierzu finden sich in der Datenschutzerklärung von Tumblr unter: [https://www.tumblr.com/policy/de/privacy](https://www.tumblr.com/policy/de/privacy).
`;

appendFileSync(out, part2, 'utf8');
console.log('Appended part 2');
