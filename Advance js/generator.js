function* fun()
{
    yield 'php',
    yield 'java',
    yield 'python',
    yield 'c#',
    yield '.net'
}
let lang=fun();

for(p of lang)
{
    console.log(p)
}