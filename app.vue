<template>
  <div>
    {{ id }}
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { nanoid } from "nanoid";

const id = nanoid()
const { account, database } = useAppwrite()
const promise = await account.createEmailSession('hasan.erken@gmail.com', 'hasan123');
try {
  const res = await account.get()
  console.log(res)
  database.listDocuments('6538ffb41564bf248ea3', '65398c4b8dc38c9469c1').then(res => {
    console.log(res)
  })
} catch (err) {
  console.log(err)
}


</script>
