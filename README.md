# Gulf Replacer

Tired of being told how to name your Gulf? Gulf Replacer is here for those who refuse to be dictated - change "Gulf of America" to "Gulf of Denmark" (or any name you like) and reclaim your naming freedom!

## Overview

Gulf Replacer is a browser extension that automatically replaces specific text on web pages. In this version, it replaces all occurrences of **"Gulf of America"** with **"Gulf of Denmark"**. The extension is easy to install on both Chrome and Firefox and can be extended to support more replacement rules or languages.

## Installation

### For Google Chrome

1. **Clone or download the repository** and open the project folder (which includes `manifest.json`, `content_script.js`, and the `_locales` folder).

2. **Open the Chrome Extensions page:**
   - Go to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode:**
   - Toggle the "Developer mode" switch in the top-right corner.

4. **Load the Unpacked Extension:**
   - Click on **"Load unpacked"** and select the folder where your extension files are located.

5. **Test the Extension:**
   - Navigate to any web page containing the phrase **"Gulf of America"**. The extension should automatically replace it with **"Gulf of Denmark"**.

### For Mozilla Firefox

1. **Clone or download the repository** and open the project folder.

2. **Open the Firefox Add-ons Debugging Page:**
   - In Firefox, type `about:debugging` in the address bar.
   - Click on **"This Firefox"** (or **"Load Temporary Add-on"** depending on your Firefox version).

3. **Load the Temporary Add-on:**
   - Click on **"Load Temporary Add-on"** and select the `manifest.json` file from your project folder.

4. **Test the Extension:**
   - Visit a website that includes the text **"Gulf of America"**. The extension should automatically replace it with **"Gulf of Denmark"**.

## Usage

Once the extension is installed:

- It runs automatically on page load.
- The content script traverses the web page’s DOM and replaces all instances of **"Gulf of America"** with **"Gulf of Denmark"**.
- No further action is required from the user unless you decide to customize the extension.

## Customization

To extend or modify the text replacement rules:

1. Open `content_script.js`.
2. Update the `replacements` array to include new rules. For example:

   ```javascript
   const replacements = [
     {
       search: /Gulf of America/g,
       replacement: "Gulf of Denmark"
     },
     // Add more rules here
     {
       search: /Old Text/g,
       replacement: "New Text"
     }
   ];
