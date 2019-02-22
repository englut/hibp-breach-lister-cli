const http = require('axios')

const emails = [
    /* fill email accounts here */
]

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const apiBase = 'https://haveibeenpwned.com/api/v2/breachedaccount'

const _callClient = async email => {
    const response = await http.get(`${apiBase}/${email}`, { headers: { 'user-agent': 'hibp-breach-lister-cli' }, responseType: 'json' })
        .then(async res => {
            await sleep(1500)
            return res
        })
        .catch(async err => {
            await sleep(1500)
            return { data: err.response.status }
        })

    return { email, breaches: response.data || {} }
}

(async function () {
    'use strict'

    const promises = emails.map(email => _callClient(email))
    const output = await Promise.all(promises)

    console.log(JSON.stringify(output))
})()
