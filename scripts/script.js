function showAnswer(element) {
    let id = element.dataset.questionId
    let closed = element.dataset.answerClosed

    let li = element.parentElement
    let answer = li.querySelector(`[data-answer-id='${id}']`)

    if (closed == "true") {
        answer.style.display = "block"
        closed = "false"
    } else {
        answer.style.display = "none"
        closed = "true"
    }

    element.dataset.answerClosed = closed
}