// eslint-disable-next-line import/no-extraneous-dependencies
const test = require('ava')
const { plop } = require('./dist/bundle')

test('foo', t => {
    t.pass()
})

test('bar', async t => {
    const bar = Promise.resolve('bar')
    t.is(await bar, 'bar')
})

test('plopFun', t => {
    t.is(plop(), 3)
})
