/**
 * One-off: build de/datenschutzerklaerung.md from official SwissAnwalt template text.
 * Run: node scripts/generate-datenschutz-de.mjs
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../src/content/pages/de/datenschutzerklaerung.md');

const body = `## Datenschutzerklärung

Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:

**Schweizerische Shorinji Kempo Föderation**  
Marco Pellegrino  
4045 Basel

E-Mail: [marco.pellegrino@shorinjikempo.ch](mailto:marco.pellegrino@shorinjikempo.ch)  
WebSite: [https://shorinjikempo.ch/](https://shorinjikempo.ch/)

## Allgemeiner Hinweis

Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

Durch die Nutzung dieser WebSite erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese WebSite kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.

## Bearbeitung von Personendaten

Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Eine betroffene Person ist eine Person, über die Personendaten bearbeitet werden. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von Personendaten.

Wir bearbeiten Personendaten im Einklang mit dem schweizerischen Datenschutzrecht. Im Übrigen bearbeiten wir – soweit und sofern die EU-DSGVO anwendbar ist – Personendaten gemäss folgenden Rechtsgrundlagen im Zusammenhang mit Art. 6 Abs. 1 DSGVO:

- lit. a) Bearbeitung von Personendaten mit Einwilligung der betroffenen Person.
- lit. b) Bearbeitung von Personendaten zur Erfüllung eines Vertrages mit der betroffenen Person sowie zur Durchführung entsprechender vorvertraglicher Massnahmen.
- lit. c) Bearbeitung von Personendaten zur Erfüllung einer rechtlichen Verpflichtung, der wir gemäss allenfalls anwendbarem Recht der EU oder gemäss allenfalls anwendbarem Recht eines Landes, in dem die DSGVO ganz oder teilweise anwendbar ist, unterliegen.
- lit. d) Bearbeitung von Personendaten um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen.
- lit. f) Bearbeitung von Personendaten um die berechtigten Interessen von uns oder von Dritten zu wahren, sofern nicht die Grundfreiheiten und Grundrechte sowie Interessen der betroffenen Person überwiegen. Berechtigte Interessen sind insbesondere unser betriebswirtschaftliches Interesse, unsere Website bereitstellen zu können, die Informationssicherheit, die Durchsetzung von eigenen rechtlichen Ansprüchen und die Einhaltung von schweizerischem Recht.

Wir bearbeiten Personendaten für jene Dauer, die für den jeweiligen Zweck oder die jeweiligen Zwecke erforderlich ist. Bei länger dauernden Aufbewahrungspflichten aufgrund von gesetzlichen und sonstigen Pflichten, denen wir unterliegen, schränken wir die Bearbeitung entsprechend ein.

## Datenschutzerklärung für Cookies

Diese WebSite verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung gespeichert und können bei einem erneuten Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von Cookies verweigert.

Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite [http://www.aboutads.info/choices/](http://www.aboutads.info/choices/) oder die EU-Seite [http://www.youronlinechoices.com/](http://www.youronlinechoices.com/) erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.

## Datenschutzerklärung für SSL-/TLS-Verschlüsselung

Diese WebSite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.

## Datenübertragungssicherheit (ohne SSL)

Bitte beachten Sie, dass Daten, die über ein offenes Netz wie das Internet oder einen E-Mail-Dienst ohne SSL-Verschlüsselung übermittelt werden, für jedermann einsehbar sind. Eine unverschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers "http://" anzeigt und kein Schloss-Symbol in Ihrer Browserzeile angezeigt wird. Informationen die über das Internet übertragen werden und online empfangene Inhalte, können unter Umständen über Netze von Drittanbietern übermittelt werden. Wir können die Vertraulichkeit von Mitteilungen oder Unterlagen, die über solche offenen Netze oder Netze von Drittanbietern übermittelt werden, nicht garantieren.

Wenn Sie über ein offenes Netz oder Netze von Drittanbietern personenbezogene Informationen bekannt geben, sollten Sie sich der Tatsache bewusst sein, dass Ihre Daten verloren gehen oder Dritte potenziell auf diese Informationen zugreifen und folglich die Daten ohne Ihre Zustimmung sammeln und nutzen können. Zwar werden in vielen Fällen die einzelnen Datenpakete verschlüsselt übermittelt, nicht aber die Namen des Absenders und des Empfängers. Selbst wenn der Absender und der Empfänger im gleichen Land wohnen, erfolgt die Datenübermittlung über solche Netze häufig und ohne Kontrollen auch über Drittstaaten, d.h. auch über Länder, die nicht das gleiche Datenschutzniveau bieten wie Ihr Domizilland. Wir übernehmen für die Sicherheit Ihrer Daten während der Übermittlung über das Internet keine Verantwortung und lehnen jede Haftung für mittelbare und unmittelbare Verluste ab. Wir bitten Sie, andere Kommunikationsmittel zu benutzen, sollten Sie dies aus Gründen der Sicherheit für notwendig oder vernünftig erachten.

Trotz umfangreicher technischer und organisatorischer Sicherungsvorkehrungen, können möglicherweise Daten verloren gehen oder von Unbefugten abgefangen und/oder manipuliert werden. Wir treffen soweit möglich geeignete technische und organisatorische Sicherheitsmassnahmen, um dies innerhalb unseres Systems zu verhindern. Ihr Computer befindet sich indessen ausserhalb des von uns kontrollierbaren Sicherheitsbereichs. Es obliegt Ihnen als Benutzer, sich über die erforderlichen Sicherheitsvorkehrungen zu informieren und diesbezüglich geeignete Massnahmen zu treffen. Als Website-Betreiber haften wir keinesfalls für Schäden, die Ihnen aus Datenverlust oder -manipulation entstehen können.

Daten welche Sie in Online-Formularen angeben, können zwecks Auftragsabwicklung an beauftragte Dritte weitergegeben und von diesen eingesehen und allenfalls bearbeitet werden.

## Datenschutzerklärung für Server-Log-Files

Der Provider dieser WebSite erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:

- Browsertyp und Browserversion
- verwendetes Betriebssystem
- Referrer URL
- Hostname des zugreifenden Rechners
- Uhrzeit der Serveranfrage

Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zuprüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.

## Dienste von Dritten

Diese WebSite verwenden allenfalls Google Maps für das Einbetten von Karten, Google Invisible reCAPTCHA für den Schutz gegen Bots und Spam sowie YouTube für das Einbetten von Videos.

Diese Dienste der amerikanischen Google LLC verwenden unter anderem Cookies und infolgedessen werden Daten an Google in den USA übertragen, wobei wir davon ausgehen, dass in diesem Rahmen kein personenbezogenes Tracking allein durch die Nutzung unserer Website stattfindet.

Google hat sich verpflichtet, einen angemessenen Datenschutz gemäss dem amerikanisch-europäischen und dem amerikanisch-schweizerischen Privacy Shield zu gewährleisten.

Weitere Informationen finden sich in der [Datenschutzerklärung von Google](https://policies.google.com/privacy?hl=de).

## Datenschutzerklärung für Kontaktformular

Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

## Datenschutzerklärung für Newsletterdaten

Wenn Sie den auf dieser WebSite angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.

Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den "Austragen"-Link im Newsletter.

## Datenschutzerklärung für Kommentarfunktion auf dieser Webseite

Für die Kommentarfunktion auf dieser WebSite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gewählte Nutzername gespeichert.

### Speicherung der IP Adresse

Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.

### Abonnieren von Kommentaren

Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können diese Funktion jederzeit über einen Link in den Info-Mails abbestellen.

## Datenschutzerklärung für Recht auf Auskunft, Löschung, Sperrung

Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.

## Datenschutzerklärung für Widerspruch Werbe-Mails

Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.

## Kostenpflichtige Leistungen

Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung resp. Ihren Auftrag ausführen zu können. Wir speichern diese Daten in unseren Systemen, bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind.
`;

writeFileSync(out, `---
lang: de
routeSlug: datenschutzerklaerung
title: Datenschutzerklärung
---

${body}`, 'utf8');
console.log('Wrote', out, '— partial (part 1); run part 2 script next');
