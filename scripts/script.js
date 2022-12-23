function showAnswer(element) {
    let id = element.dataset.questionId
    let closed = element.dataset.answerClosed

    let li = element.parentElement
    let answer = li.querySelector(`[data-answer-id='${id}']`)

    let ul = li.parentElement
    let allAnswers = ul.querySelectorAll(`.faq-answer`)


    if (closed == "true") {
        answer.style.maxHeight = "1500px"
        closed = "false"
    } else {
        answer.style.maxHeight = "0"
        closed = "true"
    }

    allAnswers.forEach(alpha => {
        if (alpha.dataset.answerId != id) {
            alpha.style.maxHeight = "0"
            ul.querySelector(`[data-question-id='${alpha.dataset.answerId}']`).dataset.answerClosed = "true"
        }
    })

    element.dataset.answerClosed = closed
}