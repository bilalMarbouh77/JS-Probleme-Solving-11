function zero(op) {
    if(op===undefined){
        return 0
    }else{
        if(op[0]=="+"){
            return 0 + op[1]
        }else if(op[0]=="-"){
            return 0 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(0 / op[1])
        }else if(op[0]=="*"){
            return 0 * op[1]
        }
    }
}
function one(op) {
    if(op===undefined){
        return 1
    }else{
        if(op[0]=="+"){
            return 1 + op[1]
        }else if(op[0]=="-"){
            return 1 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(1 / op[1])
        }else if(op[0]=="*"){
            return 1 * op[1]
        }
    }
}
function two(op) {
    if(op===undefined){
        return 2
    }else{
        if(op[0]=="+"){
            return 2 + op[1]
        }else if(op[0]=="-"){
            return 2 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(2 / op[1])
        }else if(op[0]=="*"){
            return 2 * op[1]
        }
    }
}
function three(op) {
    if(op===undefined){
        return 3
    }else{
        if(op[0]=="+"){
            return 3 + op[1]
        }else if(op[0]=="-"){
            return 3 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(3 / op[1])
        }else if(op[0]=="*"){
            return 3 * op[1]
        }
    }
}
function four(op) {
    if(op===undefined){
        return 4
    }else{
        if(op[0]=="+"){
            return 4 + op[1]
        }else if(op[0]=="-"){
            return 4 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(4 / op[1])
        }else if(op[0]=="*"){
            return 4 * op[1]
        }
    }
}
function five(op) {
    if(op===undefined){
        return 5
    }else{
        if(op[0]=="+"){
            return 5 + op[1]
        }else if(op[0]=="-"){
            return 5 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(5 / op[1])
        }else if(op[0]=="*"){
            return 5 * op[1]
        }
    }
}
function six(op) {
    if(op===undefined){
        return 6
    }else{
        if(op[0]=="+"){
            return 6 + op[1]
        }else if(op[0]=="-"){
            return 6 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(6 / op[1])
        }else if(op[0]=="*"){
            return 6 * op[1]
        }
    }
}
function seven(op) {
    if(op===undefined){
        return 7
    }else{
        if(op[0]=="+"){
            return 7 + op[1]
        }else if(op[0]=="-"){
            return 7 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(7 / op[1])
        }else if(op[0]=="*"){
            return 7 * op[1]
        }
    }
}
function eight(op) {
    if(op===undefined){
        return 8
    }else{
        if(op[0]=="+"){
            return 8 + op[1]
        }else if(op[0]=="-"){
            return 8 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(8 / op[1])
        }else if(op[0]=="*"){
            return 8 * op[1]
        }
    }
}
function nine(op) {
    if(op===undefined){
        return 9
    }else{
        if(op[0]=="+"){
            return 9 + op[1]
        }else if(op[0]=="-"){
            return 9 - op[1]
        }else if(op[0]=="/"){
            return Math.floor(9 / op[1])
        }else if(op[0]=="*"){
            return 9 * op[1]
        }
    }
}

function plus(num) {return ["+",num]}
function minus(num) {return ["-",num]}
function times(num) {return ["*",num]}
function dividedBy(num) {return ["/",num]}

// Qaution:

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));
