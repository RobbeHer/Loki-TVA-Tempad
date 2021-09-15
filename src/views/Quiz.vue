<template>
  <ContentContainer :black-bg="true">
    <div>
      <template v-if="questionCount !== questions.length">
        <table>
          <tr>
            <th>Q{{ questionCount }}.</th>
            <th>
              <span v-html="currentQuestion.question"></span><br>
              <img v-if="typeof currentQuestion.image !== 'undefined'" :src="currentQuestion.image" alt="'Image'" height="100px" width="auto" />
            </th>
          </tr>
          <tr v-for="answer in currentQuestion.possibleAnswers"
              :key="answer.id"
              @click="!review ? answered(answer.id) : null">
            <td>{{ answer.id }}.</td>
            <td :class="{
                wrong: isWrong(answer),
                correct: isCorrect(answer)
            }">{{ answer.text }}</td>
          </tr>
        </table>
        <button v-if="review" @click="next">next</button>
      </template>
      <template v-else>
        <p>Score: {{ score }}</p>
      </template>
    </div>
  </ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
const imageResetCharges = require("../assets/img/reset-charges.jpg");

export default {
  name: "Quiz",
  components: {
    ContentContainer,
  },
  data() {
    const questions = [
          {
            question: 'What happens when a Nexus event branches past red line?',
            correctAnswer: 'B',
            possibleAnswers: [
              {id: 'A', text: 'Very bad things.'},
              {id: 'B', text: 'It\'s when the TVA can no longer reset the Nexus event.'},
            ]
          },
          {
            question: 'Thanos has two apples. He eats both but realizes he wants more. He goes back in time 20 minutes' +
                'and eats the apples again. <br/> Does this mean the apples will not have existed in the timeline he left?',
            correctAnswer: 'B',
            possibleAnswers: [
              {id: 'A', text: 'No, because time is constantly happening.'},
              {id: 'B', text: 'The question doesn\'t matter because a branch cannot change another time branch.'},
              {id: 'C', text: 'Thanos would\'ve been hungry prior because the Grandfather paradox already accounted' +
                    'for the change in matter before its move.'},
            ]
          },
          {
            //question: 'Why do we need to show up in real time on a nexus event?',
            question: 'Why don\'t we travel back to before an attack on our huntsmen when the variant first arrives?',
            correctAnswer: 'A',
            possibleAnswers: [
              {id: 'A', text: 'Nexus events destabilise the time flow. After all are these branches still changing and growing.'},
              {id: 'B', text: 'It would create a Grandfather paradox where sending the first squad would have been unnecessary' +
                    'and the second one never occurring.'},
            ]
          },
          {
            question: 'What are these?',
            image: imageResetCharges,
            correctAnswer: 'C',
            possibleAnswers: [
              {id: 'A', text: 'Hip flasks'},
              {id: 'B', text: 'Smoke grenades'},
              {id: 'C', text: 'Reset charges'},
            ]
          },
          {
            question: 'What is the function of a Reset charge?',
            correctAnswer: ['A', 'B'],
            possibleAnswers: [
              {id: 'A', text: 'Prune the effected radius of a branch\'s timeline, allowing time to heal all its wounds.'},
              {id: 'B', text: 'Disintegrate everything in its vicinity.'},
            ]
          },
        ];

    return {
      score: 0,
      questionCount: 0,
      questions: questions,
      currentQuestion: questions[0],
      selectedQuestion: 0,
      review: false
    }
  },
  methods: {
    isWrong(answer) {
      if (!this.review) return false;
      if (typeof this.currentQuestion.correctAnswer === "object") {
        return this.selectedQuestion === answer.id && !this.currentQuestion.correctAnswer.includes(answer.id);
      }
      return this.selectedQuestion === answer.id && answer.id !== this.currentQuestion.correctAnswer;
    },
    isCorrect(answer) {
      if (!this.review) return false;
      if (typeof this.currentQuestion.correctAnswer === "object") {
        return this.currentQuestion.correctAnswer.includes(answer.id);
      }
      return answer.id === this.currentQuestion.correctAnswer;
    },
    answered(id) {
      if (typeof this.currentQuestion.correctAnswer === "object") {
        if (this.currentQuestion.correctAnswer.includes(id)) this.score++;
      } else {
        if (id === this.currentQuestion.correctAnswer) this.score++;
      }
      this.review = true;
      this.selectedQuestion = id;
    },
    next() {
      if (++this.questionCount !== this.questions.length) this.currentQuestion = this.questions[this.questionCount];
      this.review = false;
    }
  }
}
</script>

<style scoped>
div:nth-child(2) {
  position: absolute;
  inset: 10px;
  border: 1px solid var(--main-color-lighten);
}
table {
  width: 100%;
}
tr {
  vertical-align: top;
}
tr:first-child {
  border-bottom: 1px solid var(--main-color-lighten);
}
th:first-child {
  padding-right: 20px !important;
}
th, td {
  padding: 5px 10px !important;
}
.correct {
  background-color: var(--main-color-lighten);
  color: black;
}
.wrong {
  background-color: red;
  color: black;
}
</style>