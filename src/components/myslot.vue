<template>
      <div>
            <header>
                  <slot name="header"></slot>
            </header>

            <main>
                  <slot name="midden"></slot>
            </main>
            <footer>
                  <slot :user="user">{{user.lastName}}</slot>
            </footer>
      </div>
</template>

<script>
    export default {
        name: "myslot",
        data(){
            return{
                user:{lastName:'有钱',firstName:'钟'}
            }
        }
    }
</script>

<style scoped>

</style>
