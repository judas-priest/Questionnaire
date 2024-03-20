<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Thin', sans-serif;
  font-family: 'Roboto Light', sans-serif;
  font-family: 'Roboto Medium', sans-serif;
  font-family: 'Roboto Black', sans-serif;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.questionnaire,
.completed {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f5f5f5;
}

.question-container,
.completed-container {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}

@media (max-width: 600px) {
  .question-container,
  .completed-container {
    width: 100%;
    margin-top: 0;
  }
}

.question {
  font-size: 24px;
  margin-bottom: 10px;
}

.answer-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

button {
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.nav-button {
  background-color: #3498db;
}

.next-button {
  background-color: #27ae60;
  margin-left: auto;
}
.finish-button {
  background-color: #ffab40;
  margin-left: auto;
}
.download-button {
  background-color: #3f51b5;
}
.completed-message {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
