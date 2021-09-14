<template>
  <ContentContainer :border="true" :black-bg="true">
    <div v-if="questionCount !== questions.length">
      <p>{{ questionCount }}. {{ currentQuestion.question }}</p>
      <div v-if="!review">
        <button v-for="answer in currentQuestion.possibleAnswers"
                :key="answer.id"
                @click="answered(answer.id)">
          {{ answer.text }}
        </button>
      </div>
      <div v-else>
        <p v-for="answer in currentQuestion.possibleAnswers"
           :key="answer.id">
          {{ answer.id === currentQuestion.correctAnswer ? 'V' : 'X' }}  {{ answer.text }}
        </p>
        <button @click="next">next</button>
      </div>
    </div>
    <div v-else>
      <p>Score: {{ score }}</p>
    </div>
  </ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "Quiz",
  components: {
    ContentContainer,
  },
  data() {
    const questions = [
          {
            question: 'question',
            correctAnswer: 0,
            possibleAnswers: [
              {id: 0, text: 'answer 1'},
              {id: 1, text: 'answer 2'},
              {id: 2, text: 'answer 3'},
            ]
          },
          {
            question: 'question',
            correctAnswer: 2,
            possibleAnswers: [
              {id: 0, text: 'answer 1'},
              {id: 1, text: 'answer 2'},
              {id: 2, text: 'answer 3'},
            ]
          }
        ];

    return {
      score: 0,
      questionCount: 0,
      questions: questions,
      currentQuestion: questions[0],
      review: false
    }
  },
  methods: {
    answered(id) {
      if (id === this.currentQuestion.correctAnswer) this.score++;
      this.review = true;
    },
    next() {
      if (++this.questionCount !== this.questions.length) this.currentQuestion = this.questions[this.questionCount];
      this.review = false;
    }
  }
}
</script>

<style scoped>

</style>