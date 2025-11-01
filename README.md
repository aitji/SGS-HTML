## SGS-HTML-Client (Node.js)

this is a simple [Node.js](https://nodejs.org) tool to log in to the old SGS system *(used by some schools)* and fetch HTML pages with student information

it **does not parse the HTML** deeply-just saves the raw page content for continuing.

## features

* login using `STUDENT_ID` and `CITIZEN_ID`
* fetch everything inside [SGS](https://sgs.bopp-obec.info) under student account
* fetch grades for all semesters

---

## Requirements

* Node.js 18+
* npm
* Dependencies:

  ```bash
  npm install axios cheerio
  ```

---

## Setup

1. clone the repo:

```bash
git clone https://github.com/aitji/SGS-HTML.git
cd SGS-HTML
```

2. install dependencies:

```bash
npm install
```

3. set your student credentials in `example.js`

---

## Usage

run the example script:

```bash
node src/example.js
```

the HTML files will be saved locally inside `/src`

---

this is meant for **personal/educational use** only. use responsibly.