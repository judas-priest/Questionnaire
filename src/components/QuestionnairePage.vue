<template>
  <div class="questionnaire">
    <div v-if="!completed && questions.length" class="question-container">
      <h2 class="question">
        {{ questions[currentQuestionIndex - 1].question }}
      </h2>
      <textarea
        v-model="answer"
        rows="2"
        class="answer-input"
        :placeholder="questions[currentQuestionIndex - 1].placeholder"
      ></textarea>
      <div class="button-container">
        <button v-if="currentQuestionIndex > 1" class="nav-button" @click="previousQuestion">
          Previous
        </button>
        <button
          v-if="currentQuestionIndex !== questions.length"
          class="next-button"
          @click="nextQuestion"
        >
          Next
        </button>
        <button v-else class="finish-button" @click="finishQuestion">Finish</button>
      </div>
    </div>
    <div v-else class="completed-container"></div>
  </div>
</template>
d

<script>
import pdfMake from 'pdfmake/build/pdfmake'
const currentUrl = window.location.origin

const fonts = {
  Roboto: {
    normal: `${currentUrl}/fonts/Roboto-Regular.ttf`,
    bold: `${currentUrl}/fonts/Roboto-Medium.ttf`,
    italics: `${currentUrl}/fonts/Roboto-Italic.ttf`,
    bolditalics: `${currentUrl}/fonts/Roboto-MediumItalic.ttf`
  }
}

pdfMake.fonts = fonts

export default {
  data() {
    return {
      questions: [],
      currentQuestionIndex: 1,
      completed: false
    }
  },
  mounted() {
    const timestamp = Date.now()
    fetch('../questions.json?' + timestamp)
      .then((response) => response.json())
      .then((data) => {
        this.questions = data
      })
      .catch((error) => {
        console.error('Error fetching questions:', error)
      })
    this.$router.push({
      path: `/question/${this.currentQuestionIndex}`
    })
  },
  computed: {
    question() {
      return this.questions[this.currentQuestionIndex - 1]
    },
    answer: {
      get() {
        return this.question.answer
      },
      set(value) {
        this.questions[this.currentQuestionIndex - 1].answer = value
      }
    }
  },
  methods: {
    previousQuestion() {
      if (this.currentQuestionIndex > 1) {
        this.currentQuestionIndex--
        this.$router.push({
          path: `/question/${this.currentQuestionIndex}`
        })
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestionIndex++
        this.$router.push({
          path: `/question/${this.currentQuestionIndex}`
        })
      }
    },
    finishQuestion() {
      this.generateFile()
      this.completed = true

      const expirationDate = new Date()
      expirationDate.setMonth(expirationDate.getMonth() + 3)
      const formattedDate = expirationDate.toUTCString()
      document.cookie = `completed=true; expires=${formattedDate}; path=/; SameSite=Strict; `

      this.$router.push({
        path: '/completed'
      })
    },
    generateFile() {
      const docDefinition = {
        content: []
      }

      this.questions.forEach((question) => {
        //index
        docDefinition.content.push(
          { text: `${question.question}`, bold: true }, //${index + 1}.
          { text: question.answer, margin: [0, 0, 0, 15] }
        )
      })

      const pdf = pdfMake.createPdf(docDefinition)
      pdf.download('answers.pdf')
    }
  }
}
</script>
<style></style>
