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
import { collection, getDocs } from 'firebase/firestore'

export default {
  data: () => ({
    docs: [],
  }),
  async mounted () {
    await FirebaseSingleton.initialize()
    const firestore = await FirebaseSingleton.getFirestore()
    const querySnapshot = await getDocs(collection(firestore, 'users'))
    this.docs = querySnapshot.docs
  },
}
</script>
