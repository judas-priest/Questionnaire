<template>
  <div class="completed">
    <h2 class="completed-message">Thank you for completing the questionnaire!</h2>
  </div>
</template>
<script>
export default {
  mounted() {
    if (!document.cookie.includes('completed=true')) {
      this.$router.push({
        path: `/`
      })
    } else {
      document.cookie = 'completed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None";'
    }
  },
  methods: {}
}
</script>
