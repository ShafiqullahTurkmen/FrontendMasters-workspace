import {readFile} from 'fs/promises';

process.on('uncaughtException', (e) => {
  console.log(e);
})

const result = await readFile(new URL('template.htm', import.meta.url), 'utf-8')


  console.log('hello');
