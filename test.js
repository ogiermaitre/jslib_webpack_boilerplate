// eslint-disable-next-line import/no-extraneous-dependencies
const test = require('ava')
const { f0 } = require('./dist/bundle')

test('foo', t => {
    t.pass()
})

test('bar', async t => {
    const bar = Promise.resolve('bar')
    t.is(await bar, 'bar')
})

test('plopFun', t => {
    t.is(f0(), 3)
})
