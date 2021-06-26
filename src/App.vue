<template>
  <main>
    <h2>Tester vos expressions régulières</h2>
    <div class="container">
      <section class="grok">
        <label for="grok-input"><h3>Expression</h3></label>
        <div class="input-text">
          <textarea id="grok-input" placeholder="Entrez votre expression régulière ..." v-model="grok" style="display: none"></textarea>
        </div>
      </section>
      <section class="test-string">
        <label for="test-string"><h3>Chaine de test</h3></label>
        <div class="input-text">
          <textarea id="test-string" placeholder="Entrez votre chaîne de test ..." v-model="testString" style="display: none"></textarea>
        </div>
      </section>
      <section class="result">
        <h3>Résultat</h3>
        <div id="grok-result"></div>
      </section>
      <div>
        <button @click="test">Test</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/nord.css'
import 'codemirror/addon/display/placeholder';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const grok = ref<string>('');
    const testString = ref<string>('');

    onMounted(() => {
      const grokEditor = CodeMirror.fromTextArea(document.getElementById('grok-input') as HTMLTextAreaElement, {
        lineNumbers: true,
        theme: 'dracula',
        mode: "none",
      })

      const testStringEditor = CodeMirror.fromTextArea(document.getElementById('test-string') as HTMLTextAreaElement, {
        lineNumbers: true,
        theme: 'dracula',
        mode: 'grok'
      })
      
      grokEditor.on("change", (element) => {
        grok.value = element.getValue();
        setTimeout(() => {
          testStringEditor.setValue(testStringEditor.getValue());
        },10)
        
      })
    })
    
    CodeMirror.defineMode("grok",function() {
      return {
        token: function(stream, state) {
          if(grok.value){
            try {
              var regexExp = new RegExp(grok.value, 'g')
              if(stream.match(regexExp)) {
                stream.eat(regexExp)
                return "grok";
              } else {
                stream.next();
                return null;
              }
            } catch (error) {
              stream.next();
              return null;
            }
          } else {
            stream.next();
            return null;
          }
        } 
      } 
    })
  
    const test = async () => {
      console.log('temp')
    }

    return { grok, testString, test }
  }
});
</script>

<style lang="scss">
@import './assets/scss/index.scss'; 

h2 {
  text-align: center;
  padding: 2rem;
}

.container {
  width: 70%;
  margin: 0 auto;
  background-color: var(--secondary);
  color: var(--font);
  padding: 1.5rem;
}

.container section {
  border-top: 2px solid var(--red);
}

h3 {
  margin: 0.8rem 0.4rem 0.4rem 0;
  font-size: 24px;
}

.input-text {
  height: 7rem;
}

.test-string, .result {
  margin: 1rem 0 0 0;
}

@media screen and (max-width: 600px) {
  .container {
    margin: 0;
    width: auto;
  }
}
</style>
