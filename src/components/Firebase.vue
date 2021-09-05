<template>
  <section>
    <h2>Firebase</h2>
    <div>
      {{ docs }}
    </div>
  </section>
</template>

<script>
import FirebaseSingleton from '../firebase.js'

export default {
  data: () => ({
    docs: [],
  }),
  async mounted () {
    await FirebaseSingleton.initialize()
    const firestore = await FirebaseSingleton.getFirestore()
    console.log(firestore)
    const querySnapshot = await firestore.collection("users").get()
    this.docs = querySnapshot.docs;
  },
}
</script>
