function receivesAFunction (callback){
    return (callback());
}

function returnsANamedFunction () {
    return (function namedFunction(name) {return name});
}

function returnsAnAnonymousFunction() {
    return(function(anonFunction) {return anonFunction});
}