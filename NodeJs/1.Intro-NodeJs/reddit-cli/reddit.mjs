#! /usr/bin/env node
// import our packages
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// parse env vars
const { argv } = yargs(process.argv)
// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
const randomIndex = Math.floor(Math.random() * data.data.children.length)
// get radom post from reddit api response of all posts on front page
const post = data.data.children[randomIndex]

// log if --print flag is passed
if (argv.print) {
  console.log(`
    Title: ${post.data.title}\n
    Link: ${post.data.permalink}
  `)
} else {
  // open in browser if not
  open(`https://reddit.com${post.data.permalink}`)
}