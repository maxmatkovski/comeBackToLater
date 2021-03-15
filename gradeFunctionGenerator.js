// Grade Function Generator

function minimumGrade(minGrade, yourScore){
    return function (testAverage, numOfAssignments) {
        return let finalScore = (((testAverage * numOfAssignments) + yourScore)/(numOfAssignments + 1))

        if (finalScore => minGrade) {
            return(`You finished with a ${finalScore}`)
        } else {
            return (`Sorry you have a ${finalScore}`)
        }

    }
}
