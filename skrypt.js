<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <!--kodowanie polskich znaków-->
    <meta charset="UTF-8">
    <meta charset="iso-8859-2">
    <meta charset="windows-1250">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- słowa kluczowe w stronie -->
    <meta name="keywords" content="szkola, lekcje, nauka">
    <!-- czy strona ma być indeksowan -->
    <meta name="robots" content="index">
    <!-- link do css -->
    <link rel="stylesheet" href="style.css">
    <!-- podlaczenie pliku javascript-->
    <script src="skrypt.js"></script>

    <title>Znaczniki</title>
</head>
<body>
    <header>Znaczniki HTML </header>
    <section>
        <h1>Lista znaczników</h1>
        <ol>
            <li>znacznik dołączenia obrazu "&lt;img src="adres" title="tytul wyswietlany po najechaniu myszką" alt="tekst alternatywny"   &gt;"</li>
            <!-- znak &lt; zastępuje znak < 
                znak &gt; zastępuje znak >
            -->
            <li>sekcja nagłówka "&lt;header&gt; i &lt;/header&gt;"</li>
            <li>zbiór odnośników, menu, belka nawigacyjna "&lt;nav&gt; i &lt;/nav&gt;"</li>
            <li>sekcje strony "&lt;section&gt; i &lt;/section&gt;"</li>
            <li>znacznik treści, artykuł "&lt;article&gt; i &lt;/article&gt;"</li>
            <li>panel boczny, boczne menu "&lt;aside&gt; i &lt;/aside&gt;"</li>
            <li>stopka strona, stópeczka "&lt;footer&gt; i &lt;/footer&gt;"</li>
            <li>cześć główna "&lt;main&gt; i &lt;/main&gt;"</li>
            <li>lista wypunkowana "&lt;ol&gt; i &lt;/ol&gt;"</li>
            <li>lista nieuporządkowana "&lt;ul&gt; i &lt;/ul&gt;"</li>
            <li>element listy "&lt;li&gt; i &lt;/li&gt;"</li>
            <li>typy listy numerownej: <br>
                type="1" - lista z cyframi arabskimi (domyślna)<br>
                type="A" - lista z wielkimi literami<br>
                type="a" - lista z małymi literami<br>
                type="I" - lista z cyframi dużymi rzymskimi<br>
                type="i" - lista z cyframi małymi rzymskimi<br>
            </li>
            <li>
                Tabele<br>
                <ol type="a">
                    <li>znacznik tabeli "&lt;table&gt; i &lt;/table&gt;"</li>
                    <li>znacznik wiersza "&lt;tr&gt; i &lt;/tr&gt;"</li>
                    <li>znacznik pola "&lt;td&gt; i &lt;/td&gt;"</li>
                    <li>znacznik nagłówka tabeli "&lt;thead&gt; i &lt;/thead&gt;"</li>
                    <li>znacznik ciała tabeli "&lt;tbody&gt; i &lt;/tbody&gt;"</li>
                    <li>znacznik nagłówek komórka "&lt;th&gt; i &lt;/th&gt;"</li>
                    <li>określenie zasięgu nagłówka scope="col" - kolumna, scope="row" - wiersz "&lt;th scope="row"&gt;"</li>
                    <li>łączenie komórek w poziomie (kolumnami) colspan="ilość" "&lt;td colspan="3"&gt;"</li>
                    <li>łączenie komórek w pionie (wierszami) rowspan="ilosc" "&lt;td rowspan="3"&gt;"</li>
                </ol>
            </li>
            <li>
                odsyłacz przenosi nas do innej strony lub innego miejsca na stronie &lt;agref="adres odnosnika"&gt i &lt/a&gt </br>
                można go tworzyć jako tekst, grafola (znacznik img wewnątrz znaczników), przycisk
            </li>
            <li>
                zakładka miejsce do któego możde poprawdzić odnośnik &lt;agref="adres odnosnika"&gt i &lt/a&gt 
                <br>
                aby odwołać się do donośnika w nazwie na początku dodajemy # np &lt;agref="#odnosnik"&gt i &lt/a&gt 
            </li>
            <li>
                mapa odsyłaczy pozwala na zdefiniowanie obszaru w które kliniecie przeniesie użytkownika w adres w podany w linku
                <br>
                "&lt;map"&gt; o &lt;/map&gt;" definiujemy obszar mapy a w nmim szczegóły "
                "$lt;area shape"kształ - rect, circle' coords="współrzędne końcowych punktów href='odnośnik" &gt;"
            </li>
        </ol>
        <li>
            formularze 
            <br>
            <ol type='a'>
                <li>
                    "&lt;form"&gt; i &lt;/form&gt;" znacznik otwierający i zamykający formularz"
                    <br>
                    parametry :<br>
                    action="adres" ustalamy adres na który przesyłamy dane z formularza inna strona może przerwarzać dane z fomularza i tej stony <br>
                    method="post/get" ustalamy sposób przesyłania danych przez formularz. Get przesyłanie za pomocą jawenego tekstu w adresie strony, POST przesyłanie za pomocą ukrytego tekstu
                </li>
                <li>
                    "&lt;input"&gt; i &lt;/input&gt;" znacznik do wprowadzania danych w zależności od określonego typu <br>
                    atrybuty: <br>
                    name="" określa nazwę pola i nazwę zmiennej do któej zostanie wprowadzona wartość z formularza<br>

                    value="" określa domyślną wartość pola <br>
                    size="" określa liczbę znaków mieszczących się w polu<br>

                    maxlenght="" maksymalna liczba znaków<br>

                type="" pola typu input<br>
                typy pól input<br>
                <ul>
                    <li> "text" pozwala na wprowadzanie tekstu</li>
                    <li> "number" powzala na wprowadzanie tylko liczb</li>
                    <li> "checkbox" pole do zaznaczania opcji</li>
                    <li> "radui"pole wyboru opcji</li>
                    <li> "submit"pole do wpisywania hasła ukrywa znaki</li>
                    <li> "submit" zatwierdza dane z formularza</li>
                    <li> "reset" czyści dane z formularza</li>
                    <li> "file" dołączanie pliku do formularza</li>
                    <li> "hidden" ukryrwa pole nie wyswietla sie na formularzu ale przesyła dane z fomularza</li>
                    <li> "button" przycisk w formularzu wywołujący jakąś funkcję</li>
                    <li> "color" pole do wybierania koloru palety</li>
                    <li> "email" pole do wpisywania maila, sprawdza poprawność</li>
                    <li> "date" pozwala wpisać lub wybrać datę z kalendarza</li>
                    <li> "text"</li>
                </ul>
                </li>
                <li>
                    grupowanie elementów formularza<br>
                    "&lt;fieldset"&gt; i &lt;/feldset&gt;" określa ramy utworzonej grupy elementów <br>
                    "&lt;legends"&gt; i &lt;/legend&gt;" nagłówek/nazwa grupy elementów
                </li>
                <li>
                    "&lt;select"&gt; i &lt;/select&gt;" pole wyboru elementy wypisujemy za pomocą znacznika "&lt;option"&gt; i &lt;/option&gt;"<br>
                    atrybuty pola select: <br>
                    size="n" określa liczbę widocznych pozycji na liście <br>
                    mulitple można zaznaczyć wiele opcji z listy<br>
                    <br>
                    atrybuty dla znacznika option:<br>
                    selected
                </li>

                </li>
            </ol>
        </li>

    </section>
    <section>
        <img src="tiger.jpg" title="Czołg Tiger" alt="tiger obrazek">
        <p>Struktura bloków html5
            <br>
            <img src="struktura-HTML5.jpg" alt="struktura bloków">
        </p>
    </section>
    <section>
        <table>
            <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1.</th>
                    <td>Michał</td>
                    <td>Hryniewicz</td>
                </tr>
                <tr>
                    <th>2.</th>
                    <td>Jakub</td>
                    <td>Gauden</td>
                </tr>
                <tr>
                    <th>3.</th>
                    <td>Adrian</td>
                    <td>Matuszczyk</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section>
        <h2>zdjęcie z podpisem</h2>
        <figure>
            <img src="tiger.jpg" title="Czołg Tiger" alt="tiger obrazek" witdh="100" height="100" name="mapa">
            <area shape="rect" coords="0,0,50,50" href="#poczatek">
            <area shape="rect" coords="70,50,20" href="#tabele">
        <figcaption>To jest tiger</figurecaption>
        </figure>
        
    </section>
    <footer>
        Stronę wykonał Fejbdżam
    </footer>
</body>
</html>
