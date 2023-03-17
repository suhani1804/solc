
async function main()
{
    console.log("Hello world");
    enter();
    let a=5;
    console.log(a);
}
function enter()
{
    const b=10;
    console.log(10*b);
}

main().then(()=> process.exit(0)).catch((error)=> console.error(error));