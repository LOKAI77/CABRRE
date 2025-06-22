<h1 align="center">
  <img src="https://i.ibb.co/ZzZQ7FSM/Bez-n-zvu-2.png" alt="Bez-n-zvu-2" border="0" width="600px">
  <br>
</h1>

<h4 align="center">Application for overflow limit analysis in the spillway</h4>

<p align="center">
<a href=""><img src="https://img.shields.io/badge/.XLS-56FF3E"></a>
<a href=""><img src="https://img.shields.io/badge/.XLSX-56FF3E"></a>
<a href=""><img src="https://img.shields.io/badge/.CSV-56FF3E"></a>
<a href=""><img src="https://img.shields.io/badge/.TXT-719DFF"></a>
</p>

<br>

<p align="center">
<a href=""><img src="https://img.shields.io/github/release/LOKAI77/CABRRE"></a>
</p>

# FEATURES

- **Drag and Drop** files straight to CABRRE
- **Multi format support** curently supports: .TXT, .CSV, .XLS, .XLSX
- **Automatic detection** for file type and date format - no need to enter things manually
- **Detailed** analytic insights into proccessed data, curently features 3 charts and 1 table

<br>
<h1 align="center">
<img src="https://i.ibb.co/0pcFTL5t/Screenshot-2025-06-22-131431.png" alt="Screenshot-2025-06-22-131431" border="0" width="1200px">
</h1>

<br>

# ABOUT

<h2 align="left">CABRRE - Capacity Breach Report Application</h1>

<h3 align="left">Overview</h5>

CABRRE (Capacity Breach Report) is developed for the Ohře River Basin Authority as a decision-support tool for assessing temporary overflow capacity at spillways and preparing official breach capacity reports.

<br>

<h3 align="left">How It Works</h5>

**<p>1) Data processing pipeline</p>**
```text
Raw File → Format Detection → Date/Time Parsing → Value Extraction → Validation → Standardization → Calculations → Chart generation
```

**Key processing steps**:
- **Date parsing**: Handles 50+ date formats (`DD/MM/YYYY`, `MM/DD/YYYY`, named months, AM/PM, etc.)
- **Value extraction**: Parses numeric values with different decimal separators
- **Data validation**: Categorizes records as complete/missing-value/corrupted
- **Frequency detection**: Automatically detects data intervals (hourly, daily, monthly, etc.)
- **Standardization**: Converts all data to `DD/MM/YYYY HH:MM:SS format`

**<p>2) Statistical Analysis</p>**
When user inputs a `limit value`, the app calculates:

- **Exceedance events**: When flow > limit (transitions from below to above limit)
- **Flooded periods**: Total time spent above limit
- **Monthly statistics**: Days flooded and exceedance frequency per month
- **Annual averages**: Projected yearly exceedance rates

<br>

<h3 align="left">Technical Architecture</h5>

**Frontend**
- Vanilla HTML5/CSS3/JavaScript
- **Chart.js** for visualizations
- **XLSX.js** for Excel file processing
- **Responsive design** with dark theme
- **No server dependencies** - runs entirely on `Javascript`

**Performance Optimizations**
- **Chunked processing**: Handles large datasets (100k+ rows) without blocking UI
- **Data sampling**: Charts use up to 2000 points for performance
- **Streaming analysis**: Processes data in chunks to avoid memory issues
- **Smart caching**: Stores processed data for multiple calculations

**Usage**
- `No installation` needed, program can run in browser
- Compiled into `.exe` with `electron-builder` for easier use and distribution

<br>

# INSTALLATION

Repository is provided with both compiled and uncompiled versions. Raw `.HTML` version can be executed straight in browser or you can compile it yourself into `.exe`. The compiled version contains already prepared executable ready-to-go. No additional download needed.

**<p>How to compile:</p>**

- **Step 1**: Download uncompilled version, and put everything in your project folder (`main.js`, `preload.js` and `renderer.js` are already included)
- **Step 2**: Download electron-builder
- **Step 3**: Compile with electron


```shell
:~$ git clone https://github.com/LOKAI77/CABRRE/cabrre-uncompiled
:~$ cd ~/cabrre-uncompiled
:~$ npm init -y
:~$ npm install electron --save-dev
:~$ npm install electron-builder --save-dev
:~$ npx electron-builder build --win --x64
```


<br>

# SUPPORTED DATE FORMATS

<h3 align="left">Excel/AM-PM Formats</h3>

```text
MM/DD/YYYY H:MM:SS AM/PM (10/04/1998 7:00:00 AM)
MM/DD/YYYY HH:MM:SS AM/PM (10/04/1998 07:00:00 PM)
M/D/YYYY H:MM:SS AM/PM (10/4/1998 7:00:00 AM)
```
<h3 align="left"> Standard DD/MM/YYYY Formats</h3>

```text
DD/MM/YYYY HH:MM:SS (10/04/1998 07:00:00)
D/M/YYYY H:MM:SS (10/4/1998 7:00:00)
DD/MM/YY HH:MM:SS (10/04/98 07:00:00)
```
<h3 align="left"> ISO and YYYY First Formats</h3>

```text
YYYY/MM/DD HH:MM:SS (1998/04/10 07:00:00")
YYYY-MM-DD HH:MM:SS (1998-04-10 07:00:00")
YYYY.MM.DD HH:MM:SS (1998.04.10 07:00:00")
```
<h3 align="left"> Dash and Dot Separated Formats</h3>

```text
DD-MM-YYYY HH:MM:SS (10-04-1998 07:00:00)
MM-DD-YYYY HH:MM:SS (04-10-1998 07:00:00)
DD.MM.YYYY HH:MM:SS (10.04.1998 07:00:00)
MM.DD.YYYY HH:MM:SS (04.10.1998 07:00:00)
```
<h3 align="left"> Special Dot Format (Text Files)</h3>

```text
DD.MM.YYYY HH:MM:SS AM/PM.VALUE (10.04.1998 07:00:00 AM.15.5)
```
<h3 align="left"> Named Month Formats (English)</h3>

```text
Month DD, YYYY HH:MM:SS (April 10, 1998 07:00:00")
Month DD YYYY HH:MM:SS (April 10 1998 07:00:00")
DD Month YYYY HH:MM:SS (10 April 1998 07:00:00")
Mon DD, YYYY HH:MM:SS (Apr 10, 1998 07:00:00")
DD Mon YYYY HH:MM:SS (10 Apr 1998 07:00:00")

Supported English months:
Full: january, february, march, april, may, june, july, august, september, october, november, december
Short: jan, feb, mar, apr, may, jun, jul, aug, sep/sept, oct, nov, dec
```
<h3 align="left"> Named Month Formats (Czech)</h3>

```text
Měsíc DD, YYYY HH:MM:SS (e.g., "duben 10, 1998 07:00:00")
DD Měsíc YYYY HH:MM:SS (e.g., "10 duben 1998 07:00:00")

Supported Czech months:
Full: leden, únor, březen, duben, květen, červen, červenec, srpen, září, říjen, listopad, prosinec
Short: led, uno, bře/bre, dub, kvě/kve, čer/cer/črv/crv, čvc/cvc, srp, zář/zar, říj/rij, lis, pro
```

<h3 align="left"> Time-Only Variations</h3>

<h4 align="left">All above formats also work with:</h4>

- <p>Without seconds: HH:MM instead of HH:MM:SS</p>
- <p>Single digit hours/minutes: H:MM or HH:M</p>
- <p>Date-only: Without time component (defaults to 00:00:00)</p>

<h3 align="left">Date Order Detection</h3>

<h4 align="left">The system automatically detects whether dates are in:</h4>

- <p>DMY (Day/Month/Year) - European format</p>
- <p>MDY (Month/Day/Year) - US format</p>
- <p>YMD (Year/Month/Day) - ISO format</p>

<h3 align="left">Flexible Separators</h3>

<p></p>The system supports mixing separators within the same date:</p>

- `\`, `/`, `-`, `.` for date parts
- Space, comma, dash for separating date from time
- Handles multiple consecutive spaces/separators

<h3 align="left">Case Insensitivity</h3>

- All month names work in any case (NOVEMBER, november, November)
- AM/PM works in any case (AM, am, PM, pm)

<h3 align="left">Year Formats</h3>

- **4-digit years**: 1900-2099
- **2-digit years**: Assumes 20xx (e.g., 01 → 2001)
- Automatic century detection

<br>

# NOTES

- Always cite the app in official documentation
- ⚠️ Results are for analysis purposes only; operators should verify integrity

<br>
<br>
