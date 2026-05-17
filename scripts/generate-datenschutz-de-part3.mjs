import { appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../src/content/pages/de/datenschutzerklaerung.md');

const part3 = `
## Externe Zahlungsdienstleister

Diese WebSite setzt externe Zahlungsdienstleister ein, über deren Plattformen die Nutzer und wir Zahlungstransaktionen vornehmen können. Zum Beispiel über

- [PostFinance](https://www.postfinance.ch/de/detail/rechtliches-barrierefreiheit.html)
- [Visa](https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html)
- [Mastercard](https://www.mastercard.ch/de-ch/datenschutz.html)
- [American Express](https://www.americanexpress.com/de/content/privacy-policy-statement.html)
- [Paypal](https://www.paypal.com/de/webapps/mpp/ua/privacy-full)
- [Bexio AG](https://www.bexio.com/de-CH/datenschutz)
- [Payrexx AG](https://www.payrexx.ch/site/assets/files/2592/datenschutzerklaerung.pdf)
- [Apple Pay](https://support.apple.com/de-ch/ht203027)
- [Stripe](https://stripe.com/ch/privacy)
- [Klarna](https://www.klarna.com/de/datenschutz/)
- [Skrill](https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/)
- [Giropay](https://www.giropay.de/rechtliches/datenschutz-agb/) etc.

Im Rahmen der Erfüllung von Verträgen setzen wir die Zahlungsdienstleister auf Grundlage der schweizerischen Datenschutzverordnung sowie und soweit nötig, des Art. 6 Abs. 1 lit. b. EU-DSGVO ein. Im Übrigen setzen wir externe Zahlungsdienstleister auf Grundlage unserer berechtigten Interessen gem. schweizerischer Datenschutzverordnung sowie und soweit nötig, gem. Art. 6 Abs. 1 lit. f. EU-DSGVO ein, um unseren Nutzern effektive und sichere Zahlungsmöglichkeit zu bieten.

Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie u.a. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen gespeichert. Wir als Betreiber erhalten keinerlei Informationen zu (Bank-) Konto oder Kreditkarte, sondern lediglich Informationen zur Bestätigung (Annahme) oder Ablehnung der Zahlung. Unter Umständen werden die Daten seitens der Zahlungsdienstleister an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und Datenschutzhinweise der Zahlungsdienstleister.

Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb der jeweiligen Website, bzw. Transaktionsapplikationen abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.

## Newsletter - Mailchimp

Der Versand der Newsletter erfolgt mittels des Versanddienstleisters 'MailChimp', einer Newsletterversandplattform des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen des Versanddienstleisters können Sie [hier](https://mailchimp.com/legal/privacy/) einsehen. The Rocket Science Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten ([PrivacyShield](https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active&t=1)). Der Versanddienstleister wird auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO und eines Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S. 1 DSGVO eingesetzt.

Der Versanddienstleister kann die Daten der Empfänger in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke verwenden. Der Versanddienstleister nutzt die Daten unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder um die Daten an Dritte weiterzugeben.

## Datenschutzerklärung für YouTube

Diese WebSite nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem Youtube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.

Wenn Sie in Ihrem YouTube-Account eingeloggt sind ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.

Weitere Informationen zum Umgang von Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: [https://www.google.de/intl/de/policies/privacy](https://www.google.de/intl/de/policies/privacy)

## Datenschutzerklärung für Vimeo

Auf dieser WebSite sind Plugins des Videoportals Vimeo der Vimeo, LLC, 555 West 18th Street, New York, New York 10011, USA eingebunden. Bei jedem Aufruf einer Seite, die ein oder mehrere Vimeo-Videoclips anbietet, wird eine direkte Verbindung zwischen Ihrem Browser und einem Server von Vimeo in den USA hergestellt. Dabei werden Informationen über Ihren Besuch und Ihre IP-Adresse dort gespeichert. Durch Interaktionen mit den Vimeo Plugins (z.B. Klicken des Start-Buttons) werden diese Informationen ebenfalls an Vimeo übermittelt und dort gespeichert. Die Datenschutzerklärung für Vimeo mit näheren Informationen zur Erhebung und Nutzung Ihrer Daten durch Vimeo finden Sie in der [Datenschutzerklärung von Vimeo](http://vimeo.com/privacy).

Wenn Sie ein Vimeo-Benutzerkonto haben und nicht möchten, dass Vimeo über diese Website Daten über Sie sammelt und mit Ihren bei Vimeo gespeicherten Mitgliedsdaten verknüpft, müssen Sie sich vor Ihrem Besuch dieser Website bei Vimeo ausloggen.

Ausserdem ruft Vimeo über einen iFrame, in dem das Video aufgerufen wird, den Tracker Google Analytics auf. Dabei handelt es sich um ein eigenes Tracking von Vimeo, auf das wir keinen Zugriff haben. Sie können das Tracking durch Google Analytics unterbinden, indem Sie die Deaktivierungs-Tools einsetzen, die Google für einige Internet-Browser anbietet. Sie können darüber hinaus die Erfassung der durch Google Analytics erzeugten und auf ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: [https://tools.google.com/dlpage/gaoptout?hl=de](https://tools.google.com/dlpage/gaoptout?hl=de)

## Amazon-Partnerprogramm

Wir sind auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO, Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für WebSites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon, Werbekostenerstattung verdient werden kann (Affiliate-System). Als Amazon-Partner verdienen wir an qualifizierten Käufen.

Amazon setzt Cookies ein, um die Herkunft der Bestellungen nachvollziehen zu können. Unter anderem kann Amazon erkennen, dass Sie den Partnerlink auf unserer WebSite angeklickt und anschliessend allenfalls ein Produkt bei Amazon gekauft haben.

Weitere Informationen zur Datennutzung durch Amazon und Widerspruchsmöglichkeiten erhalten Sie in der Datenschutzerklärung des Unternehmens unter dem Link: [https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010](https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010).

Amazon und das Logo von Amazon sind Warenzeichen von Amazon.com, Inc. oder eines seiner angegliederten resp. verbundenen Unternehmen.

## Booking.com-Partnerprogramm

Wir sind auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO, Teilnehmer des Partnerprogramms von Booking.com, das zur Bereitstellung eines Mediums für WebSites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Booking.com Werbekostenerstattung verdient werden kann (Affiliate-System). Als Booking.com-Partner verdienen wir an qualifizierten Buchungen.

Booking.com setzt Cookies ein, um die Herkunft der Buchung nachvollziehen zu können. Unter anderem kann Booking.com erkennen, dass Sie den Partnerlink auf unserer WebSite angeklickt und anschliessend allenfalls eine Buchung bei Booking.com getätigt haben.

Weitere Informationen zur Datennutzung durch Booking.com und Widerspruchsmöglichkeiten erhalten Sie in der Datenschutzerklärung des Unternehmens unter dem Link: [https://www.booking.com/content/privacy.de.html](https://www.booking.com/content/privacy.de.html).

## Bestellabwicklung im Online-Shop mit Kundenkonto

Wir verarbeiten die Daten unserer Kunden gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO, im Rahmen der Bestellvorgänge in unserem Onlineshop, um ihnen die Auswahl und die Bestellung der gewählten Produkte und Leistungen, sowie deren Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen.

Zu den verarbeiteten Daten gehören Stammdaten (Bestandsdaten), Kommunikationsdaten, Vertragsdaten, Zahlungsdaten und zu den von der Verarbeitung betroffenen Personen gehören unsere Kunden, Interessenten und sonstige Geschäftspartner. Die Verarbeitung erfolgt zum Zweck der Erbringung von Vertragsleistungen im Rahmen des Betriebs eines Onlineshops, Abrechnung, Auslieferung und der Kundenservices. Hierbei setzen wir Session Cookies, z.B. für die Speicherung des Warenkorb-Inhalts und permanente Cookies, z.B. für die Speicherung des Login-Status ein.

Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b (Durchführung Bestellvorgänge) und c (Gesetzlich erforderliche Archivierung) DSGVO. Dabei sind die als erforderlich gekennzeichneten Angaben zur Begründung und Erfüllung des Vertrages erforderlich. Die Daten offenbaren wir gegenüber Dritten nur im Rahmen der Auslieferung, Zahlung oder im Rahmen der gesetzlichen Erlaubnissen und Pflichten. Die Daten werden in Drittländern nur dann verarbeitet, wenn dies zur Vertragserfüllung erforderlich ist (z.B. auf Kundenwunsch bei Auslieferung oder Zahlung).

Nutzer können optional ein Nutzerkonto anlegen, indem sie insbesondere ihre Bestellungen einsehen können. Im Rahmen der Registrierung, werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt. Die Nutzerkonten sind nicht öffentlich und können von Suchmaschinen, z.B. Google, nicht indexiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto gelöscht, vorbehaltlich deren Aufbewahrung ist aus handels- oder steuerrechtlichen Gründen entspr. Art. 6 Abs. 1 lit. c DSGVO notwendig. Angaben im Kundenkonto verbleiben bis zu deren Löschung mit anschliessender Archivierung im Fall einer rechtlichen Verpflichtung. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern.

Im Rahmen der Registrierung und erneuter Anmeldungen sowie Inanspruchnahme unserer Onlinedienste, speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, ausser sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c DSGVO.

Die Löschung erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, die Erforderlichkeit der Aufbewahrung der Daten wird in unregelmässigen Abständen überprüft. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf.

## Agenturdienstleistungen

Wir verarbeiten die Daten unserer Kunden gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO im Rahmen unserer vertraglichen Leistungen.

Hierbei verarbeiten wir Bestandsdaten (z.B., Kundenstammdaten, wie Namen oder Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben etc.), Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit), Zahlungsdaten (z.B. Bankverbindung, Zahlungshistorie), Nutzungs- und Metadaten (z.B. im Rahmen der Auswertung und Erfolgsmessung von Marketingmassnahmen). Zu den Betroffenen gehören unsere Kunden, Interessenten sowie deren Kunden, Nutzer, Websitebesucher oder Mitarbeiter sowie Dritte. Der Zweck der Verarbeitung besteht in der Erbringung von Vertragsleistungen, Abrechnung und unserem Kundenservice. Die Rechtsgrundlagen der Verarbeitung ergeben sich aus Art. 6 Abs. 1 lit. b DSGVO (vertragliche Leistungen), Art. 6 Abs. 1 lit. f DSGVO (Analyse, Statistik, Optimierung, Sicherheitsmassnahmen). Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe hin. Eine Offenlegung an Externe erfolgt nur, wenn sie im Rahmen eines Auftrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines Auftrags überlassenen Daten handeln wir entsprechend den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben einer Auftragsverarbeitung gem. Art. 28 DSGVO und verarbeiten die Daten zu keinen anderen, als den auftragsgemässen Zwecken.

Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten. Die Erforderlichkeit der Aufbewahrung der Daten wird in unregelmässigen Abständen überprüft. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf. Im Fall von Daten, die uns gegenüber im Rahmen eines Auftrags durch den Auftraggeber offengelegt wurden, löschen wir die Daten entsprechend den Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.

## Maklerleistungen

Wir verarbeiten die Daten unserer Kunden, Klienten und Interessenten (einheitlich bezeichnet als «Kunden») gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung bestimmen sich nach dem zugrundeliegenden Auftrag. Dazu gehören grundsätzlich Bestands- und Stammdaten der Kunden (Name, Adresse, etc.), als auch die Kontaktdaten (E-Mailadresse, Telefon, etc.), die Vertragsdaten (Inhalt der Beauftragung, Entgelte, Laufzeiten, Angaben zu den vermittelten Unternehmen/ Versicherern/ Leistungen) und Zahlungsdaten (Provisionen, Zahlungshistorie, etc.). Wir können ferner die Angaben zu den Eigenschaften und Umständen von Personen oder ihnen gehörenden Sachen verarbeiten, wenn dies zum Gegenstand unseres Auftrags gehört. Dies können z.B. Angaben zu persönlichen Lebensumständen, mobilen oder immobilen Sachgütern sein.

Im Rahmen unserer Beauftragung kann es auch erforderlich sein, dass wir besondere Kategorien von Daten gem. Art. 9 Abs. 1 DSGVO, hier insbesondere Angaben zur Gesundheit einer Person verarbeiten. Hierzu holen wir, sofern erforderlich, gem. Art. 6 Abs. 1 lit a., Art. 7, Art. 9 Abs. 2 lit. a DSGVO eine ausdrückliche Einwilligung der Kunden ein.

Sofern für die Vertragserfüllung oder gesetzlich erforderlich, offenbaren oder übermitteln wir die Daten der Kunden im Rahmen von Deckungsanfragen, Abschlüssen und Abwicklungen von Verträgen, Daten an Anbieter der vermittelten Leistungen/ Objekte, Versicherer, Rückversicherer, Maklerpools, technische Dienstleister, sonstige Dienstleister, wie z.B. kooperierende Verbände, sowie Finanzdienstleister, Kreditinstitute und Kapitalanlagegesellschaften sowie Sozialversicherungsträger, Steuerbehörden, Steuerberater, Rechtsberater, Wirtschaftsprüfer, Versicherungs-Ombudsmänner und die Schweizerische Finanzmarkt-Aufsicht (FINMA) oder Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin). Ferner können wir Unterauftragnehmer beauftragen, wie z.B. Untervermittler. Wir holen eine Einwilligung der Kunden ein, sofern diese zur Offenbarung/ Übermittlung eine Einwilligung der Kunden erforderlich ist (was z.B. im Fall von besonderen Kategorien von Daten gem. Art. 9 DSGVO der Fall sein kann).

Die Löschung der Daten erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, wobei die Erforderlichkeit der Aufbewahrung der Daten in unregelmässigen Abständen überprüft wird. Im Übrigen gelten die gesetzlichen Aufbewahrungspflichten. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf.

## Vertragliche Leistungen

Wir verarbeiten die Daten unserer Vertragspartner und Interessenten sowie anderer Auftraggeber, Kunden, Mandanten, Klienten oder Vertragspartner (einheitlich bezeichnet als «Vertragspartner») gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem zugrundeliegenden Vertragsverhältnis.

Zu den verarbeiteten Daten gehören die Stammdaten unserer Vertragspartner (z.B. Namen und Adressen), Kontaktdaten (z.B. E-Mailadressen und Telefonnummern) sowie Vertragsdaten (z.B. in Anspruch genommene Leistungen, Vertragsinhalte, vertragliche Kommunikation, Namen von Kontaktpersonen) und Zahlungsdaten (z.B. Bankverbindungen, Zahlungshistorie).

Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich nicht, ausser wenn diese Bestandteile einer beauftragten oder vertragsgemässen Verarbeitung sind.

Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe, sofern diese für die Vertragspartner nicht evident ist, hin. Eine Offenlegung an externe Personen oder Unternehmen erfolgt nur, wenn sie im Rahmen eines Vertrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines Auftrags überlassenen Daten, handeln wir entsprechend den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben.

Im Rahmen der Inanspruchnahme unserer Onlinedienste, können wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung speichern. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch der Interessen der Nutzer am Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, ausser sie ist zur Verfolgung unserer Ansprüche gem. Art. 6 Abs. 1 lit. f. DSGVO erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO.

Die Löschung der Daten erfolgt, wenn die Daten zur Erfüllung vertraglicher oder gesetzlicher Fürsorgepflichten sowie für den Umgang mit etwaigen Gewährleistungs- und vergleichbaren Pflichten nicht mehr erforderlich sind, wobei die Erforderlichkeit der Aufbewahrung der Daten in unregelmässigen Abständen überprüft wird. Im Übrigen gelten die gesetzlichen Aufbewahrungspflichten.

## Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung

Wir verarbeiten Daten gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO im Rahmen von Verwaltungsaufgaben sowie Organisation unseres Betriebs, Finanzbuchhaltung und Befolgung der gesetzlichen Pflichten, wie z.B. der Archivierung. Hierbei verarbeiten wir dieselben Daten, die wir im Rahmen der Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden, Interessenten, Geschäftspartner und Websitebesucher betroffen. Der Zweck und unser Interesse an der Verarbeitung liegt in der Administration, Finanzbuchhaltung, Büroorganisation, Archivierung von Daten, also Aufgaben die der Aufrechterhaltung unserer Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung unserer Leistungen dienen. Die Löschung der Daten im Hinblick auf vertragliche Leistungen und die vertragliche Kommunikation entspricht den, bei diesen Verarbeitungstätigkeiten genannten Angaben.

Wir offenbaren oder übermitteln hierbei Daten an die Finanzverwaltung, Berater, wie z.B., Steuerberater oder Wirtschaftsprüfer sowie weitere Gebührenstellen und Zahlungsdienstleister.

Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen Interessen Angaben zu Lieferanten, Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese mehrheitlich unternehmensbezogenen Daten, speichern wir grundsätzlich dauerhaft.

## Erbringung unserer Leistungen nach Statuten

Wir verarbeiten die Daten unserer Mitglieder, Unterstützer, Interessenten, Kunden oder sonstiger Personen gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO entsprechend Art. 6 Abs. 1 lit. b. DSGVO, sofern wir ihnen gegenüber vertragliche Leistungen anbieten oder im Rahmen bestehender geschäftlicher Beziehung, z.B. gegenüber Mitgliedern, tätig werden oder selbst Empfänger von Leistungen und Zuwendungen sind. Im Übrigen verarbeiten wir die Daten betroffener Personen gem. Art. 6 Abs. 1 lit. f. DSGVO auf Grundlage unserer berechtigten Interessen, z.B. wenn es sich um administrative Aufgaben oder Öffentlichkeitsarbeit handelt.

Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung bestimmen sich nach dem zugrundeliegenden Vertragsverhältnis. Dazu gehören grundsätzlich Bestands- und Stammdaten der Personen (z.B., Name, Adresse, etc.), als auch die Kontaktdaten (z.B., E-Mailadresse, Telefon, etc.), die Vertragsdaten (z.B., in Anspruch genommene Leistungen, mitgeteilte Inhalte und Informationen, Namen von Kontaktpersonen) und sofern wir zahlungspflichtige Leistungen oder Produkte anbieten, Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie, etc.).

Wir löschen Daten, die zur Erbringung der statutarischen Zwecke nicht mehr erforderlich sind. Dies bestimmt sich entsprechend der jeweiligen Aufgaben und vertraglichen Beziehungen. Im Fall geschäftlicher Verarbeitung bewahren wir die Daten so lange auf, wie sie zur Geschäftsabwicklung, als auch im Hinblick auf etwaige Gewährleistungs- oder Haftungspflichten relevant sein können. Die Erforderlichkeit der Aufbewahrung der Daten wird in unregelmässigen Abständen überprüft. Im Übrigen gelten die gesetzlichen Aufbewahrungspflichten.

## Hinweis betreffend Datenübermittlungen in die USA (Vereinigte Staaten von Amerika)

Aus Gründen der Vollständigkeit weisen wir Sie darauf hin, dass für Nutzer mit Sitz in der Schweiz Überwachungsmassnahmen von US-Behörden bestehen, welche generell die Speicherung aller personenbezogenen Daten aus der Schweiz - welche in die USA übermittelt wurden - ermöglicht.

Dies geschieht ohne Differenzierung, Einschränkung oder Ausnahme anhand der verfolgten Ziele und ohne ein objektives Kriterium, das es ermöglicht, den Zugang der US-Behörden zu den Daten und deren spätere Nutzung auf ganz bestimmte, strikt begrenzte Zwecke zu beschränken, die mit dem Zugang zu diesen Daten als auch mit deren Nutzung verbundenen Eingriffe zu rechtfertigen vermögen. Ausserdem weisen wir Sie darauf hin, dass in den USA für die betroffenen Personen aus der Schweiz, keine Rechtsbehelfe vorliegen, die es erlauben würden, Zugang zu den Sie betreffenden Daten zu erhalten und deren Berichtigung oder Löschung zu erwirken, resp. kein wirksamer gerichtlicher Rechtsschutz gegen generelle Zugriffsrechte von US-Behörden vorliegt. Wir weisen den Betroffenen explizit auf diese Rechts- und Sachlage hin, um eine entsprechend informierte Entscheidung zur Einwilligung in die Verwendung seiner Daten zu treffen.

Nutzer mit Wohnsitz in einem Mitgliedstaat der EU weisen wir darauf hin, dass die USA aus Sicht der Europäischen Union nicht über ein ausreichendes Datenschutzniveau verfügen.

## Urheberrechte

Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website, gehören ausschliesslich dem Betreiber dieser Website oder den speziell genannten Rechteinhabern. Für die Reproduktion von sämtlichen Dateien, ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.

Wer ohne Einwilligung des jeweiligen Rechteinhabers eine Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls schadenersatzpflichtig machen.

## Allgemeiner Haftungsausschluss

Alle Angaben unseres Internetangebotes wurden sorgfältig geprüft. Wir bemühen uns, unser Informationsangebot aktuell, inhaltlich richtig und vollständig anzubieten. Trotzdem kann das Auftreten von Fehlern nicht völlig ausgeschlossen werden, womit wir keine Garantie für Vollständigkeit, Richtigkeit und Aktualität von Informationen auch journalistisch-redaktioneller Art übernehmen können. Haftungsansprüche aus Schäden materieller oder ideeller Art, die durch die Nutzung der angebotenen Informationen verursacht wurden, sind ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.

Der Herausgeber kann nach eigenem Ermessen und ohne Ankündigung Texte verändern oder löschen und ist nicht verpflichtet, Inhalte dieser Website zu aktualisieren. Die Benutzung bzw. der Zugang zu dieser Website geschieht auf eigene Gefahr des Besuchers. Der Herausgeber, seine Auftraggeber oder Partner sind nicht verantwortlich für Schäden, wie direkte, indirekte, zufällige, vorab konkret zu bestimmende oder Folgeschäden, die angeblich durch den Besuch dieser Website entstanden sind und übernehmen hierfür folglich keine Haftung.

Der Herausgeber übernimmt ebenfalls keine Verantwortung und Haftung für die Inhalte und die Verfügbarkeit von Webseiten Dritter, die über externe Links dieser Webseite erreichbar sind. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich. Der Herausgeber distanziert sich damit ausdrücklich von allen Inhalten Dritter, die möglicherweise straf- oder haftungsrechtlich relevant sind oder gegen die guten Sitten verstossen.

## Änderungen

Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.

## Fragen an den Datenschutzbeauftragten

Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person in unserer Organisation.

---

Basel, 15.10.2019

Quelle: [SwissAnwalt](https://www.swissanwalt.ch/)
`;

appendFileSync(out, part3, 'utf8');
console.log('Appended part 3 (complete DE)');
