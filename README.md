# DEPRECATED
This codebase is deprecated. Repository has been relocated to [Codeberg](https://codeberg.org/quaff/hibp-breach-lister-cli) and the tool has been rewritten in Rust.

---

## hibp-breach-lister-cli

Script to bulk check emails for breaches via https://haveibeenpwned.com/

### How to use
1. Clone this repo, and change directories to the checkout.
2. Run `npm install`
3. Edit `index.js` and add the emails you want checked to the `emails` variable.
4. Run `node index.js > output.json`
