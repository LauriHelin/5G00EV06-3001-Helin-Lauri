function doIt(a,b,c) {
var text = ''
for(i=0; i<arguments.length; i++ )
{
    text = text + arguments[i]
}
console.log(text)
}


doIt("a");  // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc