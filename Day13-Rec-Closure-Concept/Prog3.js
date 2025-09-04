// Closure concept

let a = 10;

const mainFunc = () => {
    let a = 20;
    const subFunc = () => {
        let a = 30;
        const subchild = () => {
            let a = 40;
            console.log(`Sub Child a : ${a}`);
        }
        subchild();
        console.log(`Sub Func a : ${a}`);
    }
    subFunc();
    console.log(`Main FUnc a : ${a}`);
}
mainFunc();
console.log(`Out side of main func a : ${a}`);