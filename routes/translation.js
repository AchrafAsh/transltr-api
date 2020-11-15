const router = require('express').Router()
const translationDB = require('../models/translation')
const websiteDB = require('../models/website')

const translations = [
    {
        id: 1,
        selector: 'nav ul li:nth-of-type(1)',
        en: 'Home',
        fr: 'Accueil'
    },
    {
        id: 2,
        selector: 'nav ul li:nth-of-type(2)',
        en: 'About',
        fr: 'À propos'
    },
    {
        id: 3,
        selector: 'nav ul li:nth-of-type(3)',
        en: 'Projects',
        fr: 'Projets'
    },
    {
        id: 4,
        selector: 'nav ul li:nth-of-type(4)',
        en: 'Contact',
        fr: 'Contact'
    },
    {
        id: 5,
        selector: '#hero span:nth-of-type(1)',
        en: `Bonjour 👋 I'm Achraf Ait Sidi Hammou (ASH)`,
        fr: 'Hello 👋 Je suis Achraf Ait Sidi Hammou (ASH)'
    },
    {
        id: 6,
        selector: '#hero span:nth-of-type(2)',
        en: 'Student. Freelance. Maker.',
        fr: 'Étudiant. Freelance. Maker.'
    },
    {
        id: 7,
        selector: '#hero button',
        en: 'Say Hello!',
        fr: 'Dites bonjour!'
    },
    {
        id: 8,
        selector: '#about p',
        en: `Hi there! My name is Achraf Ait Sidi Hammou
                        (@achrafash), I'm a french 🇫🇷 engineering student at
                        ENSTA Paris. My goal is to become a Slasheur, i.e
                        cumulating several activities:`,
        fr: `Je m'appelle Achraf Ait Sidi Hammou (@achrafash).
                        Je suis étudiant en école d'ingénieur à l'ENSTA Paris.
                        Mon objectif est de devenir un étudiant slasheur, 
                        i.e cumuler plusieurs activités:`
    },
    {
        id: 9,
        selector: '#about mark',
        en: `Student / Freelance / IndieMaker`,
        fr: `Étudiant / Freelance / IndieMaker`
    },
    {
        id: 10,
        selector: '#contact h1',
        en: `You need help for your web or mobile project?`,
        fr: `Besoin d'aide sur un projet web ou mobile ?`
    }
]

/**
 * @route GET /translation
 * @group translation of a website page
 * @param {string} apiKey.query.required - api key of translatr customer
 * @param {string} lang.query.required - language to translate to
 * @param {string} domain.query.required - website domain (ex: "achrafash.me")
 * @param {string} pathname.query.required - page to translate (ex: "/", "/about", "/blog/slug")
 * @returns {object} 200 - An array of elements with selector its translation
 * @returns {Error}  default - Unexpected error
 */
router.get('/', async (req, res) => {
    console.log({ query: req.query })
    const { apiKey, lang, domain, pathname } = req.query
    if (apiKey === '' || apiKey === undefined) {
        return res
            .status(400)
            .send('Bad request. Make sure to include the following: apiKey')
    }
    if (lang === '' || lang === undefined) {
        return res
            .status(400)
            .send('Bad request. Make sure to include the following: lang')
    }
    if (domain === '' || domain === undefined) {
        return res
            .status(400)
            .send('Bad request. Make sure to include the following: domain')
    }
    if (pathname === '' || pathname === undefined) {
        return res
            .status(400)
            .send('Bad request. Make sure to include the following: pathname')
    } else {
        // validate parameters
        // validate lang
        // validate apiKey

        // look in database
        const translations = await translationDB.findAll({
            where: { domain, pathname, lang }
        })
        return res.status(200).send(translations)
    }
})

/**
 * @route GET /translation/lang
 * @group translation of a website page
 * @param {string} apiKey.query.required - api key of translatr customer
 * @param {string} domain.query.required - website domain (ex: "achrafash.me")
 * @returns {object} 200 - An array of available translations for the given website
 * @returns {Error}  default - Unexpected error
 */
router.get('/lang', async (req, res) => {
    console.log({ query: req.query })
    const { apiKey, domain } = req.query
    if (apiKey === '' || apiKey === undefined) {
        return res
            .status(400)
            .send('Bad request. Make sure to include the following: apiKey')
    }

    if (domain === '' || domain === undefined) {
        return res
            .status(400)
            .send('Bad request. Make sure to include the following: domain')
    } else {
        // validate parameters
        // validate lang
        // validate apiKey

        // look in database
        let availableLangs = await websiteDB.findOne({
            where: { domain },
            attributes: ['lang']
        })

        availableLangs = availableLangs.lang.split(';')
        return res.status(200).send(availableLangs)
    }
})

module.exports = router
