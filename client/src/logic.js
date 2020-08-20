 const result = (num, num2, op) => {

    switch (op) {
        case '+':
            return (parseInt(num)+parseInt(num2))
        case '-':
            return (parseInt(num2)-parseInt(num));
        default:
            break;


    }

}
export default result;