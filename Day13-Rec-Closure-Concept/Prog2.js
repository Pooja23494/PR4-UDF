// Closure concept

const mainMsg = () => {
    console.log('Hello from Main Func.');
    const subMsg = () => {
        console.log('Hello from Sub Func.');
        const subChildMsg = () => {
            console.log('Hello from Sub Child');
        }
        subChildMsg();
    }
    subMsg();
}
mainMsg();